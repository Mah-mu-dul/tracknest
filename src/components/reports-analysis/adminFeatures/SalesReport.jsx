import { Line, Pie } from 'react-chartjs-2';
import { FaCalendarAlt, FaTags, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import { ToastContainer, toast } from 'react-toastify';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';

function SalesReport({ dateRange, setDateRange, filters, setFilters, chartConfigs, renderTable }) {
  // Filter data based on selected date range
  const filterDataByDateRange = (data) => {
    if (!dateRange.start || !dateRange.end) return data;

    const startDate = new Date(dateRange.start);
    const endDate = new Date(dateRange.end);

    // Filter chart data
    const filteredChartData = data.map(chart => ({
      ...chart,
      data: {
        ...chart.data,
        datasets: chart.data.datasets.map(dataset => ({
          ...dataset,
          data: dataset.data.filter((_, index) => {
            const dataDate = new Date(2023, index); // Assuming data is monthly for 2023
            return dataDate >= startDate && dataDate <= endDate;
          })
        })),
        labels: chart.data.labels.filter((_, index) => {
          const dataDate = new Date(2023, index);
          return dataDate >= startDate && dataDate <= endDate;
        })
      }
    }));

    return filteredChartData;
  };

  // Handle date change with validation
  const handleDateChange = (date, type) => {
    if (!date) {
      setDateRange(prev => ({ ...prev, [type]: null }));
      return;
    }

    try {
      // Validate date
      if (!(date instanceof Date) || isNaN(date)) {
        toast.error('Invalid date selected', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }

      // Ensure end date is not before start date
      if (type === 'end' && dateRange.start && date < new Date(dateRange.start)) {
        toast.error('End date cannot be before start date', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }

      // Ensure start date is not after end date
      if (type === 'start' && dateRange.end && date > new Date(dateRange.end)) {
        toast.error('Start date cannot be after end date', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }

      setDateRange(prev => ({
        ...prev,
        [type]: date.toISOString().split('T')[0]
      }));

      toast.success('Date updated successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  // Filter chart data based on date range
  const filteredChartConfigs = {
    ...chartConfigs,
    sales: filterDataByDateRange(chartConfigs.sales)
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card card-bordered bg-base-200 shadow-lg p-4 sm:p-6"
    >
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mb-6">
        {/* Date Range Picker */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <FaCalendarAlt className="text-primary" />
          <div className="flex gap-2 items-center">
            <DatePicker
              selected={dateRange.start ? new Date(dateRange.start) : null}
              onChange={(date) => handleDateChange(date, 'start')}
              selectsStart
              startDate={dateRange.start ? new Date(dateRange.start) : null}
              endDate={dateRange.end ? new Date(dateRange.end) : null}
              placeholderText="Start Date"
              className="input input-bordered input-primary w-full sm:w-auto"
              dateFormat="yyyy-MM-dd"
              maxDate={new Date()}
              isClearable
              showYearDropdown
              scrollableYearDropdown
              onKeyDown={(e) => e.preventDefault()}
            />
            <span className="text-primary">to</span>
            <DatePicker
              selected={dateRange.end ? new Date(dateRange.end) : null}
              onChange={(date) => handleDateChange(date, 'end')}
              selectsEnd
              startDate={dateRange.start ? new Date(dateRange.start) : null}
              endDate={dateRange.end ? new Date(dateRange.end) : null}
              minDate={dateRange.start ? new Date(dateRange.start) : null}
              maxDate={new Date()}
              placeholderText="End Date"
              className="input input-bordered input-primary w-full sm:w-auto"
              dateFormat="yyyy-MM-dd"
              isClearable
              showYearDropdown
              scrollableYearDropdown
              onKeyDown={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
        {filteredChartConfigs.sales.map((chart, index) => (
          <div key={index} className="card bg-base-100 shadow-md p-3 sm:p-4">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">{chart.title}</h3>
            <div className="w-full" style={{maxHeight: chart.type === 'pie' ? '300px' : 'auto'}}>
              {chart.type === 'line' && (
                <Line 
                  data={chart.data} 
                  options={{ 
                    responsive: true,
                    maintainAspectRatio: true,
                    aspectRatio: window.innerWidth < 640 ? 1 : 2
                  }} 
                />
              )}
              {chart.type === 'pie' && (
                <div className="w-full max-w-[250px] mx-auto">
                  <Pie 
                    data={chart.data} 
                    options={{ 
                      responsive: true,
                      maintainAspectRatio: true
                    }} 
                  />
                </div>
              )}
            </div>
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

export default SalesReport;