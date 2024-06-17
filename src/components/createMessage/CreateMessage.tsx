import { ReactComponent as Close } from "../../img/Close.svg";
import { ReactComponent as Photo } from "../../img/photo.svg";
import { ReactComponent as Text } from "../../img/Text.svg";
import { ReactComponent as ButtonIcon } from "../../img/Btn.svg";
import { ReactComponent as Trash } from "../../img/delete.svg";

import CommonBlockContainer from "./CommonBlockContainer";
import CommonBlockTitle from "./CommonBlockTitle";
import Header from "./Header";
import Body from "./Body";
import { IButtons } from "./Preview";

interface ICreateMessage {
  handleImageSubmit: any;
  bodyText: string;
  setBodyText: any;
  isHeaderActive: boolean;
  changeHeaderActiveStatus: any;
  isFooterActive: boolean;
  changeFooterActiveStatus: any;
  footerText: string;
  setFooterText: any;
  isButtonsActive: boolean;
  changeButtonsActiveStatus: any;
  buttons: IButtons[];
  setButtons: any;
}

function CreateMessage({
  handleImageSubmit,
  bodyText,
  setBodyText,
  isHeaderActive,
  changeHeaderActiveStatus,
  changeFooterActiveStatus,
  isFooterActive,
  footerText,
  setFooterText,
  isButtonsActive,
  changeButtonsActiveStatus,
  buttons,
  setButtons,
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
        <CommonBlockTitle
          Icon={Text}
          title="Footer Text"
          isOptional
          isActive={isFooterActive}
          changeActiveStatus={changeFooterActiveStatus}
        />
        {isFooterActive && (
          <input
            type="text"
            maxLength={25}
            className="text-tips create-message-text"
            placeholder="Enter Text"
            value={footerText}
            onChange={(event) => setFooterText(event.target.value)}
          />
        )}
      </CommonBlockContainer>
      <br />
      <CommonBlockContainer>
        <CommonBlockTitle
          Icon={ButtonIcon}
          title="Buttons"
          isOptional
          isActive={isButtonsActive}
          changeActiveStatus={changeButtonsActiveStatus}
        />
        {isButtonsActive &&
          buttons.map((button: IButtons) => {
            return (
              <div key={`${button.name}`}>
                <div className="create-message-buttons">
                  <div className="text-tips">{button.name}</div>
                  <div style={{ cursor: "pointer" }}>
                    <Trash />
                  </div>
                </div>
                <input
                  type="text"
                  maxLength={25}
                  className="text-tips create-message-text"
                  placeholder="Enter Text"
                  value={button.payload}
                  onChange={(event) => setButtons(event.target.value, button)}
                />
              </div>
            );
          })}
      </CommonBlockContainer>
    </div>
  );
}

export default CreateMessage;
