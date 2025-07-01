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
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.USER)
  findOne(@Param('id') id: Types.ObjectId) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  @Roles(Role.ADMIN, Role.USER)
  update(
    @Param('id') id: Types.ObjectId,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  delete(@Param('id') id: Types.ObjectId) {
    return this.usersService.delete(id);
  }
}
