import { Controller, Get, Param } from '@nestjs/common'
import { UserResponseDto } from 'src/dto/UserDto'

@Controller('user')
export class UserController {
  @Get('/:userId')
  getUserDetails(
    @Param('userId') userId: string
  ) {
    
  }
}