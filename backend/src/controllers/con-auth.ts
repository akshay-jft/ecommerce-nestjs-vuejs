import { HttpStatus } from '@nestjs/common';
import { Body, Controller, HttpCode, HttpException, Post } from '@nestjs/common' 
import { AuthDto } from 'src/dto/AuthDto';
import { LoginResponseDto } from 'src/dto/HttpResponseDto';
import { AuthenticationService } from 'src/services/service-auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly authServices: AuthenticationService) { }

  @Post()
  validateLogin(
    @Body() body: AuthDto
  ): LoginResponseDto {
    return this.authServices.validateLogin(body.email, body.password)
  }

  @Post('/signup')
  signupUser(
    @Body() body: AuthDto
  ) {
    return this.authServices.signupUser(body.email, body.password)
  }
}