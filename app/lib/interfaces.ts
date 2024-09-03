export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageString: string;
  stockQuantity: number;  // Add this to keep track of available stock
};

export type Cart = {
  userId: string;
  items: CartItem[];
};