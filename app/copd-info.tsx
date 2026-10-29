import React from 'react';

const CopdInfo = () => {
  return (
    <div className="mt-16">
      <h2 className="text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
        Understanding COPD
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        Chronic Obstructive Pulmonary Disease (COPD) is a progressive lung disease that makes it hard to breathe. It includes conditions like emphysema and chronic bronchitis.
      </p>
      <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-200 mb-2">
        Symptoms
      </h3>
      <ul className="list-disc list-inside mb-4">
        <li>Shortness of breath</li>
        <li>Chronic cough</li>
        <li>Wheezing</li>
        <li>Chest tightness</li>
      </ul>
      <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-200 mb-2">
        Causes
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        The primary cause of COPD is long-term exposure to irritants that damage the lungs and airways, such as cigarette smoke, air pollution, and chemical fumes.
      </p>
      <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-200 mb-2">
        Management
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        While there is no cure for COPD, it can be managed through lifestyle changes, medications, and pulmonary rehabilitation.
      </p>
    </div>
  );
};

export default CopdInfo;
