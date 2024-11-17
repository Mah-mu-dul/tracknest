import { Bar, Doughnut } from 'react-chartjs-2';
import { FaFilter } from 'react-icons/fa';
import { motion } from 'framer-motion';

function StockReport({ filters, setFilters, chartConfigs, renderTable }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card card-bordered bg-base-200 shadow-lg p-4 sm:p-6"
    >
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mb-4 sm:mb-6">
        {/* Filter Controls */}
        <label className="flex items-center gap-2 cursor-pointer">
          <FaFilter className="text-primary" />
          <span className="label-text text-sm sm:text-base">Low Stock</span>
          <input 
            type="checkbox" 
            className="checkbox checkbox-primary checkbox-sm sm:checkbox-md"
            checked={filters.lowStock}
            onChange={(e) => setFilters(prev => ({...prev, lowStock: e.target.checked}))}
          />
        </label>
        {/* ... existing filter controls ... */}
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
                  aspectRatio: window.innerWidth < 640 ? 1 : 2
                }} 
              />
            )}
            {chart.type === 'doughnut' && (
              <div className="w-full max-w-[384px] mx-auto">
                <Doughnut 
                  data={chart.data} 
                  options={{ 
                    responsive: true,
                    maintainAspectRatio: true
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