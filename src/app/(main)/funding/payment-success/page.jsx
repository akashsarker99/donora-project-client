import { createPayment } from '@/lib/actions/payment'
import { stripe } from '@/lib/stripe'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const {
    status,
   customer_details: { email: customerEmail },
    metadata
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (status === 'open') {
    return redirect('/')
  }

if (status === "complete") {
    const paymentInfo = {
           userid: metadata.user_id,
           name: metadata.user_name,
           email: customerEmail,
           amount: metadata.funding,
           photo: metadata.user_photo,
        }

    const result = await createPayment(paymentInfo);
    console.log(result)
  return (
    <div className="flex min-h-screen items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-2xl overflow-hidden rounded-[32px] bg-white shadow-2xl">
        <div className="border-b border-gray-100 px-8 py-6">
          <h1 className="font-logo text-4xl text-[#130505]">
            Give Fund
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center px-8 py-16">
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-12 w-12 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h2 className="text-center text-4xl font-bold text-slate-800">
            Thank you for your support!
          </h2>

          <p className="mt-3 text-center text-gray-500">
            Your contribution has been received successfully.
          </p>

          <Link
            href="/funding"
            className="mt-8 rounded-xl bg-[#DC2626] px-8 py-3 font-semibold text-white transition hover:bg-[#B91C1C]"
          >
            Back to Funding
          </Link>
        </div>
      </div>
    </div>
  );
}
}