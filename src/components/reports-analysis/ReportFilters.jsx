function ReportFilters({ currentView, onViewChange }) {
  return (
    <div className="flex items-center space-x-4 mb-8">
      <label className="label">Select View:</label>
      <select 
        className="select select-bordered w-48"
        value={currentView}
        onChange={(e) => onViewChange(e.target.value)}
      >
        <option value="admin">Admin View</option>
        <option value="manager">Manager View</option>
        <option value="employee">Employee View</option>
      </select>
    </div>
  );
}

export default ReportFilters; 