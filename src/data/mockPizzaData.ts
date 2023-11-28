// Types
import { IPizza } from '../types/pizza';

const mockPizzaData: IPizza[] = [
  {
    id: 1,
    title: 'Margherita',
    description:
      'A Neapolitan classic with Mozzarella, basil, and traditional red sauce—a pizza love letter.',
    imageUrl:
      'https://www.hearthandfirepizza.com/cdn/shop/products/product-beauty-the-margherita.png?v=1656423819',
    isNew: false,
    isFavorite: true,
    currentPrice: 10,
    oldPrice: 0,
  },
  {
    id: 2,
    title: 'Pepperoni',
    description:
      'Our top-notch pepperoni, precisely cut for optimal char, rests on a spicy red sauce, inviting you to savor its bold flavor.',
    imageUrl:
      'https://www.hearthandfirepizza.com/cdn/shop/products/product-beauty-the-pepperoni.png?v=1656424042',
    isNew: true,
    isFavorite: true,
    currentPrice: 15,
    oldPrice: 20,
  },
  {
    id: 3,
    title: 'Bianca',
    description:
      "A cheese lover's delight with Mozzarella, Fontina, Sharp White Cheddar, Goat, Asiago, and Parmesan white sauce.",
    imageUrl:
      'https://www.hearthandfirepizza.com/cdn/shop/products/product-beauty-the-bianca.png?v=1656423724',
    isNew: true,
    isFavorite: false,
    currentPrice: 20,
    oldPrice: 25,
  },
];

export default mockPizzaData;
