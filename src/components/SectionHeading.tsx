import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'center',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <div className={`mb-12 max-w-3xl ${alignmentClasses[alignment]}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          {subtitle}
        </p>
      )}
      <div
        className={`h-1 w-20 bg-blue-600 mt-4 rounded ${
          alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : ''
        }`}
      />
    </div>
  );
};

export default SectionHeading;