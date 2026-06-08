// Sample seed data for database initialization

const sampleMenuItems = [
  {
    name: 'Pweza wa Samaki',
    category: 'seafood',
    description: 'Grilled octopus with coconut, lime and traditional Swahili spices, served with pilau rice',
    price: 1800,
    isVegetarian: false,
    isSpicy: true,
    popular: true,
    featured: true,
    image: 'https://via.placeholder.com/400x300?text=Pweza+wa+Samaki',
  },
  {
    name: 'Biryani ya Kuku',
    category: 'rice',
    description: 'Fragrant basmati rice with tender chicken and aromatic spices',
    price: 1200,
    isVegetarian: false,
    isSpicy: false,
    popular: true,
  },
  {
    name: 'Samaki wa Kupaka',
    category: 'seafood',
    description: 'Fish fillet in creamy coconut sauce with turmeric and coriander',
    price: 1700,
    isVegetarian: false,
    featured: true,
  },
  {
    name: 'Nyama Choma',
    category: 'grilled',
    description: 'Premium grilled beef with signature pepper sauce and greens',
    price: 1500,
    isVegetarian: false,
    isSpicy: true,
    popular: true,
  },
];

const sampleGalleryItems = [
  {
    title: 'Pweza wa Samaki',
    description: 'Signature grilled octopus',
    category: 'food',
    imageUrl: 'https://via.placeholder.com/400x300?text=Pweza+wa+Samaki',
    featured: true,
  },
  {
    title: 'Restaurant Interior',
    description: 'Elegant dining ambiance',
    category: 'interior',
    imageUrl: 'https://via.placeholder.com/400x300?text=Interior',
    featured: true,
  },
  {
    title: 'Signature Cocktails',
    description: 'Premium drink selection',
    category: 'drinks',
    imageUrl: 'https://via.placeholder.com/400x300?text=Cocktails',
  },
];

const sampleTestimonials = [
  {
    customerName: 'Sarah Johnson',
    customerEmail: 'sarah@example.com',
    rating: 5,
    review: 'One of the best fine dining experiences in Nairobi. The ambiance, food, and service were exceptional.',
    approved: true,
    featured: true,
  },
  {
    customerName: 'Michael Kipchoge',
    customerEmail: 'michael@example.com',
    rating: 5,
    review: 'The Swahili cuisine is authentic and delicious. Perfect for romantic evenings.',
    approved: true,
    featured: true,
  },
  {
    customerName: 'Amina Hassan',
    customerEmail: 'amina@example.com',
    rating: 5,
    review: 'Nana has become our favorite restaurant. The jazz nights are amazing!',
    approved: true,
    featured: true,
  },
];

module.exports = {
  sampleMenuItems,
  sampleGalleryItems,
  sampleTestimonials,
};
