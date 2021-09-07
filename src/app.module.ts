import { Module } from '@nestjs/common';

// Controllers
import { ProductController } from './controllers/con-product' 
import { AuthController } from './controllers/con-auth';
// Database Config
import { TypeOrmModule } from '@nestjs/typeorm'; 

// Services
import { ProductService } from './services/service-product';
import { AuthenticationService } from './services/service-auth';
@Module({
  imports: [
    TypeOrmModule.forRoot(), 
  ],
  controllers: [ProductController, AuthController],
  providers: [ProductService, AuthenticationService]
})
export class AppModule {}
