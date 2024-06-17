import Tips from "../common/Tips";
import { ReactComponent as Frame } from "../../img/Frame 1033.svg";

function Body() {
  return (
    <>
      <textarea className="create-message-body-text" rows={4} cols={35} />
      <Frame />
      <div className="margin-bottom-very-small" />
      <Tips
        title="What are variables?"
        text="Variables are dynamic content that help personalize your campaign, for example: customer names or coupon codes."
      />
    </>
  );
}

export default Body;
