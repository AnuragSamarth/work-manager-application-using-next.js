import React from 'react';
import { CheckCircle } from 'lucide-react';

const Features = () => {
  const featureList = [
    'Task Management',
    'Team Collaboration',
    'Time Tracking',
    'Project Analytics',
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featureList.map((feature, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="text-green-500 mr-4" />
              <span className="text-xl">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;