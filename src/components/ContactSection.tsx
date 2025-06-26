
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject || 'New Inquiry'}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.subject}
Budget: ${formData.budget}
Timeline: ${formData.timeline}

Message:
${formData.message}
      `);
      
      const mailtoLink = `mailto:saivivekalli9@gmail.com?subject=${subject}&body=${body}`;
      
      // Open default email client
      window.location.href = mailtoLink;

      toast({
        title: "Email Client Opened!",
        description: "Your default email client should open with the message pre-filled.",
      });

      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        budget: '',
        timeline: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue processing your request. Please try again.",
        variant: "destructive"
      });
    }

    setIsSubmitting(false);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${type} Copied!`,
      description: `${text} has been copied to your clipboard.`,
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-300 cursor-pointer"
                  onClick={() => copyToClipboard('saivivekalli9@gmail.com', 'Email')}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="text-white font-medium">saivivekalli9@gmail.com</div>
                  </div>
                </div>

                <div
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-300 cursor-pointer"
                  onClick={() => copyToClipboard('+1 (480) 334-0225', 'Phone')}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div className="text-white font-medium">+1 (480) 334-0225</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-lg">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="text-white font-medium">Virginia, USA</div>
                    <div className="text-xs text-green-400">Open for relocation</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-6">Connect With Me</h3>
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/vivek-987-a-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                  <span className="text-gray-300 group-hover:text-white">LinkedIn Profile</span>
                </a>
                <a
                  href="https://github.com/SaiVivekAlli09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-300 group"
                >
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-white" />
                  <span className="text-gray-300 group-hover:text-white">GitHub Repository</span>
                </a>
              </div>
            </Card>

            {/* Availability Status */}
            <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Available for Projects</span>
              </div>
              <div className="text-sm text-gray-400 space-y-2">
                <div>• Remote, Hybrid, or On-site</div>
                <div>• Full-time or Contract</div>
                <div>• Response within 24-48 hours</div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border-slate-700/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-slate-900/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-slate-900/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type *
                  </label>
                  <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                    <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600">
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="mobile-app">Mobile App</SelectItem>
                      <SelectItem value="api-development">API Development</SelectItem>
                      <SelectItem value="consultation">Technical Consultation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Budget and Timeline */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Budget
                    </label>
                    <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                      <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="under-5k">Under $5K</SelectItem>
                        <SelectItem value="5k-15k">$5K - $15K</SelectItem>
                        <SelectItem value="15k-50k">$15K - $50K</SelectItem>
                        <SelectItem value="50k-plus">$50K+</SelectItem>
                        <SelectItem value="discuss">Let's Discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Timeline
                    </label>
                    <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                      <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-600">
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-3-months">1-3 months</SelectItem>
                        <SelectItem value="3-6-months">3-6 months</SelectItem>
                        <SelectItem value="6-plus-months">6+ months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Project Description *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-slate-900/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-400 min-h-[120px]"
                    placeholder="Tell me about your project, goals, and requirements..."
                  />
                  <div className="text-xs text-gray-500 mt-1">
                    {formData.message.length}/500 characters
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Opening Email Client...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </Button>
                
                <p className="text-xs text-gray-500 text-center mt-2">
                  This will open your default email client with the message pre-filled
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
