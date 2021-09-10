import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid'
import { FetchProductResponseDto, addProductDto } from 'src/dto/ProductDto';

import { HttpResponseDto } from 'src/dto/HttpResponseDto'
import { getProducts, addProducts, setProducts } from 'src/storage/store'; 
import { throwBadRequestException, throwForbiddenRequest } from 'src/helperFunctions/httpExceptions';

@Injectable()
export class ProductService {
  private db = getProducts() 

  fetchProducts() :FetchProductResponseDto[] {
    return this.db 
  }

  fetchProduct(id: string): FetchProductResponseDto | HttpResponseDto {
    const foundProduct =  this.db.find(product => {
      return product.id === id
    })
    if (foundProduct) {
      return foundProduct
    } else {
      throw throwBadRequestException('Unable to find product') 
    }
  }

  addProduct(data: addProductDto) :FetchProductResponseDto {
    const newProduct = {
      id: uuidv4(),
      ...data
    }
    addProducts(newProduct)
    this.db = getProducts()
    return newProduct
  }

  updateProductDetails(uuid: string, data: addProductDto): FetchProductResponseDto | HttpResponseDto {
    this.db = this.db.map(product => {
      if (product.id == uuid) {
        product = {
          id: uuid,
          ...data
        }
        return product
      }
    })
    setProducts(this.db)
    throw throwBadRequestException(`Unable to update`) 
  }

  deleteProduct(uuid: string): FetchProductResponseDto | HttpResponseDto{
    const deletedElement = this.db.find(product => {
      return product.id === uuid
    })
    this.db = this.db.filter(product => {
      return product.id !== uuid
    })
    setProducts(this.db) 

    if (deletedElement) {
      return deletedElement
    } else {
      throw throwBadRequestException(`Unable to delete product with id ${uuid}`)
    }
  }
}