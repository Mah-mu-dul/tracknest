function Reports() {
  return (
    <div className="min-h-screen bg-base-100 p-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Reports</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Inventory Report</h2>
            <p>Complete inventory status and valuation</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Generate</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Stock Movement</h2>
            <p>Track inventory movement over time</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Generate</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Low Stock Alert</h2>
            <p>Items below minimum stock level</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Generate</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports; 