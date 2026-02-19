// app/(website)/products/data.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  category: string[];
  sizes: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Jacket",
    price: 89.99,
    images: ["/jacket1.jpg", "/jacket2.jpg", "/jacket3.jpg"],
    description:
      "This timeless denim jacket combines comfort and durability. Perfect for layering in all seasons.",
    category: ["Men"],
        sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "2",
    name: "Cotton Summer Dress",
    price: 59.99,
    images: ["/summer-dress1.jpg", "/summer-dress(2).jpg", "/summer-dress(3).jpg"],
    description:
      "Lightweight and breezy cotton dress designed for ultimate summer comfort.",
    category: ["Men"],
      sizes: ["S", "M", "L"],
  },
  {
    id: "3",
    name: "Kids Hoodie",
    price: 39.99,
    images: ["/kid's-hoodie (1).jpg", "/kid's-hoodie (2).jpg", "/princess-hoodie.jpg"],
    description:
      "Soft and comfy hoodie for kids, perfect for casual wear or chilly days.",
    category: ["Kids"],
      sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "4",
    name: "Combo Jacket",  
    price: 99.99,
    images: ["/Jack-Main.png", "/Jack-1.png", "/Jack-2.png"],
    description:
      "Make a statement at your next event with this elegant evening dress.",
    category: ["Men"],
    sizes: ["S", "M", "L"],
  },
  {
    id: "5",
    name: "Polo Tshirt",  
    price: 89.99,
    images: ["/polo-tshirt.jpg", "/polo-tshirt-green.jpg", "/polo-tshirt-purple (1).jpg",],
    description:
      "Classic polo t-shirt made from soft, breathable fabric. Perfect for casual outings.",
    category: ["Men"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "6",
    name: "Hoodie", 
    price: 49.99,
    images: ["/hoodie.jpg"],
    description:
      "Stay cozy and stylish with our classic hoodie, perfect for layering.",
    category: ["Kids"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "7",
    name: "Mini Jacket",  
    price: 59.99,
    images: ["/mini-jacket.jpg"],
    description:
      "A stylish mini jacket for kids, perfect for adding a layer of warmth.",
    category: ["Kids"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "8",
    name: "Solid Tshirt",  
    price: 29.99,
    images: ["/solid-shirt.jpg"],
    description:
      "A classic solid t-shirt made from soft, breathable fabric.",
    category: ["Men"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "9",
    name: "Fashion Sneakers",
    price: 79.99,
    images: ["/fashion-sneakers.jpg"],
    description:
      "Step up your shoe game with these stylish fashion sneakers.",
    category: ["Footwear", "Men"] ,
    sizes: ["6", "7", "8", "9", "10"],
  },
  {
    id: "10",
    name: "Black Sneakers",
    price: 89.99,
    images: ["/black-sneakers.jpg"],
    description:
      "Classic black sneakers that offer both style and comfort.",
    category: ["Footwear", "Men"],
    sizes: ["6", "7", "8", "9", "10"],
  },
  {
    id: "11",
    name: "Baseball-trucker-hat", 
    price: 29.99,
    images: ["/baseball-trucker-hat.jpg"],
    description:
      "Stay stylish and protected from the sun with our classic baseball trucker hat.",
    category: ["Accessories"],
    sizes: ["One Size"],
  },
  { id: "12",
    name: "HAT", 
    price: 19.99, 
    images: ["/set-two-trucker-hat.jpg"],
    description:
      "A trendy hat to complete your casual look while providing sun protection.",
    category: ["Accessories", "Men"],
    sizes: ["One Size"],  
  },
  {
    id: "13",
    name: "shirt", 
    price: 30.00, 
    images: ["/Womens_wear.jpg"],
    description:
      "Nice and stylish shirt for women.",
    category: ["Women"],
    sizes: ["One Size"],  
  },
  {
    id: "14",
    name: "scarf", 
    price: 49.99, 
    images: ["/aisha.jpg"],
    description:
      "Nice and stylish scarf for women.",
    category: ["Women"],
    sizes: ["One Size"],  
  },
  {
    id: "15",
    name: "kitted bag", 
    price: 29.00, 
    images: ["/decorative-cosmetics (1).jpg"],
    description:
      "Nice and stylish kitted bag for women.",
    category: ["Accessories", "Women"],
    sizes: ["One Size"],  
  },
  {
    id: "16",
    name: "Cosmetics", 
    price: 29.00, 
    images: ["/decorative-cosmetics (2).jpg"],
    description:
      "Nice and stylish cosmetics for women.",
    category: ["Accessories", "Women"],
    sizes: ["One Size"],  
  },  
  {
    id: "17",
    name: "Cosmetics", 
    price: 67.89, 
    images: ["/decorative-cosmetics (3).jpg"],
    description:
      "Nice and stylish cosmetics for women.",
    category: ["Accessories", "Women"],
    sizes: ["One Size"],  
  },  
  {
    id: "18",
    name: " Cosmetics", 
    price: 75.19, 
    images: ["/decorative-cosmetics (4).jpg"],
    description:
      "Nice and stylish cosmetics for women.",
    category: ["Accessories", "Women"],
    sizes: ["One Size"],  
  },    
  {
    id: "19",
    name: "Bride wedding shoe", 
    price: 25.00, 
    images: ["/bride-shoe.jpg"],
    description:
      "Bride wedding shoe for women.",
    category: ["Footwear", "Women"],
    sizes: ["One Size"],  
  },
  {
    id: "20",
    name: "High heel shoe", 
    price: 22.00, 
    images: ["/high-shoe.jpg"],
    description:
      "High heel shoe for women.",
    category: ["Footwear", "Women"],
    sizes: ["One Size"],  
  },
];
