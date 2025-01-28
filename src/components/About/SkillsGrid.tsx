import React from 'react';

const SkillsGrid = () => {
  return (
    <div>
      <h3 className="font-semibold mb-4">Technical Skills</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm text-gray-500 mb-2">Languages</h4>
          <ul className="space-y-1">
            <li>Python</li>
            <li>C++</li>
            <li>Java</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm text-gray-500 mb-2">Frameworks</h4>
          <ul className="space-y-1">
            <li>TensorFlow</li>
            <li>PyTorch</li>
            <li>LangChain</li>
            <li>React.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;