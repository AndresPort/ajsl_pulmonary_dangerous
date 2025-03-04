import "./Layout.css";
import Header from "./header/header";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout-content">{children}</main>
    </div>
  );
};

export default Layout;