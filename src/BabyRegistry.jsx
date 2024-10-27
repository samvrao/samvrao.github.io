import React from 'react';
import { Leaf } from 'lucide-react';

const BabyRegistry = () => {
  const categories = [
    {
      title: "Travel",
      items: [
        { name: "Infant Car Seat", link: "#" },
        { name: "Baby Carrier", link: "#" },
        { name: "Baby Car Mirror", link: "#" },
        { name: "Diaper Bag", link: "#" }
      ]
    },
    {
      title: "Nursing/Feeding",
      items: [
        { name: "Nursing Pillow", link: "#" },
        { name: "Nursing Cover", link: "#" },
        { name: "Baby Bottles", link: "#" },
        { name: "Receiving Blankets", link: "#" },
        { name: "Baby Bottle Warmer", link: "#" },
        { name: "Bibs", link: "#" }
      ]
    },
    // Add other categories similarly
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-orange-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 bg-white rounded-lg p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-orange-800 mb-4">
            Welcome to Our Little Pumpkin's Registry
          </h1>
          <p className="text-orange-700 text-lg">
            Join us in preparing for our sweet autumn blessing
          </p>
        </div>

        {/* Registry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-4 bg-orange-100 rounded-t-lg border-b border-orange-200">
                <h2 className="flex items-center text-xl font-semibold text-orange-800">
                  <Leaf className="w-5 h-5 mr-2 text-orange-600" />
                  {category.title}
                </h2>
              </div>
              <div className="p-4">
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a 
                        href={item.link}
                        className="flex items-center group"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 group-hover:bg-orange-600 transition-colors"></span>
                        <span className="text-gray-700 group-hover:text-orange-600 transition-colors">
                          {item.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center bg-white rounded-lg p-6 shadow-lg">
          <p className="italic text-orange-700 text-lg">
            Thank you for helping us prepare for our little pumpkin's arrival! 🎃
          </p>
        </div>
      </div>
    </div>
  );
};

export default BabyRegistry;