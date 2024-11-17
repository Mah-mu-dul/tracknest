function EmployeeView() {
  return (
    <div className="space-y-8">
      {/* Quick Stock Update */}
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title text-primary">Quick Stock Update</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product SKU</span>
                </label>
                <input 
                  type="text" 
                  className="input input-bordered input-primary" 
                  placeholder="Scan or enter SKU"
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">New Stock Level</span>
                </label>
                <input 
                  type="number" 
                  className="input input-bordered input-accent" 
                  placeholder="Enter new stock level"
                />
              </div>
            </div>

            <div className="card-actions justify-end">
              <button type="submit" className="btn btn-accent">
                Update Stock
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Low Stock Alerts */}
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title text-primary">Low Stock Alerts</h2>
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>SKU</th>
                  <th>Product Name</th>
                  <th>Current Stock</th>
                  <th>Min Stock Level</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SKU001</td>
                  <td>Product 1</td>
                  <td>5</td>
                  <td>10</td>
                  <td><span className="badge badge-warning">Low Stock</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeView 