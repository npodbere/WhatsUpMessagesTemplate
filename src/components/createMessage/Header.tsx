import { useRef } from "react";

import Tips from "../common/Tips";

interface IHeader {
  handleImageSubmit: any;
}

function Header({ handleImageSubmit }: IHeader) {
  const fileUpload = useRef<any>(null);
  return (
    <>
      <select className="create-message-header-select">
        <option value="someOption">Image</option>
      </select>
      <p style={{ whiteSpace: "nowrap" }}>
        Image size recommendation: 800 x 418 pixel.
      </p>
      <input
        type="file"
        style={{ display: "None" }}
        ref={fileUpload}
        id="file"
        onChange={handleImageSubmit}
      />
      <button
        className="create-message-header-upload-btn button-blue-large"
        type="button"
        onClick={() => {
          if (fileUpload.current) {
            fileUpload.current.click();
          }
        }}
      >
        Upload Image
      </button>
      <Tips
        title="Image header tips"
        text="Images can enrich the message experience and help maintain engagement. Use eye-catching images that summarize the message (eg discounts, gifts etc.)"
      />
    </>
  );
}

export default Header;
