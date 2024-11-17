

import { useState } from 'react';
import ReportCard from './ReportCard';

function EmployeeFeatures() {
  const reports = [
    {
      title: 'Personal Performance',
      description: 'View your tasks completed, sales, and activity metrics',
      type: 'personal-performance'
    },
    {
      title: 'My Sales Report',
      description: 'Track your individual sales performance and targets',
      type: 'personal-sales'
    },
    {
      title: 'Stock Updates',
      description: 'View history of your stock updates and inventory actions',
      type: 'stock-updates'
    }
  ];

  const handleGenerateReport = async (type) => {
    console.log(`Generating ${type} report`);
    // Implement report generation logic
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {reports.map((report) => (
        <ReportCard 
          key={report.type}
          {...report}
          onGenerate={handleGenerateReport}
        />
      ))}
    </div>
  );
}

export default EmployeeFeatures; 