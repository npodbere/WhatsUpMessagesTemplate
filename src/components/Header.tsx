import { ReactComponent as Close } from "../img/Close.svg";
import { ReactComponent as FlashLight } from "../img/FlashLight.svg";

interface IHeader {
  title: string;
}

function Header({ title }: IHeader) {
  return (
    <div className="header-container">
      <div className="title-small">{title}</div>
      <div className="header-right-container">
        <div className="header-tips-container">
          <FlashLight />
          <div className="button-blue-small">Tips</div>
        </div>
        <div style={{ cursor: "pointer" }}>
          <Close />
        </div>
      </div>
    </div>
  );
}

export default Header;
