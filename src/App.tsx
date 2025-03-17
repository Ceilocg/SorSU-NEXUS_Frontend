import React from "react";
import { BrowserRouter} from 'react-router-dom';
import Layout from "./layout/Layout";
import "admin-lte/dist/css/adminlte.min.css"; 
import "./index.css"; 

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-maroon">Welcome to the Admin Dashboard</h2>
      <p className="text-gray-600">Manage your site from here.</p>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Dashboard />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
