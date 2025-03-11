import "./Layout.css";
import Footer from "./footer/Footer";
import Header from "./header/header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;