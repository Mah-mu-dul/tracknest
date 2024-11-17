import { useState, useEffect } from "react";
import AdminView from "../components/productmanagement/AdminView";
import ManagerView from "../components/productmanagement/ManagerView";
import EmployeeView from "../components/productmanagement/EmployeeView";
import ProductTable from "../components/productmanagement/ProductTable";

function ProductManagement() {
  const [userView, setUserView] = useState("employee");
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  // Add search handler
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Implement search logic here
  };

  return (
    <div className="min-h-screen bg-base-100 p-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-6">
          Product Management System
        </h1>
        
        {/* View Toggle Buttons */}
        <div className="btn-group">
          <button 
            className={`btn ${userView === "admin" ? "btn-primary" : "btn-ghost"}`}
            onClick={() => setUserView("admin")}
          >
            Admin
          </button>
          <button 
            className={`btn ${userView === "manager" ? "btn-secondary" : "btn-ghost"}`}
            onClick={() => setUserView("manager")}
          >
            Manager
          </button>
          <button 
            className={`btn ${userView === "employee" ? "btn-accent" : "btn-ghost"}`}
            onClick={() => setUserView("employee")}
          >
            Employee
          </button>
        </div>
      </div>

      {/* Updated Search Bar */}
      <div className="form-control w-full max-w-xs mx-auto mb-8">
        <input 
          type="text" 
          placeholder="Search products..." 
          className="input input-bordered w-full" 
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Main Content */}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          {/* Common Product Table */}
          <ProductTable />

          {/* User-specific Views */}
          <div className="mt-8">
            {userView === "admin" && <AdminView />}
            {userView === "manager" && <ManagerView />}
            {userView === "employee" && <EmployeeView />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductManagement; 