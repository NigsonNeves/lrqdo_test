
export const productDetailsURL = (code: string): string => {
  return `https://world.openfoodfacts.org/api/v0/product/${code}.json?fields=product_name%2Ccategories%2Cimage_front_url%2Callergens_hierarchy%2Cingredients_text`
}

export const multipleProductURL = (name: string): string => {
  return `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${name}&search_simple=1&action=process&fields=id%2Cproduct_name%2Cimage_front_small_url&json=1&page=1&page_size=24`
}
