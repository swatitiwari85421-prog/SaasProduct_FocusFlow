import React from 'react'
import { Check, Zap } from 'lucide-react'

const Pricing = () => {

  const plans = [
    {
      name: "Free Plan",
      price: "₹0",
      description: "Perfect for getting started.",
      features: [
        "Basic Task Management",
        "Pomodoro Timer",
        "Daily Goals",
        "Basic Analytics",
        "Personal Dashboard"
      ],
      button: "Get Started",
      popular: false
    },
    {
      name: "Pro Plan",
      price: "₹199",
      description: "For people who want more productivity.",
      features: [
        "Everything in Free",
        "Advanced Analytics",
        "Unlimited Goals",
        "Priority Management",
        "Detailed Productivity Reports"
      ],
      button: "Choose Pro",
      popular: true
    }
  ]

  return (
    <section id="pricing" className="py-24 px-6 md:px-16 bg-transparent">

      <div className="text-center max-w-2xl mx-auto mb-16">

        <span className="text-violet-600 font-semibold uppercase text-sm">
          Pricing Plans
        </span>

        <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-5">
          Simple Pricing for
          <span className="text-violet-600"> Everyone</span>
        </h2>

        <p className="text-gray-500">
          Choose a plan that fits your productivity needs.
          Start free and upgrade whenever you want.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

        {plans.map((plan, index) => (

          <div
            key={index}
            className={`relative p-8 rounded-2xl border ${
              plan.popular
                ? "border-violet-600 shadow-xl"
                : "border-gray-200 shadow-sm"
            }`}
          >

            {plan.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-violet-600 text-white px-5 py-2 rounded-full text-xs font-bold">
                MOST POPULAR
              </span>
            )}

            <h3 className="text-2xl font-bold text-gray-900">
              {plan.name}
            </h3>

            <p className="text-gray-500 mt-2">
              {plan.description}
            </p>

            <div className="my-7">
              <span className="text-5xl font-extrabold">
                {plan.price}
              </span>

              <span className="text-gray-500">
                /month
              </span>
            </div>

            <a
              href="#contact"
              className={`block text-center py-3 rounded-lg font-semibold transition ${
                plan.popular
                  ? "bg-violet-600 text-white hover:bg-violet-700"
                  : "bg-violet-50 text-violet-700 hover:bg-violet-100"
              }`}
            >
              {plan.button}
            </a>

            <div className="mt-8 space-y-5">

              {plan.features.map((feature, i) => (

                <div key={i} className="flex items-center gap-3">

                  <Check size={19} className="text-green-500" />

                  <span className="text-gray-600 text-sm">
                    {feature}
                  </span>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Pricing