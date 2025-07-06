import {
  Controller,
  Get,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { Types } from 'mongoose';
import { ApiSecurity } from '@nestjs/swagger';
import { Roles } from '../common/decorator/authorization.decorator';
import { RolesGuard } from '../common/guard/guard';
import { Role } from '../common/enums/roles.enum';
import { AuthGuard } from '../common/guard/auth.guard';
@ApiSecurity('basic')
@UseGuards(AuthGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('')
  @Roles(Role.ADMIN, Role.USER)
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.USER)
  async findOne(@Param('id') id: Types.ObjectId) {
    return await this.usersService.findOne(id);
  }

  @Put(':id')
  @Roles(Role.ADMIN, Role.USER)
  async update(
    @Param('id') id: Types.ObjectId,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  async delete(@Param('id') id: Types.ObjectId) {
    return await this.usersService.remove(id);
  }
}
