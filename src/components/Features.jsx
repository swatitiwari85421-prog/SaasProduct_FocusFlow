import React from 'react'
import {
  CheckSquare,
  Timer,
  BarChart3,
  Target,
  ArrowUpRight
} from 'lucide-react'

const Features = () => {

  const features = [
    {
      icon: CheckSquare,
      title: "Smart Task Management",
      description: "Organize your daily tasks, set priorities and manage everything from one simple dashboard.",
      color: "bg-violet-100 text-violet-600"
    },
    {
      icon: Timer,
      title: "Focus Timer",
      description: "Stay productive with the Pomodoro technique and dedicated focus sessions.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: BarChart3,
      title: "Productivity Analytics",
      description: "Track your daily performance and understand how you spend your time.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set meaningful goals, monitor your progress and celebrate your achievements.",
      color: "bg-orange-100 text-orange-600"
    }
  ]

  return (
    <section id="features" className="py-24 px-6 md:px-16 bg-transparent">

      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-16">

        <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">
          Powerful Features
        </span>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-4 mb-5">
          Everything You Need to
          <span className="text-violet-600"> Stay Focused</span>
        </h2>

        <p className="text-gray-500 leading-7">
          Simple yet powerful tools designed to help you organize
          your work, manage your time and achieve your goals.
        </p>

      </div>

      {/* Feature Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

  {features.map((feature, index) => {

    const Icon = feature.icon

    return (
      <div
        key={index}
        className="group p-8 rounded-2xl border border-gray-100 bg-gray/10 backdrop-blur-xl card-hover"
      >

        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${feature.color}`}>
          <Icon size={27} />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white-900 mt-7 mb-4">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-gray-900 text-sm leading-7">
          {feature.description}
        </p>

        {/* Arrow */}
        <div className="mt-7 flex items-center text-violet-600 font-semibold text-sm">
          Learn More
          <ArrowUpRight
            size={18}
            className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
          />
        </div>

      </div>
    )
  })}

</div>

    </section>
  )
}

export default Features