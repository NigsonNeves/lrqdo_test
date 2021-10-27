
export interface SearchBarProps {
  placeHolder: string
}

export interface ProductListProps {
  itemsList: ProductObject[]
}

export interface ProductObject {
  id: number
  image_front_small_url: string
  product_name?: string
}

export interface SearchProductBodyRequest {
  count: number
  page: number
  page_count: number
  page_size: number
  products: ProductObject[]
}
