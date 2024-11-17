function Integrations() {
  return (
    <div className="min-h-screen bg-base-100 p-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Integrations</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">E-commerce Platforms</h2>
            <p>Connect with popular e-commerce platforms</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Configure</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Accounting Software</h2>
            <p>Sync with your accounting system</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Configure</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">API Access</h2>
            <p>Manage API keys and access</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Configure</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Integrations; 