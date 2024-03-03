import Stripe from 'stripe';
import { STRIPE_PRIVATE_KEY } from '../config.js';

const stripe = new Stripe(STRIPE_PRIVATE_KEY);

export const createSession = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
            price_data: {
                product_data: {
                    name: 'Laptop',
                    description: 'Gaming Laptop',
                },
                currency: 'USD',
                unit_amount: 20000,
            },
            quantity: 1
        },
        {
            price_data: {
                product_data: {
                    name: 'TV',
                    description: 'Smart TV',
                },
                currency: 'USD',
                unit_amount: 25000,
            },
            quantity: 2
        },
        {
            price_data: {
                product_data: {
                    name: 'Reloj',
                    description: 'Smart Watch',
                },
                currency: 'USD',
                unit_amount: 10000,
            },
            quantity: 8
        },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/sucess',
        cancel_url: 'http://localhost:3000/cancel',
    })
    return res.json(session);
}