function Analytics() {
  return (
    <div className="min-h-screen bg-base-100 p-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Analytics</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Stock Trends</h2>
            <div className="h-64 flex items-center justify-center">
              <p className="text-base-content/60">Chart placeholder</p>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Inventory Value</h2>
            <div className="h-64 flex items-center justify-center">
              <p className="text-base-content/60">Chart placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics; 