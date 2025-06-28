import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from '../users/repository/user.repository';
import { RegisterDto } from './dto/register.auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private userRepository: UserRepository,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByEmail(email);
    const isMatch = await bcrypt.compare(pass, user!.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user!._id, email: user!.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  async register(data: RegisterDto): Promise<any> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(data.password, saltOrRounds);

    const createdData = await this.userRepository.create({
      ...data,
      password: hash,
    });

    return createdData;
  }
}
