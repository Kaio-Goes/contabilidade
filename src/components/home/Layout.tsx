import { ReactNode } from 'react';
import { NextPage } from 'next';

import Header from '../home/Header';
import Footer from '../home/Footer';

interface Props {
  children: ReactNode;
}

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
