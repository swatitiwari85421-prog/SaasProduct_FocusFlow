import React, { useState } from 'react'
import { Mail, MessageSquare, Send } from 'lucide-react'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [success, setSuccess] = useState(false)

  function handleChange(e) {

    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })

    setSuccess(false)
  }

  function handleSubmit(e) {

    e.preventDefault()

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      alert("Please fill all fields")
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address")
      return
    }

    setSuccess(true)

    setFormData({
      name: "",
      email: "",
      message: ""
    })

  }

  return (

    <section id="contact" className="py-24 px-6 md:px-16 bg-transparent">

      <div className="text-center mb-14">

        <span className="text-violet-600 font-semibold text-sm uppercase">
          Contact Us
        </span>

        <h2 className="text-3xl md:text-5xl font-bold mt-4">
          Let's Start a
          <span className="text-violet-600"> Conversation</span>
        </h2>

        <p className="text-gray-500 mt-5">
          Have questions? We'd love to hear from you.
        </p>

      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}

        <div>

          <h3 className="text-3xl font-bold text-gray-900 mb-5">
            Ready to become more productive?
          </h3>

          <p className="text-gray-500 leading-7 mb-8">
            Join FocusFlow and take control of your time.
            Start organizing your tasks and achieving
            your goals today.
          </p>

          <div className="flex items-center gap-4 mb-6">

            <div className="bg-gray/10 backdrop-blur-xl p-4 rounded-xl text-violet-600">
              <Mail size={25}/>
            </div>

            <div>
              <h4 className="font-bold">Email Us</h4>
              <p className="text-gray-500 text-sm">
                hello@focusflow.com
              </p>
            </div>

          </div>

          <div className="flex items-center gap-4">

            <div className="bg-gray/10 backdrop-blur-xl p-4 rounded-xl text-violet-600">
              <MessageSquare size={25}/>
            </div>

            <div>
              <h4 className="font-bold">Support</h4>
              <p className="text-gray-500 text-sm">
                We're here to help you.
              </p>
            </div>

          </div>

        </div>

        {/* Contact Form */}

        <form
          onSubmit={handleSubmit}
          className="bg-gray/10 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-amber-50"
        >

          <h3 className="text-2xl font-bold mb-7">
            Send us a message
          </h3>

          <div className="mb-5">

            <label className="block text-sm font-semibold mb-2">
              Your Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-violet-500"
              required
            />

          </div>

          <div className="mb-5">

            <label className="block text-sm font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-violet-500"
              required
            />

          </div>

          <div className="mb-6">

            <label className="block text-sm font-semibold mb-2">
              Message
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="4"
              className="w-full border border-gray-200 rounded-lg p-3 outline-none focus:border-violet-500 resize-none"
              required
            />

          </div>

          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-violet-700 transition font-semibold"
          >
            Send Message <Send size={18}/>
          </button>

          {success && (

            <p className="text-green-600 text-center mt-5 font-semibold">
              Message submitted successfully!
            </p>

          )}

        </form>

      </div>

    </section>
  )
}

export default Contact