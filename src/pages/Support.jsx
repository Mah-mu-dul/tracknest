function Support() {
  return (
    <div className="min-h-screen bg-base-100 p-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Support</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Contact Support</h2>
            <form className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input type="text" className="input input-bordered" />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea className="textarea textarea-bordered h-24"></textarea>
              </div>
              
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>

        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Documentation</h2>
            <div className="space-y-4">
              <button className="btn btn-outline w-full">User Guide</button>
              <button className="btn btn-outline w-full">API Documentation</button>
              <button className="btn btn-outline w-full">FAQs</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support; 