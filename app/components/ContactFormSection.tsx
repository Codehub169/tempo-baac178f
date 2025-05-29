'use client';

import React, { useState, FormEvent } from 'react';
import { Instagram, Send, Loader2, CheckCircle, AlertTriangle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    }
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear specific error when user starts typing
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  // Floating label input component
  const FloatingLabelInput: React.FC<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & { label: string; name: keyof FormData; error?: string; isTextArea?: boolean }> = ({ label, name, error, isTextArea, ...props }) => (
    <div className="relative mb-6">
      {isTextArea ? (
        <textarea
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          name={name}
          id={name}
          value={formData[name]}
          onChange={handleChange}
          placeholder=" " // Required for :placeholder-shown to work
          className={`block px-3.5 pb-2.5 pt-4 w-full text-sm text-text-dark bg-primary-neutral/50 rounded-lg border ${error ? 'border-accent-error' : 'border-secondary-neutral/40 focus:border-accent-hue-3'} appearance-none focus:outline-none focus:ring-0 peer min-h-[120px]`}
        />
      ) : (
        <input
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          type={props.type || 'text'}
          name={name}
          id={name}
          value={formData[name]}
          onChange={handleChange}
          placeholder=" " // Required for :placeholder-shown to work
          className={`block px-3.5 pb-2.5 pt-4 w-full text-sm text-text-dark bg-primary-neutral/50 rounded-lg border ${error ? 'border-accent-error' : 'border-secondary-neutral/40 focus:border-accent-hue-3'} appearance-none focus:outline-none focus:ring-0 peer`}
        />
      )}
      <label
        htmlFor={name}
        className={`absolute text-sm text-secondary-neutral duration-300 transform -translate-y-3.5 scale-75 top-4 z-10 origin-[0] start-3.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ${error ? 'text-accent-error' : 'peer-focus:text-accent-hue-3'}`}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-accent-error">{error}</p>}
    </div>
  );

  return (
    <section id="contact" className="section-container bg-secondary-neutral/20 py-20 md:py-32">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="h2-style font-serif text-accent-hue-3 mb-4">Let's Work Together</h2>
        <p className="p-style text-gray-600 mb-12">
          Have a story waiting to be told? Reach out, and let's design its aesthetic together.
        </p>
      </div> 

      <div className="max-w-xl mx-auto bg-primary-neutral p-8 md:p-12 rounded-xl shadow-xl">
        <form onSubmit={handleSubmit} noValidate>
          <FloatingLabelInput label="Your Name" name="name" error={errors.name} autoComplete="name" />
          <FloatingLabelInput label="Your Email" name="email" type="email" error={errors.email} autoComplete="email" />
          <FloatingLabelInput label="Your Message" name="message" isTextArea error={errors.message} />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 flex items-center justify-center px-8 py-4 bg-accent-hue-1 text-white font-medium rounded-lg hover:bg-accent-hue-1/90 focus:outline-none focus:ring-2 focus:ring-accent-hue-1 focus:ring-offset-2 focus:ring-offset-primary-neutral transition-all duration-300 ease-in-out transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {isLoading ? (
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            ) : (
              <Send className="w-5 h-5 mr-2 transform transition-transform duration-300 group-hover:translate-x-1" />
            )}
            {isLoading ? 'Sending...' : 'Let’s design your story'}
          </button>
        </form>

        {submissionStatus === 'success' && (
          <div className="mt-6 p-4 bg-accent-success/10 text-accent-success border border-accent-success/30 rounded-lg flex items-center">
            <CheckCircle className="w-5 h-5 mr-3 shrink-0" />
            <p className="text-sm">Thank you! Your message has been sent. We'll be in touch soon.</p>
          </div>
        )}
        {submissionStatus === 'error' && (
          <div className="mt-6 p-4 bg-accent-error/10 text-accent-error border border-accent-error/30 rounded-lg flex items-center">
            <AlertTriangle className="w-5 h-5 mr-3 shrink-0" />
            <p className="text-sm">Something went wrong. Please try again later or contact us directly.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="p-style text-gray-600 mb-3">Find more of our hues & neus on Instagram:</p>
          <a
            href="https://instagram.com/hueneu_" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent-hue-3 hover:text-accent-hue-1 transition-colors duration-300 group"
          >
            <Instagram className="w-5 h-5 mr-2" />
            <span className="font-medium group-hover:underline">@hueneu_</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
