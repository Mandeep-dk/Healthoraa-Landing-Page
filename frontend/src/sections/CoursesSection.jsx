import React, { useState } from 'react';
import { Scale, Dumbbell, Activity, Heart, Droplet, BarChart3, Sparkles, Scissors, Compass, UserCog, X } from 'lucide-react';

function CoursesSection() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState(null);
    const [number, setNumber] = useState(null);
    const [email, setEmail] = useState(null);
    const [age, setAge] = useState(null);
    const [hometown, setHometown] = useState(null);
    const [loading, setLoading] = useState(false);

    const openForm = () => {
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
        }finally{
            setLoading(false);
        }
    };

    const courses = [
        {
            title: "Weight Loss Program",
            description: "Science-backed approach to sustainable weight management",
            category: "weight",
            stats: "12 weeks • Personalized",
            icon: Scale,
            color: "bg-[#192347]"
        },
        {
            title: "Weight Gain Program",
            description: "Healthy muscle building and weight gain strategies",
            category: "weight",
            stats: "12 weeks • Personalized",
            icon: Dumbbell,
            color: "bg-[#192347]"
        },
        {
            title: "PCOD/PCOS Management",
            description: "Holistic management through nutrition and lifestyle",
            category: "hormonal",
            stats: "3 month/1 year • Expert-led",
            icon: Activity,
            color: "bg-[#192347]"
        },
        {
            title: "Thyroid Control",
            description: "Balance your metabolism naturally",
            category: "hormonal",
            stats: "12 weeks • Medically-guided",
            icon: Heart,
            color: "bg-[#192347]"
        },
        {
            title: "Diabetes Control",
            description: "Manage blood sugar through smart nutrition",
            category: "chronic",
            stats: "24 weeks • Clinical support",
            icon: Droplet,
            color: "bg-[#192347]"
        },
        {
            title: "Cholesterol Management",
            description: "Heart-healthy lifestyle modifications",
            category: "chronic",
            stats: "16 weeks • Heart-focused",
            icon: BarChart3,
            color: "bg-[#192347]"
        },
        {
            title: "Derma Nutrition",
            description: "Radiant skin through nutritional wellness",
            category: "beauty",
            stats: "8 weeks • Visible results",
            icon: Sparkles,
            color: "bg-[#192347]"
        },
        {
            title: "Hair Care Program",
            description: "Strengthen hair health from within naturally",
            category: "beauty",
            stats: "12 weeks • Natural approach",
            icon: Scissors,
            color: "bg-[#192347]"
        },
        {
            title: "Complete Lifestyle Reset",
            description: "Full wellness transformation program",
            category: "lifestyle",
            stats: "24 weeks • Comprehensive",
            icon: Compass,
            color: "bg-[#192347]"
        },
        {
            title: "Customised Health Plan Program",
            description: "Tailored to your unique health goals and lifestyle needs",
            category: "lifestyle",
            stats: "Flexible • One-on-one",
            icon: UserCog,
            color: "bg-[#192347]"
        }
    ];

    const categories = [
        { id: 'all', label: 'All Programs' },
        { id: 'weight', label: 'Weight Management' },
        { id: 'hormonal', label: 'Hormonal Health' },
        { id: 'chronic', label: 'Chronic Conditions' },
        { id: 'beauty', label: 'Beauty & Wellness' },
        { id: 'lifestyle', label: 'Lifestyle' }
    ];

    const filteredCourses = activeCategory === 'all'
        ? courses
        : courses.filter(c => c.category === activeCategory);

    return (
        <div className='px-6 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24 lg:py-28'>
            <div className='max-w-7xl mx-auto'>
                {/* Header */}
                <div className='mb-12 sm:mb-16 md:mb-20'>
                    <div className='inline-block px-4 py-2 bg-blue-50 text-blue-900 rounded-full text-sm font-semibold mb-6 tracking-wide'>
                        SPECIALIZED PROGRAMS
                    </div>
                    <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
                        Your Health,<br />
                        <span className=' text-[#D4AF37]'>Your Way</span>
                    </h2>
                    <p className='text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed'>
                        Expert-designed programs that adapt to your lifestyle, backed by science and personalized for lasting results.
                    </p>
                </div>

                {/* Category Filter Pills */}
                <div className='mb-12 sm:mb-14 md:mb-16 overflow-x-auto pb-3'>
                    <div className='flex gap-3 sm:gap-4 min-w-max sm:min-w-0 sm:flex-wrap'>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 rounded-full text-sm sm:text-base font-medium tracking-wide transition-all duration-300 whitespace-nowrap ${
                                    activeCategory === cat.id
                                        ? 'bg-slate-900 text-white shadow-lg scale-105'
                                        : 'bg-white text-slate-700 hover:bg-slate-50 hover:scale-105'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

           {/* Bento Grid Layout */}
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8 mb-16 sm:mb-20'>                    {filteredCourses.map((course, index) => {
                        const IconComponent = course.icon;
                        return (
                            <div
                                key={index}
                                className='group relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-8 md:p-9 border-2 border-transparent hover:border-slate-900 transition-all duration-300 hover:shadow-2xl flex flex-col h-full'
                            >
                                {/* Icon with Solid Background */}
                                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl ${course.color} flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <IconComponent className='w-7 h-7 sm:w-8 sm:h-8 text-white' strokeWidth={2.5} />
                                </div>

                                {/* Number Badge */}
                                <div className='absolute top-6 right-6 sm:top-7 sm:right-7 w-9 h-9 sm:w-10 sm:h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xs sm:text-sm group-hover:bg-blue-900 transition-colors'>
                                    {String(index + 1).padStart(2, '0')}
                                </div>

                                {/* Content */}
                                <div className='relative flex flex-col flex-grow'>
                                    <h3 className='text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-blue-900 transition-colors pr-10 leading-tight'>
                                        {course.title}
                                    </h3>
                                    <p className='text-sm sm:text-base md:text-lg text-slate-600 mb-5 sm:mb-6 leading-relaxed'>
                                        {course.description}
                                    </p>

                                    {/* Stats */}
                                    <div className='flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6 sm:mb-7 font-medium'>
                                        <svg className='w-4 h-4 sm:w-4 sm:h-4 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24' strokeWidth={2}>
                                            <path strokeLinecap='round' strokeLinejoin='round' d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                                        </svg>
                                        <span>{course.stats}</span>
                                    </div>

                                    {/* CTA Button */}
                                    <button 
                                        onClick={openForm} 
                                        className='w-full py-3 sm:py-3.5 bg-slate-900 text-white rounded-xl text-sm sm:text-base font-semibold group-hover:bg-blue-900 transition-all duration-300 flex items-center justify-center gap-2 tracking-wide mt-auto'
                                    >
                                        Start Program
                                        <svg className='w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24' strokeWidth={2.5}>
                                            <path strokeLinecap='round' strokeLinejoin='round' d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Modal */}
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
                        Course
                    </label>
                    <input
                        type='text'
                        placeholder='Enter the course name'
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

export default CoursesSection;