import NavMenu from "./NavMenu";
import LeftHeaderContent from "./LeftHeaderContent";

const Header = () => {
  return (
    <header>
      <div className="left-header">
        <LeftHeaderContent />
      </div>
      <div className="right-header">
        <NavMenu />
      </div>
    </header>
  );
};

export default Header;
