import { useState } from 'react';

function ReportContent({ type, onExport }) {
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [filters, setFilters] = useState({});

  const renderFilters = () => {
    switch (type) {
      case 'sales':
        return (
          <div className="flex gap-4 mb-4">
            <input 
              type="date" 
              className="input input-accent"
              value={dateRange.start}
              onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
            />
            <input 
              type="date" 
              className="input input-accent"
              value={dateRange.end}
              onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
            />
            <select className="select select-primary">
              <option>All Categories</option>
              {/* Add your categories */}
            </select>
          </div>
        );
      // Add more cases for other report types
      default:
        return null;
    }
  };

  const renderExportButtons = () => (
    <div className="btn-group">
      <button className="btn btn-accent" onClick={() => onExport('csv')}>CSV</button>
      <button className="btn btn-accent" onClick={() => onExport('excel')}>Excel</button>
      <button className="btn btn-accent" onClick={() => onExport('pdf')}>PDF</button>
    </div>
  );

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="collapse collapse-arrow">
          <input type="checkbox" /> 
          <div className="collapse-title text-xl font-medium">
            Filters
          </div>
          <div className="collapse-content">
            {renderFilters()}
          </div>
        </div>
        
        {/* Placeholder for report content */}
        <div className="min-h-[300px] border rounded-lg p-4">
          {/* Add your report content here */}
          <p className="text-center text-gray-500">Report content will be displayed here</p>
        </div>

        <div className="card-actions justify-end mt-4">
          {renderExportButtons()}
        </div>
      </div>
    </div>
  );
}

export default ReportContent; 