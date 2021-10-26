
export interface ProductListProps {
  itemsList: ProductObject[]
}

export interface ProductObject {
  id: number
  image_front_small_url: string
  product_name?: string
}