import { useState, useEffect } from 'react';

const NewsletterModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errorMessage, setErrorMessage] = useState('');
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [touched, setTouched] = useState(false);

  // Email validation function
  const validateEmail = (emailValue) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) {
      return 'email is required';
    }
    if (!emailRegex.test(emailValue)) {
      return 'please enter a valid email address';
    }
    return '';
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    // Only show validation errors after user has touched the field
    if (touched) {
      const error = validateEmail(value);
      setEmailError(error);
    }
  };

  // Handle blur event (when user leaves the field)
  const handleBlur = () => {
    setTouched(true);
    const error = validateEmail(email);
    setEmailError(error);
  };

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // Auto-close after success with fade out
  useEffect(() => {
    if (submitStatus === 'success') {
      // Start fade out after 2 seconds
      const fadeTimer = setTimeout(() => {
        setIsFadingOut(true);
      }, 2000);

      // Close modal after fade out animation (500ms)
      const closeTimer = setTimeout(() => {
        onClose();
        // Reset form after closing
        setEmail('');
        setSubmitStatus(null);
        setIsFadingOut(false);
      }, 2500);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(closeTimer);
      };
    }
  }, [submitStatus, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email before submission
    const error = validateEmail(email);
    if (error) {
      setEmailError(error);
      setTouched(true);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');
    setEmailError('');

    try {
      // Create a hidden iframe for form submission
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'mailchimp-iframe';
      document.body.appendChild(iframe);

      // Create a form element
      const form = document.createElement('form');
      form.action = 'https://thinnan.us6.list-manage.com/subscribe/post?u=860a5951753df00cda85def11&id=6f03da59a4&f_id=007e54e5f0';
      form.method = 'POST';
      form.target = 'mailchimp-iframe';

      // Add email field
      const emailInput = document.createElement('input');
      emailInput.type = 'email';
      emailInput.name = 'EMAIL';
      emailInput.value = email;
      form.appendChild(emailInput);

      // Add honeypot field
      const honeypotInput = document.createElement('input');
      honeypotInput.type = 'text';
      honeypotInput.name = 'b_860a5951753df00cda85def11_6f03da59a4';
      honeypotInput.value = '';
      honeypotInput.style.position = 'absolute';
      honeypotInput.style.left = '-5000px';
      honeypotInput.tabIndex = -1;
      form.appendChild(honeypotInput);

      // Append form to body and submit
      document.body.appendChild(form);
      form.submit();

      // Simulate success after a short delay
      // Note: Due to CORS, we can't actually read the response, so we assume success
      setTimeout(() => {
        setSubmitStatus('success');
        document.body.removeChild(form);
        document.body.removeChild(iframe);
      }, 1000);

    } catch (error) {
      console.error('Newsletter submission error:', error);
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
        isFadingOut ? 'opacity-0' : 'opacity-100 animate-fadeIn'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`relative bg-white rounded-3xl shadow-2xl border border-gray-100 w-full max-w-md p-8 sm:p-10 md:p-12 transition-all duration-500 ${
          isFadingOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100 animate-fadeInUp'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-gray-600 transition-colors duration-300"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-text mb-2">
            subscribe to thinnan's newsletter
          </h2>
          <p className="text-sm sm:text-base text-secondary-grey">
            stay updated with our latest news and features
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email input */}
          <div className="relative group">
            <label className="block text-xs sm:text-sm font-semibold text-gray-500 mb-2 ml-1 uppercase tracking-wider">
              email address <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              name="EMAIL"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleBlur}
              placeholder="enter your email"
              required
              disabled={isSubmitting || submitStatus === 'success'}
              className={`w-full bg-gray-50 focus:bg-white rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 outline-none text-sm sm:text-base md:text-lg text-primary-text placeholder-gray-400 transition-all duration-300 group-hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed ${
                emailError && touched ? 'border-2 border-red-500 focus:border-red-500' : ''
              }`}
            />
            {emailError && touched && (
              <p className="text-red-500 text-xs sm:text-sm mt-2 ml-1 flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {emailError}
              </p>
            )}
          </div>

          {/* Submit status message */}
          {submitStatus && (
            <div 
              className={`p-4 sm:p-5 rounded-2xl transition-all duration-700 transform ${
                submitStatus === 'success'
                  ? 'bg-green-50 text-green-700 border-2 border-green-200 scale-100 opacity-100'
                  : 'bg-red-50 text-red-700 border-2 border-red-200 scale-100 opacity-100'
              }`}
            >
              <div className="flex items-center gap-3">
                {submitStatus === 'success' ? (
                  <>
                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-bold text-base sm:text-lg">thank you!</p>
                      <p className="text-sm sm:text-base">you've been subscribed successfully.</p>
                    </div>
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-bold text-base sm:text-lg">oops!</p>
                      <p className="text-sm sm:text-base">{errorMessage || 'something went wrong. please try again.'}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={isSubmitting || submitStatus === 'success' || (touched && emailError)}
            className="group relative w-full px-6 sm:px-8 py-3 sm:py-4 bg-accent text-white rounded-2xl font-bold text-sm sm:text-base md:text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent/30 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  subscribing...
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  subscribed!
                </>
              ) : (
                <>
                  subscribe
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              )}
            </span>
            {!isSubmitting && submitStatus !== 'success' && (
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            )}
          </button>
        </form>

        {/* Additional info */}
        <p className="mt-4 text-xs sm:text-sm text-gray-500 text-center">
          we respect your privacy. unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default NewsletterModal;

