import Header from "./Header";
import CreateMessage from "./createMessage/CreateMessage";
import Preview from "./createMessage/Preview";

function CreateCampaignPage() {
  return (
    <div style={{ width: "100%" }}>
      <Header title="Create a campaign" />
      <div className="create-message-container-main">
        <div className="create-message-container">
          <div className="create-message-container-left">
            <CreateMessage />
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
          <Preview />
        </div>
      </div>
    </div>
  );
}

export default CreateCampaignPage;
