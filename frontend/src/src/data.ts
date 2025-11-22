export interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Addison Vintage Watch",
    price: "$120",
    image: "../src/images/plate1.jpg"
  },
  {
    id: 2,
    name: "Venice Woven",
    price: "$95",
    image: "../src/images/plate2.jpg"
  },
  {
    id: 3,
    name: "Dakota Iconic",
    price: "$110",
    image: "../src/images/plate3.jpg"
  },
  {
    id: 4,
    name: "Leather Classic",
    price: "$130",
    image: "../src/images/plate4.jpg"
  }
];
