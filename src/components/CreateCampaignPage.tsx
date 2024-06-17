import { useState } from "react";

import Header from "./Header";
import CreateMessage from "./createMessage/CreateMessage";
import Preview from "./createMessage/Preview";

function CreateCampaignPage() {
  const [image, setImage] = useState<any>();
  const [bodyText, setBodyText] = useState("");

  function handleChange(e: any) {
    setImage(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div style={{ width: "100%" }}>
      <Header title="Create a campaign" />
      <div className="create-message-container-main">
        <div className="create-message-container">
          <div className="create-message-container-left">
            {/* eslint-disable-next-line */}
            <CreateMessage bodyText={bodyText} handleImageSubmit={handleChange} setBodyText={(value: any) => setBodyText(value)} />
          </div>
          <div className="create-message-action-btn-container">
            <button
              type="button"
              className="create-message-action-btn create-message-action-btn-save"
            >
              Save
            </button>
            <button
              type="button"
              className="create-message-action-btn create-message-action-btn-delete"
            >
              Delete
            </button>
          </div>
        </div>
        <div className="create-message-container-right">
          <Preview bodyText={bodyText} image={image} />
        </div>
      </div>
    </div>
  );
}

export default CreateCampaignPage;
