import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import { Download, ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about my journey and experience."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="prose dark:prose-invert prose-lg max-w-none">
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Hello! I'm Podeti Harshavardhan, a Computer Science undergraduate at the Institute of Aeronautical Engineering (IARE), Hyderabad, with hands-on experience in Problm solving, Web design, Full-Stack development, and mobile application development.
              </p>
              
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                During my journey, I’ve  Worked as a Web Designer at Apex-Tech, a USA-based company in Hyderabad. Created and deployed responsive templates based on
user feedback, now utilized in 15+ live projects, improving UI consistency. 
              </p>
              <p className='text-slate-700 dark:text-slate-300 mb-4'>I also interned as Hardware and Network Engineer  at Cluster Info Tech, Ameerpet, Hyderabad, Assisted in the installation and maintenance of network devices, ensuring optimal performance and security.  </p>
              
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                I’ve completed the Google Android Developer Virtual Internship via EduSkills and built interactive mobile applications using Kotlin and Android Studio.
              </p>
              
              <p className="text-slate-700 dark:text-slate-300 mb-8">
                I'm always open to new opportunities and collaborations. Feel free to 
                reach out if you'd like to work together or just chat about web development and Problem solving! 
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button href="#contact" variant="primary">
                  Get In Touch <ArrowRight size={18} className="ml-2" />
                </Button>
                <a href="https://drive.google.com/file/d/1iz9FMobd331q1h4WJ3jh87-nAlLNUiYX/view?usp=drive_link" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Download CV <Download size={18} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 md:-inset-6 rounded-xl bg-blue-600/20 transform rotate-6 animate-pulse-slow"></div>
              <div className="relative rounded-lg overflow-hidden shadow-xl border-4 border-white dark:border-slate-800">
                <img
                  src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Portrait"
                  className="w-full h-full object-cover max-w-md"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="flex flex-col items-center">
                  <span className="text-slate-800 dark:text-white font-bold text-xl">1.5+</span>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;