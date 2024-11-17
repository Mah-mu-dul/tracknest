import React from "react";

function Dashboard() {
  return (
    <div className="min-h-screen bg-base-100 p-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="stat bg-base-200 rounded-lg shadow">
          <div className="stat-title">Total Products</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        
        <div className="stat bg-base-200 rounded-lg shadow">
          <div className="stat-title">Low Stock Items</div>
          <div className="stat-value text-warning">4</div>
          <div className="stat-desc">Requires attention</div>
        </div>
        
        <div className="stat bg-base-200 rounded-lg shadow">
          <div className="stat-title">Out of Stock</div>
          <div className="stat-value text-error">7</div>
          <div className="stat-desc">Immediate action needed</div>
        </div>
        
        <div className="stat bg-base-200 rounded-lg shadow">
          <div className="stat-title">Total Value</div>
          <div className="stat-value text-success">$89,400</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
