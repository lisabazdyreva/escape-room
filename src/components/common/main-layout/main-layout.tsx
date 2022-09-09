import { Header, Footer } from 'components/common/common';


interface IMainLayoutProps {
  children: any,
}

const MainLayout = ({ children }: IMainLayoutProps) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
