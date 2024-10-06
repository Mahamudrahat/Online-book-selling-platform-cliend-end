import React from 'react'

export default function ContactUs() {
  return (
    <section class="bg-gray-100 py-12">
  <div class="max-w-3xl mx-auto px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-gray-800 text-center mb-8">Contact Us</h2>

    <form class="bg-white shadow-md rounded-lg p-8 space-y-6">
     
      <div>
        <label for="name" class="block text-gray-700 font-semibold">Name</label>
        <input 
          type="text" 
          id="name" 
          class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name" 
          required
        />
      </div>

      
      <div>
        <label for="email" class="block text-gray-700 font-semibold">Email</label>
        <input 
          type="email" 
          id="email" 
          class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email" 
          required
        />
      </div>

      
      <div>
        <label for="subject" class="block text-gray-700 font-semibold">Subject</label>
        <input 
          type="text" 
          id="subject" 
          class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter the subject" 
          required
        />
      </div>

    
      <div>
        <label for="message" class="block text-gray-700 font-semibold">Message</label>
        <textarea 
          id="message" 
          rows="5" 
          class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your message" 
          required
        ></textarea>
      </div>

      
      <div class="text-center">
        <button 
          type="submit" 
          class="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</section>

  )
}

