import React from 'react';
import Button from './Button';
import { ArrowRight, ArrowDown } from 'lucide-react';

//Image import from cloudinary
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const HeroSection: React.FC = () => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dx6ckl6o7' } });
  
  // Use this sample image or upload your own via the Media Explorer
  const img = cld
        .image('IMG_8769_dc8wkg')
        .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] bg-grid-slate-200/50 dark:bg-grid-slate-700/50 bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              <span className="block">Hi, I'm <span className="text-blue-600 dark:text-blue-400">Harshavardhan Podeti</span></span>
              <span className="block mt-2">Creative Developer</span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-xl">
              I build exceptional digital experiences with a focus on design, 
              accessibility, and performance. Let's create something amazing together.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button href="#projects" variant="primary" size="lg">
                View Projects <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-end relative">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-400/10 rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-blue-400 to-teal-1000 rounded-full overflow-hidden shadow-xl">
                {/* <img
  src="https://collection.cloudinary.com/dx6ckl6o7/7e0f73fc1c97824d79d87561e9e7ba51"
  alt="Profile"
  className="w-full h-full object-cover"
/> */}
<p className='w-full h-full object-cover'> <AdvancedImage cldImg={img}/></p>

              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a 
            href="#projects" 
            aria-label="Scroll down"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/90 dark:bg-slate-800/90 shadow-md hover:shadow-lg transition-all"
          >
            <ArrowDown size={20} className="text-blue-600 dark:text-blue-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
