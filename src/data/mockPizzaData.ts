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
    imageUrl: 'https://pngimg.com/uploads/pizza/pizza_PNG44092.png',
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
    imageUrl: 'https://img.postershop.me/6419/Products/2003384_1633618022.1327_original.png',
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
    imageUrl: 'https://img.postershop.me/6419/Products/2003382_1633617847.677_original.png',
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
    imageUrl: 'https://img.postershop.me/6419/Products/2003385_1633618137.8659_original.png',
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
    imageUrl: 'https://img.postershop.me/6419/Products/2003379_1633618053.6169_original.png',
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
    imageUrl: 'https://img.postershop.me/6419/Products/2003383_1633618378.1541_original.png',
    isNew: true,
    isFavorite: true,
    currentPrice: 10,
    oldPrice: 15,
  },
  {
    id: 11,
    title: 'Marvel',
    description: 'Timeless perfection - fresh mozzarella, ripe tomatoes, and basil on a thin, crisp crust.',
    imageUrl: 'https://img.postershop.me/6419/Products/2003388_1633618397.5882_original.png',
    isNew: true,
    isFavorite: false,
    currentPrice: 15,
    oldPrice: 20,
  },
  {
    id: 12,
    title: 'Pepperoni Paradise',
    description: 'Spicy, salty, cheesy heaven - generous pepperoni on a gooey mozzarella base.',
    imageUrl: 'https://img.postershop.me/6419/Products/2281952_1678826962.7686_original.png',
    isNew: true,
    isFavorite: true,
    currentPrice: 10,
    oldPrice: 25,
  },
  {
    id: 13,
    title: 'Veggie Fiesta',
    description: 'Garden-fresh delight - bell peppers, mushrooms, red onions on a golden crust.',
    imageUrl: 'https://img.postershop.me/6419/Products/3697159_1678851353.8416_original.png',
    isNew: false,
    isFavorite: false,
    currentPrice: 20,
    oldPrice: 0,
  },
  {
    id: 14,
    title: 'BBQ Bliss',
    description: 'Tantalizing barbecue chicken, red onions, cilantro on a smoky crust.',
    imageUrl: 'https://img.postershop.me/6419/Products/4623707_1701363379.8547_original.jpeg',
    isNew: true,
    isFavorite: false,
    currentPrice: 20,
    oldPrice: 35,
  },
  {
    id: 15,
    title: 'Heaven',
    description: 'Tropical escape - juicy pineapple, savory ham, and mozzarella.',
    imageUrl: 'https://img.postershop.me/6419/Products/3119590_1655902705.4074_original.png',
    isNew: false,
    isFavorite: false,
    currentPrice: 25,
    oldPrice: 0,
  },
  {
    id: 16,
    title: 'Meat Lovers Delight',
    description: 'Carnivorous symphony - pepperoni, sausage, bacon, and ground beef on a robust crust.',
    imageUrl: 'https://img.postershop.me/6419/Products/3120167_1655902669.4189_original.png',
    isNew: true,
    isFavorite: true,
    currentPrice: 10,
    oldPrice: 15,
  },
  {
    id: 17,
    title: 'Mediterranean Magic',
    description: 'Culinary journey - feta, olives, artichoke hearts, and sun-dried tomatoes on golden crust.',
    imageUrl: 'https://img.postershop.me/6419/Products/3120177_1655902691.6882_original.png',
    isNew: false,
    isFavorite: false,
    currentPrice: 20,
    oldPrice: 0,
  },
];

export default mockPizzaData;
