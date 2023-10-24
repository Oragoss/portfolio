import React from 'react'

const ContactForm = () => {
  return (
    <div className="py-16 md:py-20 bg-slate-50 mb-6" id="contact-form">
        <h2
          className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl"
        >
          Contact
        </h2>
        <h3
          className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
        >
          Have Any Questions?
        </h3>
        <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
            <div className="mt-3 ml-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            </div>
            <input type="email" placeholder="Can&apos;t touch this" value="jonathonsousa@gmail.com" className="input input-bordered w-full max-w-xs" disabled />
        </div>
        <input type="text" placeholder="Name" className="input input-bordered input-primary w-full max-w-xs" />
        <input type="email" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs" />
        <textarea className="textarea textarea-primary w-full max-w-xs" placeholder="Message"></textarea>
    </div>
  )
}

export default ContactForm