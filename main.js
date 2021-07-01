const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            description: 'this is descriprion',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            onSale: true,
        }
    }
})
