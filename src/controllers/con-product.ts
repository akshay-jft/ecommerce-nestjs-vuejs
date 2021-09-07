import { Controller, Delete, Get, Post, Put, Param, Body } from '@nestjs/common'
import { HttpResponseDto } from 'src/dto/HttpResponseDto';
import { ProductService } from 'src/services/service-product';

// DTo 
import { FetchProductResponseDto, addProductDto } from '../dto/ProductDto'

@Controller('products')
export class ProductController {

  constructor(private readonly productService: ProductService) { }
  @Get()
  fetchProducts(): FetchProductResponseDto[] {
    return this.productService.fetchProducts()
  }

  @Get('/:productId')
  fetchProduct(
    @Param('productId') productId: string
  ): FetchProductResponseDto | HttpResponseDto {
    return this.productService.fetchProduct(productId)
  }

  @Post() 
  addProduct(
    @Body() body: addProductDto
  ): FetchProductResponseDto | HttpResponseDto {
    return this.productService.addProduct(body)
  }

  @Put('/:productId')
  updateProductDetails(
    @Param('productId') productId: string,
    @Body() body: addProductDto
  ): FetchProductResponseDto | HttpResponseDto {
    return this.productService.updateProductDetails(productId, body)
  }

  @Delete('/:productId')
  deleteProduct(
    @Param('productId') productId: string
  ): FetchProductResponseDto | HttpResponseDto {
    return this.productService.deleteProduct(productId)
  }
}