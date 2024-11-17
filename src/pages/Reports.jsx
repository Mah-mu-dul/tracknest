import { useState } from "react";
import ReportFilters from "../components/reports-analysis/ReportFilters";
import AdminFeatures from '../components/reports-analysis/AdminFeatures';
import ManagerFeatures from '../components/reports-analysis/ManagerFeatures';
import EmployeeFeatures from '../components/reports-analysis/EmployeeFeatures';

function Reports() {
  const [currentView, setCurrentView] = useState('admin');

  const viewComponents = {
    admin: {
      title: 'Admin Reports',
      component: <AdminFeatures />
    },
    manager: {
      title: 'Manager Reports', 
      component: <ManagerFeatures />
    },
    employee: {
      title: 'Employee Reports',
      component: <EmployeeFeatures />
    }
  };

  return (
    <div className="min-h-screen bg-base-100 p-8">
      <ReportFilters 
        currentView={currentView} 
        onViewChange={setCurrentView} 
      />

      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-primary">
          {viewComponents[currentView].title}
        </h1>
        {viewComponents[currentView].component}
      </div>
    </div>
  );
}

export default Reports;