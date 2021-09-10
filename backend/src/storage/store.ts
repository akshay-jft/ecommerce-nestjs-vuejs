import { addProductDto, FetchProductResponseDto } from "src/dto/ProductDto"

const getProducts = () => {
  return JSON.parse(localStorage.getItem('products'))
}

const addProducts = (product: addProductDto) => {
  localStorage.setItem('products', JSON.stringify(getProducts().push(product)))
}

const setProducts = (products: FetchProductResponseDto[]) => {
  localStorage.setItem('products', JSON.stringify(products))
}

export {
  getProducts,
  addProducts,
  setProducts
}