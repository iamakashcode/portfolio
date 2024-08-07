import React from 'react'
import { GlobeDemo } from "@/components/globe";


export default function Contact() {
  return (
    <div className='container max-w-screen-xl mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-5'>
        <div className='md:col-span-2'>
          <div className="mt-12 px-4 p-8 bg-slate-50 sm:px-8 sm:rounded-xl">
            <form
              className="space-y-5"
            >
              <div>
                <label className="font-medium">
                  Full name
                </label>
                <input
                  type="text"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">
                  Phone number
                </label>
                <input
                  type="number"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">
                  Message
                </label>
                <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
              </div>
              <button
                className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className='md:col-span-3 text-center'>
          <GlobeDemo />
        </div>
      </div>
    </div>
  )
}
