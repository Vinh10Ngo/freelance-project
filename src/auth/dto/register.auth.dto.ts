import { Role } from '../../common/enums/roles.enum';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;
  @IsOptional()
  @IsString()
  readonly phone?: string;

  @IsOptional()
  @IsString()
  readonly avatar?: string;

  @IsOptional()
  @IsEnum(['male', 'female', 'other'])
  readonly gender?: 'male' | 'female' | 'other';

  @IsOptional()
  @IsString()
  readonly dateOfBirth?: string;
  @IsEnum(Role)
  role: Role;
}
