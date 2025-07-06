import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.auth.dto';
import { RegisterDto } from './dto/register.auth.dto';

import { AuthGuard } from '../common/guard/auth.guard';
import { AuthRequest } from '../common/interfaces/auth-request.interface';
import { ChangePasswordDto } from './dto/change-password.auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: SignInDto) {
    return await this.authService.signIn(signInDto.email, signInDto.password);
  }
  @HttpCode(HttpStatus.OK)
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return await this.authService.register(registerDto);
  }
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req: AuthRequest) {
    return req.user;
  }
  @UseGuards(AuthGuard)
  @Post('change-password')
  async changePassword(@Body() body: ChangePasswordDto) {
    return await this.authService.changePassword(body);
  }
}
