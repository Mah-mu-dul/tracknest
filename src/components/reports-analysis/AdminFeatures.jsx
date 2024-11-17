import { useState } from "react";
import { Line, Pie, Bar, Doughnut } from "react-chartjs-2";
import {
  FaChartLine,
  FaBoxes,
  FaUsers,
  FaFileExport,
  FaFilter,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTags,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import SalesReport from "./adminFeatures/SalesReport";
import StockReport from "./adminFeatures/StockReport";
import EmployeeReport from "./adminFeatures/EmployeeReport";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function AdminFeatures() {
  const [activeTab, setActiveTab] = useState("sales");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [filters, setFilters] = useState({
    category: "",
    region: "",
    employee: "",
    lowStock: false,
    outOfStock: false,
    team: "",
  });

  // Chart data configurations
  const chartConfigs = {
    sales: [
      {
        title: "Sales Trend",
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Monthly Sales",
              data: [12000, 19000, 15000, 25000, 22000, 30000],
              borderColor: "#36A2EB",
              fill: true,
              tension: 0.4,
            },
          ],
        },
      },
      {
        title: "Category Distribution",
        type: "pie",
        data: {
          labels: ["Electronics", "Clothing", "Food", "Books"],
          datasets: [
            {
              data: [30, 25, 25, 20],
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
            },
          ],
        },
      },
    ],
    stock: [
      {
        title: "Stock Level Trend",
        type: "bar",
        data: {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
          datasets: [
            {
              label: "Stock Levels",
              data: [150, 120, 90, 60],
              backgroundColor: "#4BC0C0",
            },
          ],
        },
      },
      {
        title: "Stock Status",
        type: "doughnut",
        data: {
          labels: ["In Stock", "Low Stock", "Out of Stock"],
          datasets: [
            {
              data: [70, 20, 10],
              backgroundColor: ["#4BC0C0", "#FFCE56", "#FF6384"],
            },
          ],
        },
      },
    ],
    employee: [
      {
        title: "Performance Overview",
        type: "bar",
        data: {
          labels: ["Alice", "Bob", "Charlie", "David"],
          datasets: [
            {
              label: "Sales Target Achievement (%)",
              data: [95, 88, 92, 85],
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
            },
          ],
        },
      },
    ],
  };

  // Separate table configurations for each type
  const salesTableData = {
    headers: ["Product Name", "Units Sold", "Sales Amount", "Date of Sale", "Status"],
    rows: [
      {
        productName: "iPhone 13",
        unitsSold: 50,
        salesAmount: "$50,000",
        dateOfSale: "2023-08-01",
        status: { text: "Completed", class: "badge-success" }
      },
      {
        productName: "Samsung S21",
        unitsSold: 30,
        salesAmount: "$30,000",
        dateOfSale: "2023-08-02",
        status: { text: "Pending", class: "badge-warning" }
      }
      // ... more sales rows
    ]
  };

  const stockTableData = {
    headers: ["Product Name", "SKU", "Current Stock", "Reorder Level", "Expiry Date", "Status"],
    rows: [
      {
        productName: "iPhone 13",
        sku: "IP13-128",
        currentStock: 25,
        reorderLevel: 20,
        expiryDate: "2024-12-31",
        status: { text: "Low Stock", class: "badge-warning" }
      },
      {
        productName: "Samsung S21",
        sku: "SS21-256",
        currentStock: 5,
        reorderLevel: 15,
        expiryDate: "2024-12-31",
        status: { text: "Out of Stock", class: "badge-error" }
      }
      
      // ... more stock rows
    ]
  };

  // Updated renderTable function to use the new data structure
  const renderTable = (type) => {
    const tableData = type === 'sales' ? salesTableData : stockTableData;
    
    return (
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              {tableData.headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((value, cellIndex) => (
                  <td key={cellIndex}>
                    {typeof value === 'object' && value.text ? (
                      <span className={`badge ${value.class}`}>{value.text}</span>
                    ) : (
                      value
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const handleGenerateReport = async (type) => {
    console.log(`Generating ${type} report`);
    // Implement report generation logic
  };

  const handleExport = (format) => {
    console.log(`Exporting ${activeTab} report as ${format}`);
    // Implement export logic
  };

  return (
    <div className="space-y-6">
      <div className="tabs tabs-boxed">
        <a
          className={`tab gap-2 ${
            activeTab === "sales" ? "tab-active tab-primary" : ""
          }`}
          onClick={() => setActiveTab("sales")}
        >
          <span className="md:hidden"><FaChartLine /></span>
          <span className="hidden md:inline">Sales</span>
          <span className="md:hidden">Sales</span>
        </a>
        <a
          className={`tab gap-2 ${
            activeTab === "stock" ? "tab-active tab-primary" : ""
          }`}
          onClick={() => setActiveTab("stock")}
        >
          <span className="md:hidden"><FaBoxes /></span>
          <span className="hidden md:inline">Stock Levels</span>
          <span className="md:hidden">Stock</span>
        </a>
        <a
          className={`tab gap-2 ${
            activeTab === "employee" ? "tab-active tab-primary" : ""
          }`}
          onClick={() => setActiveTab("employee")}
        >
            
          <span className="md:hidden"><FaUsers /></span>
          <span className="hidden md:inline">Employee Performance</span>
          <span className="md:hidden">Employee</span>
        </a>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn btn-primary gap-2"
        onClick={() => handleGenerateReport("all")}
      >
        <FaFileExport /> Generate All Reports
      </motion.button>

      <div className="grid grid-cols-1 gap-6">
        {activeTab === "sales" && (
          <SalesReport
            dateRange={dateRange}
            setDateRange={setDateRange}
            filters={filters}
            setFilters={setFilters}
            chartConfigs={chartConfigs}
            renderTable={() => renderTable('sales')}
          />
        )}
        {activeTab === "stock" && (
          <StockReport
            filters={filters}
            setFilters={setFilters}
            chartConfigs={chartConfigs}
            renderTable={() => renderTable('stock')}
          />
        )}
        {activeTab === "employee" && (
          <EmployeeReport chartConfigs={chartConfigs} />
        )}
      </div>

      <div className="btn-group flex flex-wrap gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary gap-2"
          onClick={() => handleExport("csv")}
        >
          <FaFileExport /> CSV
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary gap-2"
          onClick={() => handleExport("excel")}
        >
          <FaFileExport /> Excel
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-accent gap-2"
          onClick={() => handleExport("pdf")}
        >
          <FaFileExport /> PDF
        </motion.button>
      </div>
    </div>
  );
}

export default AdminFeatures;
