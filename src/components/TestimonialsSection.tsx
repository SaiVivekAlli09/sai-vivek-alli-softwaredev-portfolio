
import React from 'react';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      company: "AppleTree Inn",
      rating: 5,
      review: "We are super satisfied and happy! He was very responsive and made us a hotel booking management website within very short span and very affordable. Thanks to him!",
      type: "Hotel Management"
    },
    {
      company: "China King",
      rating: 5,
      review: "Super quick and it was very helpful to our Chinese Restaurant! He clearly understood what we are looking for, we did not have any problems.",
      type: "Restaurant Website"
    },
    {
      company: "BNphotography",
      rating: 5,
      review: "He created me a portfolio website with all my best work of pictures with proper alignment and colours. Added few details which were impressive which I did not mention too, it was awesome!",
      type: "Photography Portfolio"
    },
    {
      company: "Sri Venkateswara Enterprises",
      rating: 5,
      review: "We are specialists in custom built engineering components and Reverse Engineering. We asked for a website for our business, he created within 4 days and well format aligned and amazing job!",
      type: "Engineering Business"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Client Testimonials
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-400 mt-6">
            What my clients say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:transform hover:scale-105 transition-all duration-300">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{testimonial.company}</h3>
                  <div className="flex gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <span className="text-sm text-cyan-400 font-medium">{testimonial.type}</span>
              </div>
              
              <blockquote className="text-gray-300 leading-relaxed italic">
                "{testimonial.review}"
              </blockquote>
              
              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-sm text-emerald-400 font-medium">Verified Client</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Overall Statistics */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-slate-800/30 backdrop-blur-sm border-slate-700/50 inline-block">
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">5.0</div>
                <div className="flex justify-center mb-2">
                  {renderStars(5)}
                </div>
                <div className="text-sm text-gray-400">Average Rating</div>
              </div>
              <div className="w-px h-16 bg-slate-700"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div className="w-px h-16 bg-slate-700"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
