import { FC } from 'react';
import Header from '@/components/organisms/header';
import Footer from '@/components/molecules/footer';

import styles from './layout.module.css';

const Layout: FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
