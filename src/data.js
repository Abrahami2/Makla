// Menu categories with display names
export const menuCategories = [
    { id: 'sandwiches', name: 'Sandwiches & Wraps' },
    { id: 'algerianKitchen', name: 'Algerian Kitchen' },
    { id: 'frenchTacos', name: 'French Tacos' },
    { id: 'lemonPepperWings', name: 'Lemon Pepper Wings' },
    { id: 'chickenTenders', name: 'Chicken Tenders' },
    { id: 'fish', name: 'Fish' },
    { id: 'shrimp', name: 'Shrimp' },
    { id: 'sideOrders', name: 'Side Orders' },
    { id: 'dinnerPlatters', name: 'Dinner Platters' }
  ];
  
  // Actual menu from Makla Halal
  export const menuItems = {
    sandwiches: [
      { name: 'Chicken Kabob', description: 'Marinated chicken wrap or sandwich, lettuce, tomato, tahini & hummus', price: 8.00 },
      { name: 'Kofta Kabob', description: 'Adana kofta wrap or sandwich with lettuce, tomato, tahini & hummus', price: 9.00 },
      { name: 'Philly Cheesesteak', description: 'Sauté yellow onions and green pepper. Shredded cheese and white cheeses, mayo', price: 10.00 },
      { name: 'Philly Chicken', description: 'Chicken with sauté onions pepper, mayo, cheese', price: 10.00 },
      { name: 'VIP Philly Chicken & Steak', description: 'Chicken and steak with sauté onions pepper, mayo, cheese', price: 14.00 },
      { name: 'Buffalo Chicken', description: 'Chicken with sauté onions pepper, mayo & cheese', price: 12.00 },
      { name: 'Merguez Sandwich', description: 'French baguette, merguez, spicy harissa sauce, choice of adding fries', price: 9.00 },
      { name: 'Falafel (Vegetarian)', description: 'Pita bread, falafels, hummus & tahini, lettuce, tomatos, onions, home sauce', price: 7.00 },
      { name: 'Lamb And Beef Shawarma', description: 'Lamb and beef mix in pita bread with tzatziki sauce, lettuce, tomato, onions, hummus & tahini, choice of spicy sauce', price: 9.00 },
      { name: 'Shawarma', description: 'Original Shawarma with authentic spices and toppings', price: 12.00 }
    ],
    algerianKitchen: [
      { name: 'Sandwich Karantika (Half)', description: 'Chickpea gratin in french baguette - spicy sauce (Half french baguette)', price: 6.00 },
      { name: 'Sandwich Karantika (Full)', description: 'Chickpea gratin in french baguette - spicy sauce (Full french baguette)', price: 10.00 },
      { name: 'Frite Omelette', description: 'Half french baguette, fries, omelette', price: 6.00 },
      { name: 'Borek (2pcs)', description: 'Spring rolls - minced beef - spices - cheese', price: 4.00 },
      { name: 'Break', description: 'Spring rolls - minced beef - spices - cheese - egg', price: 5.00 }
    ],
    frenchTacos: [
      { name: 'Parisina Tacos', description: 'Marinated chicken breast, sauté veggies, eggs, French creamy cheese, mozzarella cheese, in White flour tortillas', price: 10.00 },
      { name: 'Carne Asada', description: 'Marinated steak, sauté veggies, eggs, French creamy cheese, mozzarella cheese, in White flour tortillas', price: 10.00 },
      { name: 'Special De Nuit', description: 'Ground beef with parsley and diced onions. Eggs, cheese, French fries, sauce Algerian, spicy Harrisa', price: 12.00 },
      { name: 'Shrimp', description: 'Sauté onions and pepper with garlic sauce and parsley. White cheese and mayo', price: 12.00 }
    ],
    lemonPepperWings: [
      { name: '6pc Whole Wings And Fries', description: 'Six whole wings with French fries', price: 11.00 },
      { name: '10pc Whole Wings And Fries', description: 'Ten whole wings with French fries', price: 16.00 },
      { name: '6pc Half Wings And Fries', description: 'Six half wings with French fries', price: 8.00 },
      { name: '10pc Half Wings And Fries', description: 'Ten half wings with French fries', price: 10.00 },
      { name: '25pc Half Wings Combo', description: 'Large French Fries and 2 liter soda', price: 20.00 }
    ],
    chickenTenders: [
      { name: '4 Pc Jumbo Chicken Tenders And Fries', description: 'Four jumbo chicken tenders with French fries', price: 11.00 },
      { name: '6 Pc Boneless Wings And Fries', description: 'French Fries, bbq sauce, 2 slices bread', price: 8.00 }
    ],
    fish: [
      { name: '2 Pc Tilapia Fillet', description: 'French Fries, 1 tartare sauce, 2 slices bread', price: 9.00 },
      { name: '10pc Cat Fish Nuggets', description: 'French fries, tartare sauce, 2 slices bread', price: 8.00 },
      { name: '2pc Snapper Fillet', description: 'French Fries, tartare sauce, 2 slices bread', price: 12.00 }
    ],
    shrimp: [
      { name: '10pc Medium Shrimp', description: 'French Fries, cocktail sauce, 2 slices bread', price: 9.00 },
      { name: '7pc Jumbo Shrimp Dinner', description: 'French fries, cocktail sauce, 2 slices bread', price: 14.00 }
    ],
    sideOrders: [
      { name: 'Small French Fries', description: 'Regular portion of French fries', price: 3.00 },
      { name: 'Large French Fries', description: 'Family-sized portion of French fries', price: 6.00 },
      { name: 'Small Corn Nuggets', description: 'Regular portion of corn nuggets', price: 4.00 },
      { name: 'Large Corn Nuggets', description: 'Family-sized portion of corn nuggets', price: 7.00 },
      { name: 'Crab Cake', description: 'Homemade crab cake', price: 5.00 },
      { name: 'Rice And Beans', description: 'Side of rice and beans', price: 4.00 },
      { name: '5 Pc Cheese Stick With Fries', description: 'Five cheese sticks with French fries', price: 6.00 }
    ],
    dinnerPlatters: [
      { name: 'Lamb Chops', description: '4pc lamb chops marinated in mix of spices served with rice and salad', price: 24.00 }
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
  
  // Specialties for the homepage
  export const specialties = [
    { name: 'Sandwiches & Wraps', img: '/images/food1.jpg', category: 'sandwiches' },
    { name: 'French Tacos', img: '/images/food2.jpg', category: 'frenchTacos' },
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