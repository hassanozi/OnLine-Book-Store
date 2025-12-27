import type { Book } from '../NewBooks/Book';

export interface Category {
  _id: string;
  title: string;
  status: string;
  books: Book[];
}
