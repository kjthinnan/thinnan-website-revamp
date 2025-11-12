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

    // IMPORTANT: Replace this URL with your Google Apps Script Web App URL
    // See GOOGLE_SHEETS_SETUP_GUIDE.md for detailed setup instructions
    const GOOGLE_SHEETS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw1_6MBoW2US9C6u5UWuOq3i8Wfas_YC4F9XvOW7n2zwUqbjbUXXvvCVYWV6WD_1xy-8g/exec';
    
    try {
      // Prepare the data to send
      const submissionData = {
        type: formType === 'bug' ? 'Bug Report' : 'Feature Request',
        name: formData.name,
        email: formData.email,
        title: formData.title,
        details: formData.details,
        timestamp: new Date().toISOString()
      };

      // Submit to Google Sheets
      const response = await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      // Note: With 'no-cors' mode, we can't read the response
      // So we assume success if no error is thrown
      setSubmitStatus('success');
      setFormData({ name: '', email: '', title: '', details: '' });
      setTimeout(() => setSubmitStatus(null), 5000);

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
      calLink: "https://cal.com/kevinjacob/30min"
    },
    {
      name: "Annu Mathew",
      role: "Co-Founder, CDO",
      image: annuImg,
      linkedin: "https://www.linkedin.com/in/annu-mathew-service-designer/",
      calLink: "https://cal.com/annu-mathew-hn741e/30min"
    },
    {
      name: "Vishnu Aravind",
      role: "Co-Founder, COO",
      image: vishnuImg,
      linkedin: "https://www.linkedin.com/in/vishnuaravind01/",
      calLink: "https://cal.com/vishnu-aravind-gyo5kp/30min"
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4 relative inline-block">
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
                <div className="flex flex-col sm:flex-row items-center sm:items-start sm:items-center gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:bg-white/50 transition-all duration-500">
                  {/* Profile Image Container */}
                  <div className="relative w-full sm:w-auto flex-shrink-0">
                    <div className="relative w-full max-w-[280px] sm:max-w-[240px] md:max-w-[280px] mx-auto sm:mx-0 rounded-2xl sm:rounded-xl overflow-hidden shadow-xl sm:shadow-lg group-hover:shadow-2xl sm:group-hover:shadow-xl transition-all duration-500" style={{ aspectRatio: '4 / 5' }}>
                      <img 
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                        style={{ 
                          width: '100%', 
                          height: '100%', 
                          objectFit: 'cover', 
                          objectPosition: founder.name === 'Annu Mathew' ? 'center 35%' : 
                                         founder.name === 'Kevin Jacob' ? 'center 20%' : 
                                         'center top',
                          display: 'block'
                        }}
                      />
                      
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* LinkedIn Icon - Top Right on Mobile, Hidden on Desktop */}
                      <a 
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-3 right-3 sm:hidden bg-white rounded-full p-2.5 shadow-lg hover:bg-accent hover:text-white transition-all duration-300 z-10 transform hover:scale-110"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Text Content - Middle Section */}
                  <div className="flex-1 flex flex-col space-y-2 sm:space-y-3 md:space-y-4 min-w-0 text-center sm:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black group-hover:text-accent transition-colors duration-300">
                      {founder.name}
                    </h2>
                    
                    <p className="text-lg sm:text-xl md:text-2xl text-black">
                      {founder.role}
                    </p>

                    {/* Cal Link Button */}
                    <a
                      href={founder.calLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 bg-accent/10 hover:bg-accent text-black hover:text-white rounded-xl sm:rounded-2xl transition-all duration-300 font-semibold text-xs sm:text-sm md:text-base group/link w-fit mx-auto sm:mx-0 shadow-sm hover:shadow-lg transform hover:scale-105"
                    >
                      <svg 
                        className="w-4 h-4 sm:w-5 sm:h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>schedule a call</span>
                      <svg 
                        className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>

                  {/* LinkedIn Icon - Far Right (Desktop Only) */}
                  <div className="flex-shrink-0 hidden sm:block">
                    <a 
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white rounded-full p-2 shadow-lg hover:bg-accent hover:text-white transition-all duration-300 transform hover:scale-110 group/linkedin"
                    >
                      <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24">
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-secondary">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          {/* Section Header */}
          <div 
            className={`text-center mb-10 sm:mb-12 md:mb-16 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text mb-4 sm:mb-6 relative inline-block">
              help us to improve thinnan!
              <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-secondary-grey mt-6 sm:mt-8 max-w-2xl mx-auto">
              Your feedback shapes our journey. Share bugs or request features to make Thinnan better for everyone.
            </p>
          </div>

          {/* Form Card */}
          <div 
            className={`bg-white rounded-3xl sm:rounded-[2rem] shadow-2xl border border-gray-100 p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Form Type Toggle */}
            <div className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <button
                type="button"
                onClick={() => setFormType('bug')}
                className={`group relative px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-base md:text-lg transition-all duration-500 ${
                  formType === 'bug'
                    ? 'bg-accent text-white shadow-lg shadow-accent/20 scale-105'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:scale-105'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  report a bug
                </span>
                {formType === 'bug' && (
                  <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl animate-pulse"></div>
                )}
              </button>
              <button
                type="button"
                onClick={() => setFormType('feature')}
                className={`group relative px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-base md:text-lg transition-all duration-500 ${
                  formType === 'feature'
                    ? 'bg-accent text-white shadow-lg shadow-accent/20 scale-105'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:scale-105'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  request a feature
                </span>
                {formType === 'feature' && (
                  <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-xl animate-pulse"></div>
                )}
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Name Input */}
              <div className="relative group">
                <label className="block text-xs sm:text-sm font-semibold text-gray-500 mb-2 ml-1 uppercase tracking-wider">
                  your name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  maxLength={50}
                  className="w-full bg-gray-50 border-2 border-gray-200 focus:border-accent focus:bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 outline-none text-sm sm:text-base md:text-lg text-primary-text placeholder-gray-400 transition-all duration-300 group-hover:border-gray-300 group-hover:shadow-md"
                />
                <div className="text-xs text-gray-400 mt-1 ml-1">{formData.name.length}/50</div>
              </div>

              {/* Email Input */}
              <div className="relative group">
                <label className="block text-xs sm:text-sm font-semibold text-gray-500 mb-2 ml-1 uppercase tracking-wider">
                  your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  maxLength={100}
                  className="w-full bg-gray-50 border-2 border-gray-200 focus:border-accent focus:bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 outline-none text-sm sm:text-base md:text-lg text-primary-text placeholder-gray-400 transition-all duration-300 group-hover:border-gray-300 group-hover:shadow-md"
                />
                <div className="text-xs text-gray-400 mt-1 ml-1">{formData.email.length}/100</div>
              </div>

              {/* Title Input */}
              <div className="relative group">
                <label className="block text-xs sm:text-sm font-semibold text-gray-500 mb-2 ml-1 uppercase tracking-wider">
                  title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder={formType === 'bug' ? 'Brief description of the bug' : 'Brief description of the feature'}
                  required
                  maxLength={100}
                  className="w-full bg-gray-50 border-2 border-gray-200 focus:border-accent focus:bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 outline-none text-sm sm:text-base md:text-lg text-primary-text placeholder-gray-400 transition-all duration-300 group-hover:border-gray-300 group-hover:shadow-md"
                />
                <div className="text-xs text-gray-400 mt-1 ml-1">{formData.title.length}/100</div>
              </div>

              {/* Details Textarea */}
              <div className="relative group">
                <label className="block text-xs sm:text-sm font-semibold text-gray-500 mb-2 ml-1 uppercase tracking-wider">
                  details
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleInputChange}
                  placeholder={formType === 'bug' ? 'Tell us what happened, steps to reproduce, etc.' : 'Describe your feature idea and how it would help'}
                  required
                  rows={5}
                  maxLength={1000}
                  className="w-full bg-gray-50 border-2 border-gray-200 focus:border-accent focus:bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 outline-none text-sm sm:text-base md:text-lg text-primary-text placeholder-gray-400 resize-none transition-all duration-300 group-hover:border-gray-300 group-hover:shadow-md"
                />
                <div className="text-xs text-gray-400 mt-1 ml-1">{formData.details.length}/1000</div>
              </div>

              {/* Submit Status Message */}
              {submitStatus && (
                <div 
                  className={`p-4 sm:p-5 rounded-2xl transition-all duration-700 transform ${
                    submitStatus === 'success'
                      ? 'bg-green-50 text-green-700 border-2 border-green-200 scale-100 opacity-100'
                      : 'bg-red-50 text-red-700 border-2 border-red-200 scale-100 opacity-100'
                  }`}
                  style={{ animation: 'slideIn 0.5s ease-out' }}
                >
                  <div className="flex items-center gap-3">
                    {submitStatus === 'success' ? (
                      <>
                        <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="font-bold text-base sm:text-lg">Thank you!</p>
                          <p className="text-sm sm:text-base">Your submission has been received.</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="font-bold text-base sm:text-lg">Oops!</p>
                          <p className="text-sm sm:text-base">Something went wrong. Please try again later.</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={isSubmitting}
                  className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-bold text-primary-text hover:text-accent hover:bg-gray-50 rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed order-2 sm:order-1"
                >
                  cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-accent text-white rounded-2xl font-bold text-sm sm:text-base md:text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent/30 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 overflow-hidden order-1 sm:order-2"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        submitting...
                      </>
                    ) : (
                      <>
                        submit
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </span>
                  {!isSubmitting && (
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
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
            <div className="mb-12 sm:mb-16 md:mb-20 text-center sm:text-left">
              <h2 
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-text mb-4 sm:mb-6 leading-tight transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                join us in building the most loved platform of the world
              </h2>
              <p 
                className={`text-lg sm:text-xl md:text-2xl text-secondary-grey mb-6 sm:mb-8 transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                We're always looking for passionate people to join our mission.
              </p>
              <div 
                className={`transition-all duration-1000 flex justify-center sm:justify-start ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <a 
                  href="mailto:info@thinnan.com"
                  className="group inline-flex items-center gap-3 text-lg sm:text-xl md:text-2xl text-primary-text hover:text-accent transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="relative font-semibold">
                    info@thinnan.com
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </div>
            </div>

            {/* Bottom Section - Location */}
            <div 
              className={`pt-8 sm:pt-12 md:pt-16 border-t border-gray-300 transition-all duration-1000 text-center sm:text-left ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-text mb-4 sm:mb-6 transition-all duration-1000 ${
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
                    className={`text-lg sm:text-xl md:text-2xl text-secondary-grey transition-all duration-1000 ${
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

