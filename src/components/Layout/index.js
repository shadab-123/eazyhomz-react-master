import { useEffect } from 'react';
import './layout.scss';
import Navbar from '../Navbar';
import Footer from '../Footer';
import GoToTop from '../GoToTop';
import Breadcrumbs from '../BreadCrumb';

const Layout = ({
  children,
}) => {

  return (
    <>
      <Navbar />
      <div className='layout-container' >
        <div className='breadcrum-language'>
          <Breadcrumbs />
        </div>

        <div className='layout' >
          {children}
        </div>
      </div>

      <GoToTop />
      <Footer />
    </>
  )
}

export default Layout;