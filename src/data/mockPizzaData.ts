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
  {
    id: 4,
    title: 'Mushroom',
    description:
      'Our Mushroom dish combines Portabella, Shiitake, Cremini, caramelized onions, and parmesan cream for a sweet umami blend.',
    imageUrl:
      'https://www.hearthandfirepizza.com/cdn/shop/products/product-beauty-the-mushroom_1680x.png?v=1656423857',
    isNew: false,
    isFavorite: true,
    currentPrice: 20,
    oldPrice: 0,
  },
  {
    id: 5,
    title: 'Supreme',
    description:
      'Packed with pepperoni, sausage, bell peppers, onions, olives, and mushrooms, the Supreme is a flavor-packed feast.',
    imageUrl:
      'https://www.hearthandfirepizza.com/cdn/shop/products/product-beauty-the-margherita.png?v=1656423819',
    isNew: false,
    isFavorite: false,
    currentPrice: 25,
    oldPrice: 0,
  },
  {
    id: 6,
    title: 'Vegetarian',
    description:
      'A colorful medley of bell peppers, tomatoes, onions, black olives, and mushrooms makes the Vegetarian pizza a fresh and satisfying choice for veggie lovers.',
    imageUrl:
      'https://www.hearthandfirepizza.com/cdn/shop/products/product-beauty-the-pepperoni.png?v=1656424042',
    isNew: true,
    isFavorite: true,
    currentPrice: 19,
    oldPrice: 25,
  },
  {
    id: 7,
    title: 'BBQ Chicken',
    description:
      'The BBQ Chicken pizza offers a mouthwatering blend of smoky barbecue sauce, tender chicken, red onions, and cilantro for a savory-sweet sensation.',
    imageUrl:
      'https://www.hearthandfirepizza.com/cdn/shop/products/product-beauty-the-bianca.png?v=1656423724',
    isNew: false,
    isFavorite: true,
    currentPrice: 21,
    oldPrice: 0,
  },
  {
    id: 8,
    title: 'Hawaiian',
    description:
      'Escape to a tropical paradise with the Hawaiian pizza, featuring ham, pineapple, and melted cheese for the perfect sweet and savory combination.',
    imageUrl:
      'https://www.hearthandfirepizza.com/cdn/shop/products/product-beauty-the-mushroom_1680x.png?v=1656423857',
    isNew: true,
    isFavorite: false,
    currentPrice: 20,
    oldPrice: 28,
  },
  {
    id: 9,
    title: 'Mediterranean',
    description:
      'The Mediterranean pizza takes you on a journey with feta cheese, Kalamata olives, cherry tomatoes, red onions, and a drizzle of olive oil.',
    imageUrl:
      'https://www.hearthandfirepizza.com/cdn/shop/products/product-beauty-the-margherita.png?v=1656423819',
    isNew: false,
    isFavorite: false,
    currentPrice: 30,
    oldPrice: 0,
  },
  {
    id: 10,
    title: 'Buffalo Chicken',
    description:
      'Spice things up with the Buffalo Chicken pizza, combining zesty buffalo sauce-coated chicken, red onions, celery.',
    imageUrl:
      'https://www.hearthandfirepizza.com/cdn/shop/products/product-beauty-the-pepperoni.png?v=1656424042',
    isNew: true,
    isFavorite: true,
    currentPrice: 10,
    oldPrice: 15,
  },
];

export default mockPizzaData;
