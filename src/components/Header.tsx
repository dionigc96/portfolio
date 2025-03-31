import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header>
      <div className="left-header">
        <span className="left-header-content">Computer engineer</span>
      </div>
      <div className="right-header">
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
