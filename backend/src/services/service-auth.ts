import { HttpException, HttpStatus, Injectable } from '@nestjs/common';  
import { LoginResponseDto } from 'src/dto/HttpResponseDto';
import { validateEmail, validatePassword } from 'src/helperFunctions/validations';

@Injectable()
export class AuthenticationService {  
  validateLogin(
    email: string,
    password: string
  ): LoginResponseDto {
    if (password === 'akshay' && validateEmail(email)) {
      return {
        statusCode: 200,
        message: 'Login successful'
      }
    } else {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Invalid Credentials',
    }, HttpStatus.FORBIDDEN);
    } 
  }

  signupUser(
    email: string,
    password: string
  ): LoginResponseDto{
    if (validateEmail(email) && validatePassword(password)) {
      return {
        statusCode: 200,
        message: 'Login successful'
      }
    } else {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Badly Formatted Data'
      }, HttpStatus.BAD_REQUEST)
    }
  }
}