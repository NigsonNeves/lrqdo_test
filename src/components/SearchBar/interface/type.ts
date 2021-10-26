import { ProductObject } from "../../ProductList/interface/type";

export interface SearchBarProps {
  placeHolder: string
}

export interface SearchProductBodyRequest {
  count: number
  page: number
  page_count: number
  page_size: number
  products: ProductObject[]
}