import { Header, Footer } from 'components/common/common';
import { ICommonProps } from '../types';

const MainLayout = ({ children }: ICommonProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
