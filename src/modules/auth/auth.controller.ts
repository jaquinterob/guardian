import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LogginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LogginDto) {
    return this.authService.login(loginDto);
  }
}
