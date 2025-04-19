// Menu categories with display names
export const menuCategories = [
  { id: 'sandwiches', name: 'Sandwiches & Wraps' },
  { id: 'burgers', name: 'Burgers' },  // New category based on handwritten menu
  { id: 'lemonPepperWings', name: 'Lemon Pepper Wings' },
  { id: 'seafood', name: 'Seafood' },  // Combined fish and shrimp categories
  { id: 'algerianKitchen', name: 'Algerian Kitchen' },
  { id: 'frenchTacos', name: 'French Tacos' },
  { id: 'chickenTenders', name: 'Chicken Tenders' },
  { id: 'sideOrders', name: 'Side Orders' },
  { id: 'dinnerPlatters', name: 'Dinner Platters' }
];

// Updated menu from Makla Halal with new prices
export const menuItems = {
  sandwiches: [
    { name: 'Philly Cheese Steak', description: 'Onion, pepper, mayo, cheese in hoagie roll', price: 10.99 },
    { name: 'Philly Chicken', description: 'Onion, pepper, mayo, cheese in hoagie roll', price: 10.99 },
    { name: 'VIP Steak/Chicken', description: 'Onion, pepper, mayo, cheese in hoagie roll', price: 14.99 },
    { name: 'Chicken Kabob', description: 'Lettuce, tomato, onion, hummus, tahini in pita bread', price: 8.99 },
    { name: 'Beef Kabob', description: 'Lettuce, tomato, onion, hummus, tahini in pita bread', price: 8.99 },
    { name: 'Kofta Kabob', description: 'Lettuce, tomato, onion, hummus, tahini in pita bread', price: 8.99 },
    { name: 'Beef and Lamb Shawarma', description: 'Lettuce, tomato, onion, hummus, taziki, tahini', price: 10.99 },
    { name: 'Chicken Shawarma', description: 'Lettuce, tomato, onion, hummus, taziki, tahini', price: 10.99 },
    { name: 'Falafel (Vegetarian)', description: 'Pita bread, falafels, hummus & tahini, lettuce, tomatos, onions, home sauce', price: 7.99 },
    { name: 'Merguez Sandwich', description: 'French baguette, merguez, spicy harissa sauce, choice of adding fries', price: 9.99 }
  ],
  burgers: [
    { name: 'Single Burger', description: 'Lettuce, tomato, onion, mayo, cheese', price: 8.99 },
    { name: 'Double Burger', description: 'Lettuce, tomato, onion, mayo, cheese, double patty', price: 10.99 },
    { name: 'Bacon Burger', description: 'Bacon, lettuce, tomato, onion, mayo, cheese', price: 10.99 },
    { name: 'Egg Burger', description: 'Fried egg, lettuce, tomato, onion, mayo, cheese', price: 10.99 }
  ],
  lemonPepperWings: [
    { name: '6pc Whole Wings And Fries', description: 'Six whole wings with French fries', price: 11.99 },
    { name: '10pc Whole Wings And Fries', description: 'Ten whole wings with French fries', price: 16.99 },
    { name: '6pc Half Wings And Fries', description: 'Six half wings with French fries', price: 8.99 },
    { name: '10pc Half Wings And Fries', description: 'Ten half wings with French fries', price: 10.99 },
    { name: '25pc Half Wings Combo', description: 'Large French Fries and 2 liter soda', price: 24.99 }
  ],
  seafood: [
    { name: '2pc Tilapia Fillet', description: 'French Fries, tartare sauce, 2 slices bread', price: 10.99 },
    { name: '10pc Cat Fish Nuggets', description: 'French fries, tartare sauce, 2 slices bread', price: 10.99 },
    { name: '2pc Snapper Fillet', description: 'French Fries, tartare sauce, 2 slices bread', price: 12.99 },
    { name: '10pc Medium Shrimp', description: 'French Fries, cocktail sauce, 2 slices bread', price: 10.99 },
    { name: '7pc Jumbo Shrimp Dinner', description: 'French fries, cocktail sauce, 2 slices bread', price: 14.99 }
  ],
  algerianKitchen: [
    { name: 'Sandwich Karantika (Half)', description: 'Chickpea gratin in french baguette - spicy sauce', price: 6.99 },
    { name: 'Sandwich Karantika (Full)', description: 'Chickpea gratin in french baguette - spicy sauce', price: 10.99 },
    { name: 'Frite Omelette', description: 'Half french baguette, fries, omelette', price: 6.99 },
    { name: 'Borek (2pcs)', description: 'Spring rolls - minced beef - spices - cheese', price: 4.99 },
    { name: 'Break', description: 'Spring rolls - minced beef - spices - cheese - egg', price: 5.99 }
  ],
  frenchTacos: [
    { name: 'Parisina Tacos', description: 'Marinated chicken breast with cheese and sauce', price: 10.99 },
    { name: 'Carne Asada', description: 'Marinated steak with cheese and sauce', price: 10.99 },
    { name: 'Special De Nuit', description: 'Ground beef with cheese, French fries, special sauce', price: 11.99 },
    { name: 'Shrimp Tacos', description: 'Shrimp with garlic sauce and cheese', price: 10.99 }
  ],
  chickenTenders: [
    { name: '4pc Jumbo Chicken Tenders And Fries', description: 'Four jumbo chicken tenders with French fries', price: 11.99 },
    { name: '6pc Boneless Wings And Fries', description: 'French Fries, bbq sauce, 2 slices bread', price: 8.99 }
  ],
  sideOrders: [
    { name: 'Small French Fries', description: 'Regular portion of French fries', price: 3.99 },
    { name: 'Large French Fries', description: 'Family-sized portion of French fries', price: 6.99 },
    { name: 'Small Corn Nuggets', description: 'Regular portion of corn nuggets', price: 4.99 },
    { name: 'Large Corn Nuggets', description: 'Family-sized portion of corn nuggets', price: 7.99 },
    { name: 'Crab Cake', description: 'Homemade crab cake', price: 5.99 },
    { name: 'Rice And Beans', description: 'Side of rice and beans', price: 4.99 },
    { name: '5pc Cheese Sticks With Fries', description: 'Five cheese sticks with French fries', price: 6.99 }
  ],
  dinnerPlatters: [
    { name: 'Lamb Chops', description: '4pc lamb chops marinated in mix of spices served with rice and salad', price: 24.99 }
  ]
};

// 24/7 operation
export const hours = [
  { day: 'Monday', hours: 'Open 24 hours' },
  { day: 'Tuesday', hours: 'Open 24 hours' },
  { day: 'Wednesday', hours: 'Open 24 hours' },
  { day: 'Thursday', hours: 'Open 24 hours' },
  { day: 'Friday', hours: 'Open 24 hours' },
  { day: 'Saturday', hours: 'Open 24 hours' },
  { day: 'Sunday', hours: 'Open 24 hours' }
];

// Specialties for the homepage - updated with new images
export const specialties = [
  { name: 'Sandwiches & Wraps', img: '/images/food1.jpg', category: 'sandwiches' },
  { name: 'Burgers', img: '/images/food2.jpg', category: 'burgers' },  // Updated to burgers category
  { name: 'Lemon Pepper Wings', img: '/images/food3.jpg', category: 'lemonPepperWings' }
];

// Reviews for the homepage
export const reviews = [
  {
    name: 'Michael C.',
    rating: 5,
    text: "This might be the ONLY restaurant in Florida that has good Mediterranean food. I said it and I stand by it. 10/10 quality, 10/10 cleanliness, 10/10 service. Everything is perfect here!"
  },
  {
    name: 'Wael T.',
    rating: 5,
    text: "Amazing quality! The shawarma sandwich was super good and the prices are very reasonable. Highly recommend!"
  },
  {
    name: 'Ashley F.',
    rating: 5,
    text: "Great food great service. I had the chicken shawarma plate and it is delicious. The chicken was nicely seasoned and cooked perfectly. The rice was very flavorful and the service was excellent."
  },
  {
    name: 'Ryan A.',
    rating: 5,
    text: "Excellent food, excellent customer service, excellent portion. The store itself is clean and spacious. I'm so excited to go back there!"
  }
];