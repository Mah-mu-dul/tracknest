
import { useState } from 'react';
import ReportCard from './ReportCard';

function ManagerFeatures() {
  const reports = [
    {
      title: 'Team Sales Report',
      description: 'View sales data for your assigned teams and products',
      type: 'team-sales'
    },
    {
      title: 'Team Stock Levels',
      description: 'Monitor inventory levels for assigned products',
      type: 'team-stock'
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

export default ManagerFeatures; 