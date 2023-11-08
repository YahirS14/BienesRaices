import { Outlet } from 'react-router-dom';
import DataHeader from '../components/DataHeader';
import Footer from '../components/Footer';

function DataLayout() {
  return (
    <>
      <DataHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default DataLayout;
