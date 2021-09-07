import { Module } from '@nestjs/common'; 
import { ProductController } from './controllers/con-product'

// Database Config
import { TypeOrmModule } from '@nestjs/typeorm';
// Services
import { ProductService } from './services/service-product';
@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService]
})
export class AppModule {}
