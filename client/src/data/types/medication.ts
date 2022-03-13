import { Category } from "./category";

export interface Medication {
  _id: string;
  name: string;
  price: number;
  descr: string;
  category: Category;
  img: string;
  hasRecipe: boolean;
  expiryDate: string;
  createdAt: string;
  updatedAt: string;
}
