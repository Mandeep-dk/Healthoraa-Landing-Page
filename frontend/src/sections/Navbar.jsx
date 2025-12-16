import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [hometown, setHometown] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) setIsScrolled(true);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isOpen || isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, isMenuOpen]);

  const openForm = () => {
    setIsOpen(true);
    setIsMenuOpen(false);
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!name || !number) {
        alert("Please fill in all required fields");
        setLoading(false);
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
      setName('');
      setNumber('');
      setEmail('');
      setAge('');
      setHometown('');

    } catch (error) {
      console.error("Error occurred while submitting", error.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${isMenuOpen || isScrolled ? 'bg-[#192347]/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}
        `}
      >
        <div className="w-full px-3 sm:px-6 lg:px-8 max-w-[100vw]">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo */}
            <div className="flex items-center flex-shrink-0 min-w-0">
              <div className='h-7 sm:h-10 w-32 bg-white/20 rounded flex items-center justify-center text-white font-bold'>
                LOGO
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#home" className="text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium">
                Home
              </a>

              <a href="#about" className="text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium">
                About
              </a>

              <a href="#contact" className="text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium">
                Contact
              </a>

              <button onClick={openForm} className="ml-4 bg-[#D4AF37] text-[#192347] px-6 py-2 rounded-lg hover:bg-[#c49d2e] transition-all duration-200 font-semibold">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0 relative z-[60]" aria-label="Toggle menu">
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-[55] bg-[#192347] transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Close button */}
        <button 
          onClick={toggleMenu} 
          className="absolute top-5 right-5 text-white p-2 hover:bg-white/10 rounded-lg transition-colors z-10"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        
        <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
          <a href="#home" onClick={handleLinkClick} className="text-white text-2xl font-semibold hover:text-[#D4AF37] transition-colors">
            Home
          </a>

          <a href="#about" onClick={handleLinkClick} className="text-white text-2xl font-semibold hover:text-[#D4AF37] transition-colors">
            About
          </a>

          <a href="#contact" onClick={handleLinkClick} className="text-white text-2xl font-semibold hover:text-[#D4AF37] transition-colors">
            Contact
          </a>

          <button onClick={openForm} className="bg-[#D4AF37] text-[#192347] px-8 py-3 rounded-lg text-xl font-semibold hover:bg-[#c49d2e] transition-all">
            Get Started
          </button>
        </div>
      </div>

      {/* Form Modal */}
      {isOpen && (
        <div 
          className='fixed inset-0 bg-black/50 backdrop-blur-md z-[700] flex items-center justify-center p-4'
          onClick={() => setIsOpen(false)}
          style={{ overflow: 'auto' }}
        >
          <div 
            className='bg-white p-7 sm:p-9 md:p-10 rounded-2xl w-full max-w-lg relative shadow-2xl my-auto'
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: '90vh', overflowY: 'auto' }}
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
                  value={name}
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
                  value={number}
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
                  value={email}
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
                    value={age}
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
                    value={hometown}
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
                  <>
                    Submit
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24' strokeWidth={2.5}>
                      <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
                    </svg>
                  </>
                )}
              </button>
            </div>

            <p className='text-xs sm:text-sm text-slate-500 text-center mt-5 leading-relaxed'>
              Your information is secure and will never be shared with third parties.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;