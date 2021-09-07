export interface UserResponseDto {
  id: string,
  name: string,
  email: string,
  cartId: string, 
  created: string,
  password: string
}

export interface UserCartDto{
  id: string,
  name: string
  image: string,
  total: number,
  price: number,
  quantity: number,
}

export interface wishListDto{
  id: string,
  name: string
  image: string,
} 