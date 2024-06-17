import { ReactComponent as Message } from "../../img/message icon.svg";

interface IPreview {
  image: any;
  bodyText: string;
  headerExist: boolean;
  footerText: string;
  footerExist: boolean;
  buttons: any;
}

function Preview({
  image,
  bodyText,
  headerExist,
  footerText,
  footerExist,
  buttons,
}: IPreview) {
  return (
    <div className="create-message-preview-container">
      <div className="create-message-preview-title">
        <Message />
        <div className="title-small">Message Example</div>
      </div>
      <div className="create-message-preview-outline">
        <div className="create-message-preview-inner">
          {headerExist && (
            <div className="create-message-preview-inner-image">
              <button
                type="button"
                className="create-message-preview-inner-btn-green create-message-preview-inner-btn-green-image"
              >
                Header
              </button>
              <img
                className="create-message-preview-inner-image-file"
                src={image}
                alt="Preview"
              />
            </div>
          )}
          <div className="create-message-preview-inner-body">
            <button
              type="button"
              className="create-message-preview-inner-btn-green"
            >
              Body
            </button>
            <div
              style={{ fontFamily: "SF Pro Text", overflow: "scroll" }}
              className="text-tips"
            >
              {bodyText}
            </div>
          </div>
          {footerExist && (
            <div className="create-message-preview-inner-footer">
              <button
                type="button"
                className="create-message-preview-inner-btn-green"
              >
                Footer
              </button>
              <p style={{ fontFamily: "SF Pro Text", overflow: "scroll" }}>
                {footerText}
              </p>
            </div>
          )}
        </div>
        <div className="create-message-preview-btn-container">
          {buttons.map((button: any) => {
            if (button.payload !== "") {
              return (
                <button
                  className="create-message-preview-btn button-blue-small"
                  type="button"
                >
                  {button.name}
                </button>
              );
            }
            /* eslint-disable-next-line */
            return <></>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Preview;
