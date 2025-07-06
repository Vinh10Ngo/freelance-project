import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../users/repository/user.repository';
import { RegisterDto } from './dto/register.auth.dto';
import * as bcrypt from 'bcrypt';
import { ChangePasswordDto } from './dto/change-password.auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private userRepository: UserRepository,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    } else {
      const isMatch = await bcrypt.compare(pass, user.password);
      if (!isMatch) {
        throw new UnauthorizedException();
      }
    }
    const payload = { sub: user._id, email: user.email, role: user.role };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  async register(data: RegisterDto) {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(data.password, saltOrRounds);

    const createdData = await this.userRepository.create({
      ...data,
      password: hash,
    });

    return createdData;
  }
  async changePassword(body: ChangePasswordDto) {
    const user = await this.userRepository.findByOneEmail(body.email);
    if (!user) {
      throw new NotFoundException('Không tìm thấy người dùng');
    }
    const isTruePassword = await bcrypt.compare(
      body.oldPassword,
      user.password,
    );
    if (!isTruePassword) {
      throw new BadRequestException('Dữ liệu không hợp lệ');
    }
    const saltOrRounds = 10;
    const hashNewPassword = await bcrypt.hash(body.newPassword, saltOrRounds);
    await this.userRepository.updateOne(user.id, { password: hashNewPassword });
    return user;
  }
}
