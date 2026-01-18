import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
        { id: 1, name: 'Nikola Jokic Jersey White', price: 89.99, category: 'jerseys', image: '/images/products/jokic_white.jpg' },
        { id: 2, name: 'Nikola Jokic Jersey City', price: 89.99, category: 'jerseys', image: '/images/products/jokic_city.jpg' },
        { id: 3, name: 'Nikola Jokic Jersey Mile High', price: 99.99, category: 'jerseys', image: '/images/products/jokic_milehigh.jpg' },
        { id: 4, name: 'Jamal Murray Jersey White', price: 89.99, category: 'jerseys', image: '/images/products/murray.jpg'},
        { id: 5, name: 'Jamal Murray Jersey City', price: 89.99, category: 'jerseys', image: '/images/products/murray_city.jpg'},
        { id: 6, name: 'Jamal Murray Jersey Mile High', price: 99.99, category: 'jerseys', image: '/images/products/murray_milehigh.jpg'},
        { id: 7, name: 'Aaron Gordon Jersey White', price: 89.99, category: 'jerseys', image: '/images/products/gordon_white.jpg'},
        { id: 8, name: 'Aaron Gordon Jersey City', price: 89.99, category: 'jerseys', image: '/images/products/gordon_city.jpg'},
        { id: 9, name: 'Aaron Gordon Jersey Mile High', price: 99.99, category: 'jerseys', image: '/images/products/gordon_milehigh.jpg'},
        { id: 10, name: 'Denver Nuggets Cap Blue', price: 19.99, category: 'caps', image: '/images/products/cap_blue.jpg' },
        { id: 11, name: 'Denver Nuggets Cap Snapback', price: 19.99, category: 'caps', image: '/images/products/cap_snapback.jpg' },
        { id: 12, name: 'Denver Nuggets Cap Champions', price: 29.99, category: 'caps', image: '/images/products/cap_champions.jpg' },
        { id: 13, name: 'Denver Nuggets Tribute Basketball', price: 24.99, category: 'basketballs', image: '/images/products/ball_tribute.jpg' },
        { id: 14, name: 'Denver Nuggets Grafiti Basketball', price: 29.99, category: 'basketballs', image: '/images/products/ball_grafiti.jpg' },
        { id: 15, name: 'Denver Nuggets Inflatable Mascot Rocky', price: 169.99, category: 'other', image: '/images/products/rocky.jpg' },
        { id: 16, name: 'Denver Nuggets City Keychain', price: 12.99, category: 'other', image: '/images/products/keychain.jpg' },
        { id: 17, name: 'Denver Nuggets Icon Bench Towel', price: 19.99, category: 'other', image: '/images/products/towel.jpg' },
        { id: 18, name: 'Denver Nuggets License Plate Can Coozie', price: 4.99, category: 'other', image: '/images/products/can.jpg' }
    ]
  }),
  getters: {
    getById: (state) => (id) =>
      state.products.find(p => p.id === id)
  }
})
