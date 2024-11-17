import { useState } from "react";

function AdminView({ onAddProduct, onImport, onExport }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    sku: "",
    supplier: "",
    costPrice: "",
    sellingPrice: "",
    stockQty: "",
    expiryDate: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(formData);
    // Reset form
    setFormData({
      name: "",
      category: "",
      sku: "",
      supplier: "",
      costPrice: "",
      sellingPrice: "",
      stockQty: "",
      expiryDate: ""
    });
  };

  return (
    <div className="space-y-8">
      {/* Add New Product Form */}
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title text-primary">Add New Product</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input 
                  type="text" 
                  className="input input-bordered input-accent" 
                  placeholder="Enter product name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select className="select select-bordered select-accent" value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                  <option>Electronics</option>
                  <option>Clothing</option>
                  <option>Food</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">SKU</span>
                </label>
                <input 
                  type="text" 
                  className="input input-bordered input-primary" 
                  placeholder="Enter SKU"
                  value={formData.sku}
                  onChange={(e) => setFormData({...formData, sku: e.target.value})}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <input 
                  type="text" 
                  className="input input-bordered input-primary" 
                  placeholder="Enter supplier"
                  value={formData.supplier}
                  onChange={(e) => setFormData({...formData, supplier: e.target.value})}
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Cost Price</span>
                </label>
                <input 
                  type="number" 
                  className="input input-bordered input-primary" 
                  placeholder="Enter cost price"
                  value={formData.costPrice}
                  onChange={(e) => setFormData({...formData, costPrice: e.target.value})}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Selling Price</span>
                </label>
                <input 
                  type="number" 
                  className="input input-bordered input-primary" 
                  placeholder="Enter selling price"
                  value={formData.sellingPrice}
                  onChange={(e) => setFormData({...formData, sellingPrice: e.target.value})}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Expiry Date</span>
                </label>
                <input 
                  type="date" 
                  className="input input-bordered input-primary" 
                  value={formData.expiryDate}
                  onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                />
              </div>
            </div>

            <div className="card-actions justify-end">
              <button type="submit" className="btn btn-accent">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Import/Export Section */}
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title text-primary">Import/Export</h2>
          <div className="flex gap-4 flex-wrap">
            <input type="file" className="file-input file-input-accent" />
            <button className="btn btn-primary">Import</button>
            <button className="btn btn-secondary">Export</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminView; 