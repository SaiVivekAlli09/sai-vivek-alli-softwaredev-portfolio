
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { X, ZoomIn } from 'lucide-react';

const PhotographySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    {
      src: '/lovable-uploads/bb44dd05-e467-4edc-9677-b9f44c063cd8.png',
      alt: 'Golden Hour Trees',
      category: 'Nature'
    },
    {
      src: '/lovable-uploads/8d45e2da-b5d5-4416-947d-2ecb79c2378c.png',
      alt: 'Peaceful Fishing',
      category: 'Lifestyle'
    },
    {
      src: '/lovable-uploads/59c5ac6a-8627-4999-b51b-cacec4d81224.png',
      alt: 'Birds by the Water',
      category: 'Wildlife'
    },
    {
      src: '/lovable-uploads/1e7356f5-2297-4467-89b0-77cd2f636aa3.png',
      alt: 'Geese in Field',
      category: 'Wildlife'
    },
    {
      src: '/lovable-uploads/d4c28d1f-c12c-4fc7-a928-1972a36f56e9.png',
      alt: 'Monkey in Nature',
      category: 'Wildlife'
    },
    {
      src: '/lovable-uploads/588802c9-29c5-47c7-a40e-af4d6c617479.png',
      alt: 'Monkey Portrait',
      category: 'Wildlife'
    },
    {
      src: '/lovable-uploads/7212dffe-03ae-4283-aa6b-678ab918ddce.png',
      alt: 'Bird in Flight',
      category: 'Wildlife'
    },
    {
      src: '/lovable-uploads/eef4713c-15ad-404b-8b98-4d44ef5c3f9c.png',
      alt: 'Racing Motorcycle',
      category: 'Sports'
    },
    {
      src: '/lovable-uploads/270916b5-00a9-494a-86f1-179650c9795c.png',
      alt: 'Bird Soaring',
      category: 'Wildlife'
    },
    {
      src: '/lovable-uploads/bfaef3ec-b09e-4be8-8aab-dedb1afd6229.png',
      alt: 'Portrait Photography',
      category: 'Portrait'
    }
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="photography" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              My Photography / Moments through my Lens
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
            Here are few clicks through my lens or my camera. I like clicking pictures, it may be through my mobile or camera.
          </p>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <Card key={index} className="group relative overflow-hidden bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openLightbox(photo.src)}
                    className="bg-cyan-400 text-slate-900 p-3 rounded-full hover:bg-cyan-300 transition-colors duration-300 transform scale-90 group-hover:scale-100"
                  >
                    <ZoomIn className="w-6 h-6" />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-cyan-400">{photo.category}</span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-white font-medium text-sm">{photo.alt}</h3>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors duration-300"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage}
                alt="Photography"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Photography Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="p-6 bg-slate-800/30 backdrop-blur-sm border-slate-700/50 text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-sm text-gray-400">Photos Captured</div>
          </Card>
          <Card className="p-6 bg-slate-800/30 backdrop-blur-sm border-slate-700/50 text-center">
            <div className="text-2xl font-bold text-emerald-400 mb-2">5</div>
            <div className="text-sm text-gray-400">Categories</div>
          </Card>
          <Card className="p-6 bg-slate-800/30 backdrop-blur-sm border-slate-700/50 text-center">
            <div className="text-2xl font-bold text-purple-400 mb-2">3+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </Card>
          <Card className="p-6 bg-slate-800/30 backdrop-blur-sm border-slate-700/50 text-center">
            <div className="text-2xl font-bold text-pink-400 mb-2">Mobile & DSLR</div>
            <div className="text-sm text-gray-400">Equipment Used</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PhotographySection;
