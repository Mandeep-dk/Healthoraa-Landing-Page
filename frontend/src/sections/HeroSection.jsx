import React, { useState } from 'react'
import { Award, Users, TrendingUp, X } from 'lucide-react';

function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(null);
  const [number, setNumber] = useState(null);
  const [email, setEmail] = useState(null);
  const [age, setAge] = useState(null);
  const [hometown, setHometown] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleMenu = () => {
    setIsOpen(true);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!name || !number) {
        alert("Please fill in all required fields");
        return;
      }
      const formData = {
        name: name,
        number: number,
        email: email,
        age: age,
        hometown: hometown
      };

      console.log('Form submitted:', formData);
      window.open('https://wa.me/916000206223', '_blank');
      setIsOpen(false);

    } catch (error) {
      console.error("Error occurred while submitting", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id='home' className="pt-10 relative min-h-screen bg-[#192347]">

      {/* Accent Shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>

      {/* Content Container */}
      <div className="relative pt-18 sm:pt-10 md:pt-15 lg:pt-12 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 gap-12 lg:gap-16">

        {/* SLIDER - Shows first on mobile, second on desktop */}
        <div className="w-full lg:w-[650px] order-1 -mt-8 lg:-mt-16 lg:order-2">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Results Slider</h3>
            <p className="text-gray-600">Before/After transformation slider would go here</p>
          </div>
        </div>

        {/* TEXT CONTENT - Shows second on mobile, first on desktop */}
        <div className="w-full lg:max-w-2xl order-2 lg:order-1">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg- rounded-full shadow-sm border border-slate-200 mb-6">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-white font-medium">Trusted Healthcare Partner</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-outline-white lg:text-7xl">
              Healthoraa
            </span>
            <span className="block text-white lg:text-5xl whitespace-nowrap">
              An ocean of wellness
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white mb-8 leading-relaxed max-w-xl">
            Focused on early detection and lifestyle management to help you live healthier, longer.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button onClick={handleMenu} className="group px-8 py-4 bg-white rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
              Get Started
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-blue-600" />
                <div className="text-3xl font-bold text-white">500+</div>
              </div>
              <div className="text-sm text-white">Active Clients</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <div className="text-3xl font-bold text-white">98%</div>
              </div>
              <div className="text-sm text-white">Success Rate</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-5 h-5 text-blue-600" />
                <div className="text-3xl font-bold text-white">10+</div>
              </div>
              <div className="text-sm text-white">Programs</div>
            </div>
          </div>
        </div>

        {/* MODAL */}
        {isOpen && (
          <div
            className='fixed bg-black/50 backdrop-blur-md flex items-center justify-center inset-0 z-[700] p-4'
            onClick={() => setIsOpen(false)}
          >
            <div
              className='bg-white p-7 sm:p-9 md:p-10 rounded-2xl w-full max-w-lg relative shadow-2xl max-h-[90vh] overflow-y-auto'
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className='absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors z-10'
                aria-label='Close'
              >
                <X className='w-5 h-5 text-slate-600' />
              </button>

              {/* Header */}
              <div className='mb-7 sm:mb-8'>
                <div className='w-14 h-14 sm:w-16 sm:h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-4 sm:mb-5 shadow-lg'>
                  <svg className='w-7 h-7 sm:w-8 sm:h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24' strokeWidth={2.5}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                  </svg>
                </div>
                <h2 className='text-2xl sm:text-3xl font-bold text-slate-900 mb-3'>Start Your Journey</h2>
                <p className='text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed'>Fill in your details and we'll get in touch with you shortly.</p>
              </div>

              {/* Form */}
              <div className='space-y-5'>
                <div>
                  <label className='block text-sm font-semibold text-slate-700 mb-2 tracking-wide'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    placeholder='Enter your name'
                    onChange={(e) => setName(e.target.value)}
                    className='w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base border-2 border-slate-200 rounded-xl focus:border-blue-900 focus:outline-none transition-colors'
                    required
                  />
                </div>

                <div>
                  <label className='block text-sm font-semibold text-slate-700 mb-2 tracking-wide'>
                    Contact Number
                  </label>
                  <input
                    type='tel'
                    placeholder='Enter your mobile number'
                    onChange={(e) => setNumber(e.target.value)}
                    className='w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base border-2 border-slate-200 rounded-xl focus:border-blue-900 focus:outline-none transition-colors'
                    required
                  />
                </div>

                <div>
                  <label className='block text-sm font-semibold text-slate-700 mb-2 tracking-wide'>
                    Email Address <span className='text-slate-400 font-normal'>(Optional)</span>
                  </label>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base border-2 border-slate-200 rounded-xl focus:border-blue-900 focus:outline-none transition-colors'
                  />
                </div>

                <div className='grid grid-cols-2 gap-4'>
                  <div>
                    <label className='block text-sm font-semibold text-slate-700 mb-2 tracking-wide'>
                      Age <span className='text-slate-400 font-normal'>(Optional)</span>
                    </label>
                    <input
                      type='number'
                      placeholder='Age'
                      onChange={(e) => setAge(e.target.value)}
                      className='w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base border-2 border-slate-200 rounded-xl focus:border-blue-900 focus:outline-none transition-colors'
                    />
                  </div>

                  <div>
                    <label className='block text-sm font-semibold text-slate-700 mb-2 tracking-wide'>
                      Hometown <span className='text-slate-400 font-normal'>(Optional)</span>
                    </label>
                    <input
                      type='text'
                      placeholder='City'
                      onChange={(e) => setHometown(e.target.value)}
                      className='w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base border-2 border-slate-200 rounded-xl focus:border-blue-900 focus:outline-none transition-colors'
                    />
                  </div>
                </div>

                <button
                  type='button'
                  onClick={handleSubmit}
                  className='w-full py-3.5 sm:py-4 bg-slate-900 hover:bg-blue-900 text-white rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 flex items-center justify-center gap-2 mt-7 tracking-wide'
                >
                  {loading ? (
                    <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                  ) : (
                    "Submit"
                  )}
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' strokeWidth={2.5}>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
                  </svg>
                </button>
              </div>

              <p className='text-xs sm:text-sm text-slate-500 text-center mt-5 leading-relaxed'>
                Your information is secure and will never be shared with third parties.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroSection;