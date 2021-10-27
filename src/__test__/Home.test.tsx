import { cleanup, fireEvent, render, screen, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router';

import Home from '../pages/Home'
import ProductList from '../components/SearchBar/product-list'


afterEach(cleanup)

test('Home - Search bar initializes', () => {
  render(<Home />);

  const searchInput: HTMLElement | null = screen.queryByPlaceholderText('Search product...');

  expect(searchInput).toBeInTheDocument();

  expect(searchInput).toHaveValue('');

  if (searchInput) {
    fireEvent.change(searchInput, {target: { value : 'coca'}})
  }
  
  expect(searchInput).toHaveValue('coca');
});

test('Home - Title initializes', async () => {
  render(<Home />);

  const title = await screen.findByText("Search your favorite product");

  expect(title).toBeInTheDocument();
});

test('Home - Product List', () => {

  const fakeProducts = [
    {
      id: 1,
      image_front_small_url: "image",
      product_name : "Banana" 
    },
    {
      id: 2,
      image_front_small_url: "image",
      product_name : "Lemon" 
    }
  ];

  render(
    <MemoryRouter>
      <ProductList itemsList={fakeProducts}/>
    </MemoryRouter>
  );

  const list = screen.getByRole("list", { name: /product/i });
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");

  expect(items.length).toBe(fakeProducts.length);
  
});
