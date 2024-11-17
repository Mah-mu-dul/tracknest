import { Bar } from 'react-chartjs-2';
import { FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';

function EmployeeReport({ chartConfigs }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card card-bordered bg-base-200 shadow-lg p-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Charts */}
        {chartConfigs.employee.map((chart, index) => (
          <div key={index} className="card bg-base-100 shadow-md p-4">
            <h3 className="text-lg font-semibold mb-4">{chart.title}</h3>
            {chart.type === 'bar' && <Bar data={chart.data} options={{ responsive: true }} />}
          </div>
        ))}

        {/* Top Performers Card */}
        <div className="card bg-base-100 shadow-md p-4">
          <h3 className="text-lg font-semibold mb-4">Top Performers</h3>
          <div className="space-y-4">
            {['Alice', 'Bob', 'Charlie'].map(name => (
              <div key={name} className="flex items-center justify-between p-2 bg-base-200 rounded">
                <div className="flex items-center gap-2">
                  <FaUsers className="text-primary" />
                  <span>{name}</span>
                </div>
                <span className="badge badge-primary">95% Target</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default EmployeeReport; 