import { useState } from 'react';
import ReportContent from './ReportContent';

function ReportCard({ title, description, type, onGenerate, isLoading }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleGenerate = async () => {
    await onGenerate(type);
    setIsExpanded(true);
  };

  const handleExport = (format) => {
    // console.log(`Exporting ${type} report as ${format}`);
    // Implement export logic
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button 
            className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
            onClick={handleGenerate}
            disabled={isLoading}
          >
            Generate Report
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <ReportContent 
          type={type} 
          onExport={handleExport}
        />
      )}
    </div>
  );
}

export default ReportCard; 