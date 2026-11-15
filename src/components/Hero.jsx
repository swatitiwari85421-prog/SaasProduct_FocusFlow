import React from 'react'
import { ArrowRight, CheckCircle, Clock, Target } from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[650px] bg-black bg-center bg-cover bg-no-repeat from-violet-50 to-indigo-100 px-6 md:px-16 py-20 flex flex-col md:flex-row items-center justify-between gap-12"
      style={{
        backgroundImage:"url('/image.png')"
      }}
    >

      {/* Left Content */}
      <div className="w-full md:w-1/2 relative z-10 ">

        <span className="inline-block bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          ✨ Your Productivity Partner
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">

          Focus Better.
          <br />

          Work <span className="text-violet-600">Smarter.</span>

          <br />

          Achieve More.

        </h1>

        <p className="text-gray-600 text-lg leading-8 mb-8 max-w-lg">

          Organize your tasks, manage your time and track your productivity
          with FocusFlow. Make every day count!

        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">

          <a
            href="#pricing"
            className="flex items-center gap-2 bg-violet-600 text-white px-7 py-4 rounded-lg font-semibold hover:bg-violet-700 transition"
          >
            Get Started <ArrowRight size={19} />
          </a>

          <a
            href="#features"
            className="border border-gray-300 bg-white px-7 py-4 rounded-lg font-semibold hover:border-violet-600 transition"
          >
            Explore Features
          </a>

        </div>

        {/* Benefits */}
        <div className="flex flex-wrap gap-6 mt-9 text-gray-600 text-sm">

          <div className="flex items-center gap-2">
            <CheckCircle size={18} className="text-green-500" />
            Easy to use
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle size={18} className="text-green-500" />
            Stay organized
          </div>

        </div>

      </div>

      {/* Right Dashboard Illustration */}
    <div className="w-full md:w-1/2 flex justify-center relative z-10 ">

  <div className="w-full max-w-md rounded-2xl shadow-2xl p-7 bg-gray backdrop-blur-xl border border-white/20">

    {/* Dashboard Header */}
    <div className="flex justify-between items-center mb-7">

      <div>
        <h2 className="text-xl font-bold text-white">
          My Dashboard
        </h2>

        <p className="text-sm text-gray-200 mt-1">
          Welcome back! Here's your progress.
        </p>
      </div>

      <span className="w-3 h-3 bg-gray-200 rounded-full shadow-lg shadow-green-400/50"></span>

    </div>

    {/* Statistics */}
    <div className="grid grid-cols-2 gap-4 mb-7">

      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl">
        <Clock className="text-violet-300" />

        <h2 className="text-2xl font-bold mt-3 text-white">
          4.5h
        </h2>

        <p className="text-sm text-gray-200">
          Focus Time
        </p>
      </div>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-xl">
        <Target className="text-gray-300" />

        <h2 className="text-2xl font-bold mt-3 text-white">
          12
        </h2>

        <p className="text-sm text-gray-200">
          Tasks Done
        </p>
      </div>

    </div>

    {/* Tasks */}
    <h3 className="font-bold text-white mb-4">
      Today's Tasks
    </h3>

    {[
      { name: "Complete project design", status: "Done", color: "text-green-400" },
      { name: "Practice JavaScript", status: "Ongoing", color: "text-violet-300" },
      { name: "Read documentation", status: "Pending", color: "text-gray-300" }
    ].map((task, index) => (

      <div
        key={index}
        className="flex items-center justify-between gap-3 py-4 border-b border-white/20 text-sm"
      >

        <span className="text-gray-100">
          {task.name}
        </span>

        <span className={`${task.color} font-semibold whitespace-nowrap`}>
          {task.status}
        </span>

      </div>

    ))}

    {/* Progress */}
    <div className="mt-7">

      <div className="flex justify-between mb-3 text-sm">

        <span className="font-semibold text-white">
          Daily Progress
        </span>

        <span className="text-violet-300 font-bold">
          75%
        </span>

      </div>

      <div className="w-full bg-white/20 rounded-full h-2">
        <div className="bg-violet-400 h-2 rounded-full w-3/4"></div>
      </div>

    </div>

  </div>

</div>

    </section>
  )
}

export default Hero