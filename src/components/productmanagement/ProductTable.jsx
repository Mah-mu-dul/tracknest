function ProductTable({ products = [], userView, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>SKU</th>
            <th>Supplier</th>
            <th>Cost Price</th>
            <th>Selling Price</th>
            <th>Stock Qty</th>
            <th>Expiry Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.sku}</td>
                <td>{product.supplier}</td>
                <td>${product.costPrice}</td>
                <td>${product.sellingPrice}</td>
                <td>{product.stockQty}</td>
                <td>{product.expiryDate}</td>
                <td className="flex gap-2">
                  {(userView === "admin" || userView === "manager") && (
                    <>
                      <button 
                        className="btn btn-warning btn-sm"
                        onClick={() => onEdit(product)}
                      >
                        Edit
                      </button>
                      {userView === "admin" && (
                        <button 
                          className="btn btn-error btn-sm"
                          onClick={() => onDelete(product.id)}
                        >
                          Delete
                        </button>
                      )}
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="text-center">No products found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable; 