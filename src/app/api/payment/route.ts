import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: NextRequest) {
    console.log(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)
    const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
        apiVersion: '2025-06-30.basil',
    });
    const { amount } = await req.json();
    console.log(amount)
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Ecommerce',
                        },
                        unit_amount: amount * 100,
                    },
                    quantity: 1,
                },
            ],
            success_url: 'http://localhost:3000/payment/success',
            cancel_url: 'http://localhost:3000/checkout',
        });
        return NextResponse.json({ id: session.id });
    } catch (err) {
        console.log(err)
        return NextResponse.json({ error: err }, { status: 500 });
    }
}
