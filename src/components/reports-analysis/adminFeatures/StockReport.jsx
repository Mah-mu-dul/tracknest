import { Bar, Doughnut } from 'react-chartjs-2';
import { 
  FaFilter, 
  FaMapMarkerAlt,
  FaTags,
  FaBoxes 
} from 'react-icons/fa';
import { motion } from 'framer-motion';

function StockReport({ filters, setFilters, chartConfigs, renderTable }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card card-bordered bg-base-200 shadow-lg p-4 sm:p-6"
    >
      {/* Filter Controls */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div className="form-control">
          <label className="label cursor-pointer gap-2">
            <FaTags className="text-primary" />
            <span className="label-text">Category</span>
            <select 
              className="select select-bordered select-sm"
              value={filters.category}
              onChange={(e) => setFilters(prev => ({...prev, category: e.target.value}))}
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="food">Food</option>
            </select>
          </label>
        </div>

        <div className="form-control">
          <label className="label cursor-pointer gap-2">
            <FaMapMarkerAlt className="text-primary" />
            <span className="label-text">Region</span>
            <select
              className="select select-bordered select-sm"
              value={filters.region}
              onChange={(e) => setFilters(prev => ({...prev, region: e.target.value}))}
            >
              <option value="">All Regions</option>
              <option value="north">North</option>
              <option value="south">South</option>
              <option value="east">East</option>
              <option value="west">West</option>
            </select>
          </label>
        </div>

        <label className="label cursor-pointer gap-2">
          <FaBoxes className="text-primary" />
          <span className="label-text">Stock Status</span>
          <div className="flex gap-2">
            <label className="cursor-pointer label gap-1">
              <span className="label-text">Low</span>
              <input 
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm"
                checked={filters.lowStock}
                onChange={(e) => setFilters(prev => ({...prev, lowStock: e.target.checked}))}
              />
            </label>
            <label className="cursor-pointer label gap-1">
              <span className="label-text">Out</span>
              <input 
                type="checkbox"
                className="checkbox checkbox-primary checkbox-sm"
                checked={filters.outOfStock}
                onChange={(e) => setFilters(prev => ({...prev, outOfStock: e.target.checked}))}
              />
            </label>
          </div>
        </label>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        {chartConfigs.stock.map((chart, index) => (
          <div key={index} className="card bg-base-100 shadow-md p-3 sm:p-4">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{chart.title}</h3>
            {chart.type === 'bar' && (
              <Bar 
                data={chart.data}
                options={{
                  responsive: true,
                  maintainAspectRatio: true,
                  plugins: {
                    legend: {
                      position: 'bottom'
                    }
                  }
                }}
              />
            )}
            {chart.type === 'doughnut' && (
              <div className="w-full max-w-[384px] mx-auto">
                <Doughnut 
                  data={chart.data}
                  options={{
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                      legend: {
                        position: 'bottom'
                      }
                    }
                  }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        {renderTable()}
      </div>
    </motion.div>
  );
}

export default StockReport;