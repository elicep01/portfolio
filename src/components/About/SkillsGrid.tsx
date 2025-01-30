import React from 'react';

const SkillsGrid = () => {
  const skills = {
    'Programming Languages': [
      'Python (Advanced)',
      'C++',
      'SQL',
      'JavaScript',
      'TypeScript',
      'Node.js'
    ],
    'Machine Learning & AI': [
      'Deep Learning',
      'Neural Networks',
      'NLP',
      'Reinforcement Learning',
      'Computer Vision'
    ],
    'ML Frameworks': [
      'PyTorch',
      'TensorFlow',
      'Hugging Face',
      'LangChain',
      'scikit-learn',
      'MLflow'
    ],
    'Development & Tools': [
      'CUDA',
      'MATLAB',
      'Docker',
      'Git/GitHub',
      'REST APIs',
      'Kafka'
    ]
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg h-full">
      <h3 className="font-semibold text-lg mb-6">Technical Skills</h3>
      <div className="space-y-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h4 className="text-sm font-medium text-gray-500 mb-2">{category}</h4>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;