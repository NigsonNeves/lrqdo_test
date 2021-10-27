import { SearchProductBodyRequest } from "../../../components/SearchBar/interface/type";
import { ProductDetailsBodyRequest } from "../../../components/ProductDetails/interface/type";
import { multipleProductURL, productDetailsURL } from "../url/product";

export const getProductDetailsRequest = async (code: string): Promise<ProductDetailsBodyRequest> => {
  try {
    let request: Response = await fetch(productDetailsURL(code));
    let response: ProductDetailsBodyRequest = await request.json();

    return response;
  } catch (error: unknown) {
    throw new Error("Couldn't load product details")
  }
}

export const getMultipleProductsRequest = async (name: string): Promise<SearchProductBodyRequest> => {
  try {
    let request: Response = await fetch(multipleProductURL(name));
    let response: SearchProductBodyRequest = await request.json();
  
    return response;
  } catch (error: unknown) {
    throw new Error("Couldn't get products")
  }
}
