import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ScrollToTopButton from '../components/ScrollToTopButton';

// Import founder images
import kevinImg from '../assets/images/founders/kevin.png';
import vishnuImg from '../assets/images/founders/vishnu.jpg';
import annuImg from '../assets/images/founders/annu.png';

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formType, setFormType] = useState('bug'); // 'bug' or 'feature'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  useEffect(() => {
    window.scrollTo(0, 0);
    // Trigger animation after component mounts
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // TODO: Replace with your form submission service
    // Option 1: Formspree (https://formspree.io) - Free tier available
    // Option 2: EmailJS (https://www.emailjs.com) - Free tier available
    // Option 3: Your own API endpoint
    
    try {
      // Example using Formspree (replace YOUR_FORM_ID with your actual form ID)
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: formType === 'bug' ? 'Bug Report' : 'Feature Request',
          ...formData
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', title: '', details: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setFormData({ name: '', email: '', title: '', details: '' });
    setSubmitStatus(null);
  };

  // Founders data with contact information
  const founders = [
    {
      name: "Kevin Jacob",
      role: "Founder & CEO",
      image: kevinImg,
      linkedin: "https://www.linkedin.com/in/jacobkevin/",
      calLink: "https://cal.com/kevin-jacob" // Placeholder - update with actual Cal link
    },
    {
      name: "Annu Mathew",
      role: "Co-Founder, Design & Marketing",
      image: annuImg,
      linkedin: "https://www.linkedin.com/in/annu-mathew-service-designer/",
      calLink: "https://cal.com/annu-mathew" // Placeholder - update with actual Cal link
    },
    {
      name: "Vishnu Aravind",
      role: "Co-Founder, Sales & Operations",
      image: vishnuImg,
      linkedin: "https://www.linkedin.com/in/vishnuaravind01/",
      calLink: "https://cal.com/vishnu-aravind" // Placeholder - update with actual Cal link
    }
  ];

  return (
    <div className="min-h-screen font-manrope bg-background">
      <Navbar />
      <section className="pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10 md:pb-12 relative overflow-hidden">
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          {/* Section Header */}
          <div 
            className={`text-center mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4 relative inline-block">
              we are all eyes and ears
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </h1>
          </div>

          {/* Founders List - Horizontal Layout */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {founders.map((founder, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${
                  isLoaded 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms` 
                }}
              >
                {/* Founder Card - Horizontal Layout */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:bg-white/50 transition-all duration-500">
                  {/* Profile Image Container */}
                  <div className="relative w-full sm:w-auto flex-shrink-0">
                    <div className="relative w-full max-w-[200px] sm:max-w-[240px] md:max-w-[280px] mx-auto sm:mx-0 rounded-lg sm:rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500" style={{ aspectRatio: '1 / 1' }}>
                      <img 
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover', 
                          objectPosition: 'center',
                          display: 'block'
                        }}
                      />
                      
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>

                  {/* Text Content - Middle Section */}
                  <div className="flex-1 flex flex-col space-y-1 sm:space-y-2 md:space-y-3 min-w-0">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black group-hover:text-accent transition-colors duration-300">
                      {founder.name}
                    </h2>
                    
                    <p className="text-sm sm:text-base md:text-lg text-black">
                      {founder.role}
                    </p>

                    {/* Cal Link */}
                    <a
                      href={founder.calLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-black hover:text-accent transition-colors duration-300 font-medium text-xs sm:text-sm md:text-base group/link w-fit"
                    >
                      <span>Cal link</span>
                      <svg 
                        className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>

                  {/* LinkedIn Icon - Far Right */}
                  <div className="flex-shrink-0">
                    <a 
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white rounded-full p-2 shadow-lg hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-110 group/linkedin"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Request / Bug Report Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 relative overflow-hidden bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div 
            className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Section Header */}
            <div className="mb-6 sm:mb-8 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-text mb-3 sm:mb-4 relative inline-block whitespace-nowrap">
                help us to improve thinnan!
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
              </h2>
            </div>

            {/* Form Type Toggle */}
            <div className="flex gap-3 mb-6 sm:mb-8">
              <button
                type="button"
                onClick={() => setFormType('bug')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
                  formType === 'bug'
                    ? 'bg-accent text-white shadow-lg shadow-accent/30'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                Report a Bug
              </button>
              <button
                type="button"
                onClick={() => setFormType('feature')}
                className={`px-4 py-2 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
                  formType === 'feature'
                    ? 'bg-accent text-white shadow-lg shadow-accent/30'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                Request a Feature
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Input */}
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="your name"
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-accent outline-none text-sm sm:text-base md:text-lg text-primary-text placeholder-gray-400 pb-2 transition-all duration-300 group-hover:border-gray-400"
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-focus-within:w-full"></div>
              </div>

              {/* Email Input */}
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your email"
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-accent outline-none text-sm sm:text-base md:text-lg text-primary-text placeholder-gray-400 pb-2 transition-all duration-300 group-hover:border-gray-400"
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-focus-within:w-full"></div>
              </div>

              {/* Title Input */}
              <div className="relative group">
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="title"
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-accent outline-none text-sm sm:text-base md:text-lg text-primary-text placeholder-gray-400 pb-2 transition-all duration-300 group-hover:border-gray-400"
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-focus-within:w-full"></div>
              </div>

              {/* Details Textarea */}
              <div className="relative group">
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder="details"
                  required
                  rows={4}
                  className="w-full bg-transparent border-0 border-b-2 border-gray-300 focus:border-transparent outline-none text-sm sm:text-base md:text-lg text-primary-text placeholder-gray-400 pb-2 pt-1 resize-none transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-focus-within:w-full"></div>
              </div>

              {/* Submit Status Message */}
              {submitStatus && (
                <div 
                  className={`p-4 rounded-xl transition-all duration-500 ${
                    submitStatus === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {submitStatus === 'success' 
                    ? '✓ Thank you! Your submission has been received.'
                    : '✗ Something went wrong. Please try again later.'}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex justify-end gap-3 sm:gap-4 pt-3">
                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={isSubmitting}
                  className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold text-primary-text hover:text-accent transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-accent text-white rounded-lg font-bold text-sm sm:text-base hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent/30 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                  {isSubmitting ? 'submitting...' : 'submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 relative overflow-hidden bg-background">
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div 
            className={`transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Top Section - Join Us */}
            <div className="mb-12 sm:mb-16 md:mb-20">
              <h2 
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-text mb-4 sm:mb-6 leading-tight transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                join us in building the most
                <br className="hidden sm:block" />
                <span className="block h-1.5 sm:h-2"></span>
                loved platform of the world
              </h2>
              <p 
                className={`text-base sm:text-lg md:text-xl text-secondary-grey mb-2 transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                send us your interest to
              </p>
              <a 
                href="mailto:info@thinnan.com"
                className={`text-base sm:text-lg md:text-xl text-secondary-grey hover:text-accent transition-all duration-300 inline-block group ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <span className="relative">
                  info@thinnan.com
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            </div>

            {/* Bottom Section - Location */}
            <div 
              className={`pt-8 sm:pt-12 md:pt-16 border-t border-gray-300 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 
                className={`text-xl sm:text-2xl md:text-3xl font-bold text-primary-text mb-4 sm:mb-6 transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                we're cooking at
              </h3>
              <div className="space-y-1 sm:space-y-2">
                {['maria 01', 'Lapinlahdenkatu 16, 00180', 'Helsinki'].map((line, index) => (
                  <p 
                    key={index}
                    className={`text-base sm:text-lg md:text-xl text-secondary-grey transition-all duration-1000 ${
                      isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Contact;

