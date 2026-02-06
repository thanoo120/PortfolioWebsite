import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    Message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formDataObj = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataObj).toString(),
      });

      if (response.ok) {
        setShowSuccess(true);
        form.reset();
        setFormData({ Name: '', email: '', Message: '' });
        setTimeout(() => setShowSuccess(false), 4000);
      }
    } catch (error) {
      alert('Oops! Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: 'bi-envelope', label: 'Email', value: 'thanoo@gmail.com', link: 'mailto:thanoo@gmail.com' },
    { icon: 'bi-phone', label: 'Phone', value: '0768946042', link: 'tel:0768946042' },
    { icon: 'bi-house', label: 'Address', value: 'NO.20, Urelu west, Chunnakam, Jaffna.', link: null },
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/sanmugarasa-thanoogithan-923a70280/', icon: 'bi-linkedin', name: 'LinkedIn' },
    { href: 'https://github.com/', icon: 'bi-github', name: 'GitHub' },
    { href: 'https://www.instagram.com/', icon: 'bi-instagram', name: 'Instagram' },
    { href: 'https://www.facebook.com/?ref=homescreenpwa', icon: 'bi-facebook', name: 'Facebook' },
  ];

  return (
    <div className="pl-20 min-h-screen relative z-10">
      <section className="px-6 sm:px-12 lg:px-20 py-32">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-20 animate-slide-down">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 mb-6">
            <span className="text-primary text-sm font-medium">Get In Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black gradient-text mb-6">Let's Work Together</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-left">
            <div className="glass rounded-2xl p-8 border border-primary/20">
              <h2 className="text-2xl font-bold gradient-text mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <i className={`bi ${info.icon} text-primary text-xl`}></i>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                      {info.link ? (
                        <a href={info.link} className="text-white text-lg font-semibold group-hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white text-lg font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-8 border border-primary/20">
              <h2 className="text-2xl font-bold gradient-text mb-6">Follow Me</h2>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-4 py-3 glass rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105"
                  >
                    <i className={`bi ${social.icon} text-primary text-xl`}></i>
                    <span className="text-white font-medium group-hover:text-primary transition-colors">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-right">
            <div className="glass rounded-2xl p-8 border border-primary/20">
              <h2 className="text-2xl font-bold gradient-text mb-8">Send a Message</h2>
              <form
                id="contactForm"
                action="https://formspree.io/f/xjkyalog"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="block text-primary font-semibold text-sm">
                    <i className="bi bi-person mr-2"></i>Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    id="name"
                    value={formData.Name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full bg-darkCard/50 border-2 border-primary/30 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-primary font-semibold text-sm">
                    <i className="bi bi-envelope mr-2"></i>Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full bg-darkCard/50 border-2 border-primary/30 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-primary font-semibold text-sm">
                    <i className="bi bi-chat-left-text mr-2"></i>Message
                  </label>
                  <textarea
                    name="Message"
                    id="message"
                    rows="6"
                    value={formData.Message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full bg-darkCard/50 border-2 border-primary/30 rounded-xl px-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full bg-gradient-to-r from-primary via-accent to-secondary text-dark py-4 rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <i className="bi bi-hourglass-split animate-spin"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <i className="bi bi-send group-hover:translate-x-1 transition-transform"></i>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                {showSuccess && (
                  <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-4 rounded-xl text-center animate-slide-up shadow-lg border border-green-400">
                    <div className="flex items-center justify-center gap-2">
                      <i className="bi bi-check-circle text-2xl"></i>
                      <span className="font-semibold">Message sent successfully!</span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
