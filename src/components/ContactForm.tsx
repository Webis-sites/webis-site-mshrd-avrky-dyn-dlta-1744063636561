'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FiUser, FiPhone, FiMail, FiMessageSquare, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success handling
      setIsSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      setSubmitError('אירעה שגיאה בשליחת הטופס. אנא נסו שנית.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section dir="rtl" className="contact-form-section py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="glassmorphism-card p-8 md:p-10 rounded-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">צור קשר</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              צוות משרד עורכי דין דלתא ישמח לעמוד לשירותכם בכל שאלה או התייעצות בנושאי משפט בתעשיית המזון
            </p>
          </div>

          {!isSubmitted ? (
            <motion.form 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <FiUser className="inline-block ml-2" />
                  שם מלא
                </label>
                <motion.div
                  whileTap={{ scale: 0.995 }}
                  className={`neumorphic-input-container ${errors.name ? 'error-container' : ''}`}
                >
                  <input
                    type="text"
                    id="name"
                    placeholder="הזן את שמך המלא"
                    className="neumorphic-input"
                    {...register('name', { 
                      required: 'שדה זה הוא חובה',
                      minLength: { value: 2, message: 'שם חייב להכיל לפחות 2 תווים' }
                    })}
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                </motion.div>
                {errors.name && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="error-message"
                  >
                    <FiAlertCircle className="inline-block ml-1" />
                    {errors.name.message}
                  </motion.p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  <FiPhone className="inline-block ml-2" />
                  טלפון
                </label>
                <motion.div
                  whileTap={{ scale: 0.995 }}
                  className={`neumorphic-input-container ${errors.phone ? 'error-container' : ''}`}
                >
                  <input
                    type="tel"
                    id="phone"
                    placeholder="הזן את מספר הטלפון שלך"
                    className="neumorphic-input"
                    dir="ltr"
                    {...register('phone', { 
                      required: 'שדה זה הוא חובה',
                      pattern: { 
                        value: /^[0-9]{9,10}$/, 
                        message: 'אנא הזן מספר טלפון תקין' 
                      }
                    })}
                    aria-invalid={errors.phone ? "true" : "false"}
                  />
                </motion.div>
                {errors.phone && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="error-message"
                  >
                    <FiAlertCircle className="inline-block ml-1" />
                    {errors.phone.message}
                  </motion.p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <FiMail className="inline-block ml-2" />
                  דוא"ל
                </label>
                <motion.div
                  whileTap={{ scale: 0.995 }}
                  className={`neumorphic-input-container ${errors.email ? 'error-container' : ''}`}
                >
                  <input
                    type="email"
                    id="email"
                    placeholder="הזן את כתובת הדוא״ל שלך"
                    className="neumorphic-input"
                    dir="ltr"
                    {...register('email', { 
                      required: 'שדה זה הוא חובה',
                      pattern: { 
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                        message: 'אנא הזן כתובת דוא״ל תקינה' 
                      }
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                </motion.div>
                {errors.email && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="error-message"
                  >
                    <FiAlertCircle className="inline-block ml-1" />
                    {errors.email.message}
                  </motion.p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <FiMessageSquare className="inline-block ml-2" />
                  הודעה
                </label>
                <motion.div
                  whileTap={{ scale: 0.995 }}
                  className={`neumorphic-input-container ${errors.message ? 'error-container' : ''}`}
                >
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="כיצד נוכל לעזור לך?"
                    className="neumorphic-input"
                    {...register('message', { 
                      required: 'שדה זה הוא חובה',
                      minLength: { value: 10, message: 'אנא הזן לפחות 10 תווים' }
                    })}
                    aria-invalid={errors.message ? "true" : "false"}
                  ></textarea>
                </motion.div>
                {errors.message && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="error-message"
                  >
                    <FiAlertCircle className="inline-block ml-1" />
                    {errors.message.message}
                  </motion.p>
                )}
              </div>

              <div className="mt-8">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      שולח...
                    </span>
                  ) : (
                    'שלח פנייה'
                  )}
                </motion.button>
              </div>

              {submitError && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-lg mt-4 text-red-600 text-center"
                >
                  <FiAlertCircle className="inline-block ml-2" />
                  {submitError}
                </motion.div>
              )}
            </motion.form>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="success-message"
              >
                <div className="success-icon-container">
                  <FiCheckCircle className="success-icon" />
                </div>
                <h3 className="text-xl font-bold mb-2">תודה על פנייתך!</h3>
                <p>הודעתך התקבלה בהצלחה. נציג ממשרד עורכי דין דלתא יחזור אליך בהקדם.</p>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;