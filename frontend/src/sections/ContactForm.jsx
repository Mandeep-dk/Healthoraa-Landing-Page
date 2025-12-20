import React, { useState } from 'react'
import { submitContact } from '../api';

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        try {
            setIsLoading(true);
            const contactData = {
                name: name,
                email: email,
                message: message
            }

            await submitContact(contactData)
            setIsOpen(false);

        } catch (e) {
            console.error(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Only open dialog if all fields are filled
        if (name.trim() && email.trim() && message.trim()) {
            setIsOpen(true);
        }
    }

    return (
        <>
            <div id="contact" className='bg-[#192347] py-12 sm:py-16 md:py-20 min-h-screen flex items-center mt-[vh]'>
                <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
                    <div className='flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16'>
                        {/* Left Section */}
                        <div className='flex-1'>
                            <h1 className='text-3xl text-white sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6'>Reach out</h1>
                            <p className='text-white mb-6 sm:mb-8 text-base sm:text-lg'>
                                Have a question or need assistance? Reach out to us. We are here to help with any inquiries you may have.
                            </p>

                            <div className='space-y-4 sm:space-y-6'>
                                <div>
                                    <h3 className='font-semibold mb-1 sm:mb-2 text-base text-white sm:text-lg'>Response Time</h3>
                                    <p className='text-white text-sm sm:text-base'>We typically respond within 24 hours</p>
                                </div>
                                <div>
                                    <h3 className='font-semibold mb-1 sm:mb-2 text-base text-white sm:text-lg'>Email</h3>
                                    <p className='text-white text-sm sm:text-base break-all'>healthoraa.health@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Section - Form */}
                        <div className='flex-1'>
                            <div className='bg-gray-50 rounded-xl p-6 sm:p-8'>
                                <form onSubmit={handleFormSubmit} className='flex flex-col gap-4 sm:gap-6'>
                                    <div>
                                        <label className='block text-sm font-medium mb-2'>Name</label>
                                        <input
                                            type="text"
                                            className='w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-sm sm:text-base'
                                            placeholder='Your name'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className='block text-sm font-medium mb-2'>Email</label>
                                        <input
                                            type="email"
                                            className='w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-sm sm:text-base'
                                            placeholder='your.email@example.com'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className='block text-sm font-medium mb-2'>Message</label>
                                        <textarea
                                            className='w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-black text-sm sm:text-base'
                                            rows='5'
                                            placeholder='How can we help you?'
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className='w-full bg-[#192347] text-white py-2 sm:py-3 px-4 rounded-lg hover:bg-gray-800 transition text-sm sm:text-base'
                                    >
                                        Send Message
                                    </button>
                                </form>

                                {isOpen && (
                                    <div className="fixed inset-0 z-[700] flex items-center justify-center bg-black/40 backdrop-blur-sm">
                                        <div className="bg-white w-[90%] max-w-md rounded-2xl p-6 shadow-xl">
                                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                                Confirm submission
                                            </h3>

                                            <p className="text-sm text-gray-600 mb-6">
                                                Are you sure you want to share your message? This action cannot be undone.
                                            </p>

                                            <div className="flex justify-end gap-3">
                                                <button
                                                    onClick={() => setIsOpen(false)}
                                                    disabled={isLoading}
                                                    className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 border border-gray-300 hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    Cancel
                                                </button>

                                                <button
                                                    onClick={handleSubmit}
                                                    disabled={isLoading}
                                                    className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-[#192347] hover:bg-[#0f1633] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                                >
                                                    {isLoading && (
                                                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                    )}
                                                    Send
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm