function ManagerView() {
  return (
    <div className="space-y-8">
      {/* Stock Management Section */}
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title text-primary">Stock Management</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product SKU</span>
                </label>
                <input 
                  type="text" 
                  className="input input-bordered input-primary" 
                  placeholder="Enter SKU"
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity Adjustment</span>
                </label>
                <input 
                  type="number" 
                  className="input input-bordered input-secondary" 
                  placeholder="Enter quantity"
                />
              </div>
            </div>

            <div className="card-actions justify-end">
              <button type="submit" className="btn btn-secondary">
                Update Stock
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Reports Section */}
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title text-primary">Reports</h2>
          <div className="flex gap-4 flex-wrap">
            <button className="btn btn-outline">Stock Report</button>
            <button className="btn btn-outline">Low Stock Alert</button>
            <button className="btn btn-outline">Expiry Report</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManagerView; 