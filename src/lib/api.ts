import { Product } from "../types/product";

export async function getProducts(): Promise<Product[]> {
  return [
    { id: 1, name: "Nike Sneakers", price: 100, image: "/shoe.jpg" },
    { id: 2, name: "Adidas Hoodie", price: 70, image: "/hoodie.jpg" },
  ];
}

export async function addProduct(product: Omit<Product, "id">): Promise<void> {
  // later replace with database/API call
  console.log("Added product:", product);
}
