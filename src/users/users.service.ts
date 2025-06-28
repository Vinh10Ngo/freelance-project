import { Injectable, Get } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repository/user.repository';
import { Types } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  @Get()
  async findAll(): Promise<any> {
    return await this.userRepository.findAll();
  }

  async findOne(id: Types.ObjectId) {
    return await this.userRepository.findById(id);
  }

  async findOneByEmail(email: string) {
    return await this.userRepository.findByOneEmail(email);
  }

  async update(id: Types.ObjectId, updateUserDto: UpdateUserDto) {
    return await this.userRepository.updateOne(id, updateUserDto);
  }

  async delete(id: Types.ObjectId) {
    return await this.userRepository.deleleOne(id);
  }
}
