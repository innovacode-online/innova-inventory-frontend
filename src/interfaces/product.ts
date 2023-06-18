
import { Category } from ".";

export interface Product {
    id:        number;
    name:      string;
    createdAt: null;
    stock:     number;
    price:     number;
    image:     string;
    category:  Category;
}
