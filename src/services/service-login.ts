import { Injectable } from '@nestjs/common';  

@Injectable()
export class AuthenticationService { 

  validateLogin(
    username: string,
    password: string
  ): boolean {
    if (username === 'akshay' && password === 'akshay') {
      return true
    }
    return false
  }
}