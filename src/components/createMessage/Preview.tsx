import { ReactComponent as Message } from "../../img/message icon.svg";

function Preview() {
  return (
    <div className="create-message-preview-container">
      <div className="create-message-preview-title">
        <Message />
        <div className="title-small">Message Example</div>
      </div>
      <div className="create-message-preview-outline">
        <div className="create-message-preview-inner">
          <div className="create-message-preview-inner-image">
            <button
              type="button"
              className="create-message-preview-inner-btn-green create-message-preview-inner-btn-green-image"
            >
              Header
            </button>
            Test
          </div>
          <div className="create-message-preview-inner-body">
            <button
              type="button"
              className="create-message-preview-inner-btn-green"
            >
              Body
            </button>
            <div style={{ fontFamily: "SF Pro Text" }} className="text-tips">
              This is bode test
            </div>
          </div>
          <div className="create-message-preview-inner-footer">
            <button
              type="button"
              className="create-message-preview-inner-btn-green"
            >
              Footer
            </button>
            <p style={{ fontFamily: "SF Pro Text" }}>This is footer test</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
