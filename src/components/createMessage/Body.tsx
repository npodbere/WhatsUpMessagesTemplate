import Tips from "../common/Tips";
import { ReactComponent as Frame } from "../../img/Frame 1033.svg";

interface IBody {
  bodyText: string;
  setBodyText: any;
}

function Body({ bodyText, setBodyText }: IBody) {
  return (
    <>
      <textarea
        className="create-message-body-text text-tips"
        rows={6}
        cols={32}
        value={bodyText}
        onChange={(event) => setBodyText(event.target.value)}
      />
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
