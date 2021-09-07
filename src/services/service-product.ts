import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid'
import { FetchProductResponseDto, addProductDto } from 'src/dto/ProductDto';

import { data } from 'src/data/tempData';
import { HttpResponseDto } from 'src/dto/HttpResponseDto'
export class ProductService {
  private db = data 

  fetchProducts() :FetchProductResponseDto[] {
    return this.db 
  }

  fetchProduct(id): FetchProductResponseDto | HttpResponseDto {
    const foundProduct =  this.db.find(product => {
      return product.id === id
    })
    if (foundProduct) {
      return foundProduct
    } else {
      throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'Unable to find product',
      }, HttpStatus.BAD_REQUEST);
    }
  }

  addProduct(data: addProductDto) :FetchProductResponseDto {
    const newProduct = {
      id: uuidv4(),
      ...data
    }
    this.db.push(newProduct)
    return newProduct
  }

  updateProductDetails(uuid: string, data: addProductDto): FetchProductResponseDto | HttpResponseDto {
    this.db.map(product => {
      if (product.id == uuid) {
        product = {
          id: uuid,
          ...data
        }
        return product
      }
    })
    throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Unable to update',
    }, HttpStatus.BAD_REQUEST);
  }

  deleteProduct(uuid: string): FetchProductResponseDto | HttpResponseDto{
    const deletedElement = this.db.find(product => {
      return product.id === uuid
    })
    this.db = this.db.filter(product => {
      return product.id !== uuid
    })

    if (deletedElement) {
      return deletedElement
    } else {
      throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: `Unable to delete product with id ${uuid}`,
      }, HttpStatus.BAD_REQUEST);
    }
  }
}