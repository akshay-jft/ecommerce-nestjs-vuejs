import { HttpException, HttpStatus } from '@nestjs/common';

const throwBadRequestException = (msg: string) => {
  return new HttpException({
    status: HttpStatus.BAD_REQUEST,
    error: msg,
  }, HttpStatus.BAD_REQUEST);
}

const throwForbiddenRequest = (msg: string) => {
  return new HttpException({
    status: HttpStatus.FORBIDDEN,
    error: msg,
  }, HttpStatus.FORBIDDEN);
}

export {
  throwBadRequestException,
  throwForbiddenRequest
}