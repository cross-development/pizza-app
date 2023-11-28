export interface IPizza {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  isNew: boolean;
  isFavorite: boolean;
  currentPrice: number;
  oldPrice: number;
}
