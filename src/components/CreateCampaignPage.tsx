import { useState } from "react";

import Header from "./Header";
import CreateMessage from "./createMessage/CreateMessage";
import Preview from "./createMessage/Preview";

function CreateCampaignPage() {
  const [image, setImage] = useState<any>();
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
            <CreateMessage handleImageSubmit={handleChange} />
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
          <Preview image={image} />
        </div>
      </div>
    </div>
  );
}

export default CreateCampaignPage;
