import { useState } from "react";

import Header from "./Header";
import CreateMessage from "./createMessage/CreateMessage";
import Preview from "./createMessage/Preview";

function CreateCampaignPage() {
  const [image, setImage] = useState<any>(null);
  const [bodyText, setBodyText] = useState("");
  const [footerText, setFooterText] = useState("");

  const [headerExist, setHeaderExist] = useState(true);
  const [footerExist, setFooterExist] = useState(false);

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
            <CreateMessage bodyText={bodyText} handleImageSubmit={handleChange}
              setBodyText={(value: string) => setBodyText(value)}
              isHeaderActive={headerExist}
              changeHeaderActiveStatus={(value: boolean) =>
                setHeaderExist(value)
              }
              isFooterActive={footerExist}
              changeFooterActiveStatus={(value: boolean) =>
                setFooterExist(value)
              }
              footerText={footerText}
              setFooterText={(value: string) => setFooterText(value)}
            />
          </div>
          <div className="create-message-action-btn-container">
            <button
              type="button"
              className="create-message-action-btn create-message-action-btn-save"
              onClick={() => {
                // Prepare body of the POST to send to whatsUp
                const components = [];
                components.push({
                  parameters: [
                    {
                      text: "TEXT_STRING",
                      type: "text",
                    },
                  ],
                  type: "body",
                });
                if (headerExist) {
                  components.push({
                    parameters: [
                      {
                        image: {
                          id: "", // Here will be a link that we receieve after uploading image to whatsUp
                        },
                        type: "image",
                      },
                    ],
                    type: "header",
                  });
                }
                if (footerExist) {
                  components.push({
                    parameters: [
                      {
                        text: "TEXT_STRING",
                        type: "text",
                      },
                    ],
                    type: "footer",
                  });
                }
                console.log(components);
              }}
            >
              Save
            </button>
            <button
              type="button"
              className="create-message-action-btn create-message-action-btn-delete"
              onClick={() => {
                setImage(null);
                setBodyText("");
              }}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="create-message-container-right">
          <Preview
            bodyText={bodyText}
            image={image}
            headerExist={headerExist}
            footerText={footerText}
            footerExist={footerExist}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateCampaignPage;
