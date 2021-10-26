
export interface ProductDetailsProps {
  
}

export interface ProductDetailsBodyRequest {
  code: number
  product: ProductDetailsObject
  status: number
  status_verbose: string
}

export interface ProductDetailsObject {
  allergens_hierarchy: string[],
  categories: string,
  image_front_url: string,
  ingredients_text: string,
  product_name: string
}