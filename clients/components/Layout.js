import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Sidebar />
      </div>
        <main>{children}</main>
    </>
  )
}

export default Layout;