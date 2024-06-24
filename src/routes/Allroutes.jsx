import { Routes, Route } from 'react-router-dom';
import { HomePage, ProductDetail, ProductsList } from '../pages';
import DashboardPage from '../pages/Dashboard/DashboardPage';

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/dashboard" element={<DashboardPage/>}/> 
      </Routes>
    </>
  );
};
