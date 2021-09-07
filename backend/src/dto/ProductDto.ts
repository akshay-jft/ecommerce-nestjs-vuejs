export interface FetchProductResponseDto {
  id: string
  name: string,
  price: string,
  description: string,
  categories: string[]
}

export interface addProductDto { 
  name: string,
  price: string,
  description: string,
  categories: string[]
}