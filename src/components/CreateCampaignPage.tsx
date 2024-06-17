import Header from "./Header";
import CreateMessage from "./createMessage/CreateMessage";

function CreateCampaignPage() {
  return (
    <div style={{ width: "100%" }}>
      <Header title="Create a campaign" />
      <div className="create-message-container-main">
        <div className="create-message-container">
          <div className="create-message-container-left">
            <CreateMessage />
          </div>
        </div>
        <div className="create-message-container-right">Test</div>
      </div>
    </div>
  );
}

export default CreateCampaignPage;
