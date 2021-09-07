import { HttpStatus } from '@nestjs/common';
import { Body, Controller, HttpCode, HttpException, Post } from '@nestjs/common' 
import { AuthDto } from 'src/dto/AuthDto';
import { LoginResponseDto } from 'src/dto/HttpResponseDto';
import { AuthenticationService } from 'src/services/service-login';

@Controller('auth')
export class AuthController {
  constructor(private readonly authServices: AuthenticationService) { }

  @Post( )
  validateLogin(
    @Body() body: AuthDto
  ): LoginResponseDto {
    if (this.authServices.validateLogin(body.email, body.password)) {
      return {
        statusCode: 200,
        message: "Sucessfully logged in"
      }
    } else {
      throw new HttpException({
          status: HttpStatus.FORBIDDEN,
          error: 'Invalid Credentials',
      }, HttpStatus.FORBIDDEN);
    } 
  }
}