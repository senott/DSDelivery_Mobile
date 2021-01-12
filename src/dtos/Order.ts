import Product from "./Product";

interface Order {
  id: number;
  latitude: number;
  longitude: number;
  address: string;
  total: number;
  moment: string;
  status: string;
  products: Product[];
}

export default Order;
