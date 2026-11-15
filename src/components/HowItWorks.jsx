import React from 'react'
import { UserPlus, ListTodo, TrendingUp } from 'lucide-react'

const HowItWorks = () => {

  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Get Started",
      description: "Create your workspace and set up your personal productivity goals.",
      color: "bg-violet-100 text-violet-600"
    },
    {
      number: "02",
      icon: ListTodo,
      title: "Plan Your Day",
      description: "Organize your tasks, set priorities and schedule your focus sessions.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Track Progress",
      description: "Monitor your productivity, celebrate achievements and improve every day.",
      color: "bg-green-100 text-green-600"
    }
  ]

  return (
    <section
      id="how-it-works"
      className="py-24 px-6 md:px-16 bg-transparent"
    >

      {/* Section Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">

        <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">
          How It Works
        </span>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-5">
          Get More Done in
          <span className="text-violet-600"> 3 Simple Steps</span>
        </h2>

        <p className="text-gray-500 leading-7">
          Start your productivity journey with FocusFlow.
          It's simple, effective and designed for everyone.
        </p>

      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {steps.map((step, index) => {

          const Icon = step.icon

          return (

            <div
              key={index}
              className="relative bg-gray/10 backdrop-blur-xl p-9 rounded-4xl border  border-amber-50 shadow-sm hover:shadow-xl transition duration-300 text-center group"
            >

              {/* Number */}
              <span className="absolute top-5 right-6 text-4xl font-extrabold text-gray-100">
                {step.number}
              </span>

              {/* Icon */}
              <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center ${step.color} group-hover:scale-110 transition duration-300`}>
                <Icon size={35} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mt-7 mb-4">
                {step.title}
              </h3>

              <p className="text-gray-500 text-sm leading-7">
                {step.description}
              </p>

            </div>

          )

        })}

      </div>

    </section>
  )
}

export default HowItWorks