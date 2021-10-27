import { cleanup, render, screen } from '@testing-library/react'

import LeftColumn from '../components/ProductDetails/left-column'
import RightColumn from '../components/ProductDetails/right-column'

afterEach(cleanup)

test('Product Details - Left Column', () => {
  const product_details = {
    allergens_hierarchy: [
      "first_hallergen",
      "second_hallergen"
    ],
    categories: "Boisson",
    image_front_url: "/logo.svg",
    ingredients_text: "water, lemon",
    product_name: "Coca"
  }

  render(<LeftColumn product={product_details} />);

  const logo = screen.getByRole('img')

  expect(logo).toHaveAttribute('src', '/logo.svg');
  expect(logo).toHaveAttribute('alt', product_details.product_name);
});

test('Product Details - Right Column', () => {
  const product_details = {
    allergens_hierarchy: [
      "first_hallergen",
      "second_hallergen"
    ],
    categories: "Boisson",
    image_front_url: "/logo.svg",
    ingredients_text: "water, lemon",
    product_name: "Coca"
  }

  const { container } = render(<RightColumn product={product_details} />);
  
  expect(container.textContent).toContain(product_details.product_name)
  expect(container.textContent).toContain(product_details.ingredients_text)
  expect(container.textContent).toContain(product_details.categories)
  expect(container.textContent).toContain(product_details.allergens_hierarchy[0])
  expect(container.textContent).toContain(product_details.allergens_hierarchy[1])
});

