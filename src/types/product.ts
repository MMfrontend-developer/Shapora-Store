export interface Product {
  id: string | number;
  name: string;
  price: number;
  image: string;
  images?: string[];
  description?: string;
  category?: string;
  sizes?: string[];
}