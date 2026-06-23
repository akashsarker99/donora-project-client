import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe';
import { getUserSession } from '@/lib/core/session';


export async function POST(request) {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')
    const user = await getUserSession();

    const formData = await request.formData();
    const funding = formData.get('funding');
    

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
       customer_email : user?.email,
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price_data: {
            currency: 'bdt',
            unit_amount: Number(funding) * 100,
            product_data: {
              name: 'Donora',
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        user_id: user?.id,
        user_name: user?.name,
        user_email: user?.email,
        user_photo: user?.image,
        funding: Number(funding),
      },
      mode: 'payment',
      success_url: `${origin}/funding/payment-success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(session.url, 303)
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}