import { Request } from '@nestjs/common';
export interface AuthRequest extends Request {
  user: {
    sub: string;
    email: string;
    role: string;
  };
  token: string;
  customData?: any;
}
