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
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue'}
            ],
            sizes: ['S', 'M', 'L'],
            cart: 0,
        }
    },
    methods:{
        addToCart() {
            this.cart += 1
        }
    }
})
