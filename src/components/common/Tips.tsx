import { ReactComponent as FlashLight } from "../../img/FlashLight.svg";
import { ReactComponent as Close } from "../../img/Close.svg";

interface ITips {
  title: string;
  text: string;
}

function Tips({ title, text }: ITips) {
  return (
    <div className="tips-container">
      <div className="tips-title-container">
        <div className="tips-title-header">
          <FlashLight className="tips-title-flashlight" />
          <div className="text-tips">{title}</div>
        </div>
        <div style={{ cursor: "pointer" }}>
          <Close />
        </div>
      </div>
      <p>{text}</p>
      <button type="button" className="tips-learn-more">
        Learn more
      </button>
    </div>
  );
}

export default Tips;
