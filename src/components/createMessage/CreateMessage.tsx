import { ReactComponent as Close } from "../../img/Close.svg";
import { ReactComponent as Photo } from "../../img/photo.svg";
import { ReactComponent as Text } from "../../img/Text.svg";
import { ReactComponent as ButtonIcon } from "../../img/Btn.svg";

import CommonBlockContainer from "./CommonBlockContainer";
import CommonBlockTitle from "./CommonBlockTitle";
import Header from "./Header";
import Body from "./Body";

interface ICreateMessage {
  handleImageSubmit: any;
  bodyText: string;
  setBodyText: any;
  isHeaderActive: boolean;
  changeHeaderActiveStatus: any;
}

function CreateMessage({
  handleImageSubmit,
  bodyText,
  setBodyText,
  isHeaderActive,
  changeHeaderActiveStatus,
}: ICreateMessage) {
  return (
    <div className="create-message-container">
      <div className="create-message-title">
        <div className="title-large">Edit Message</div>
        <div style={{ cursor: "pointer" }}>
          <Close />
        </div>
      </div>
      <div className="title-small margin-bottom-very-small">Content</div>
      <CommonBlockContainer>
        <>
          <CommonBlockTitle
            Icon={Photo}
            title="Header"
            isOptional
            isActive={isHeaderActive}
            changeActiveStatus={changeHeaderActiveStatus}
          />
          {isHeaderActive && <Header handleImageSubmit={handleImageSubmit} />}
        </>
      </CommonBlockContainer>
      <br />
      <CommonBlockContainer>
        <>
          <CommonBlockTitle
            Icon={Text}
            title="Body message"
            isOptional={false}
          />
          <Body bodyText={bodyText} setBodyText={setBodyText} />
        </>
      </CommonBlockContainer>
      <br />
      <CommonBlockContainer>
        <CommonBlockTitle Icon={Text} title="Footer Text" isOptional />
      </CommonBlockContainer>
      <br />
      <CommonBlockContainer>
        <CommonBlockTitle Icon={ButtonIcon} title="Buttons" isOptional />
      </CommonBlockContainer>
    </div>
  );
}

export default CreateMessage;
