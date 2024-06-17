import Tips from "../common/Tips";

function Header() {
  return (
    <>
      <select className="create-message-header-select">
        <option value="someOption">Image</option>
      </select>
      <p style={{ whiteSpace: "nowrap" }}>
        Image size recommendation: 800 x 418 pixel.
      </p>
      <button
        className="create-message-header-upload-btn button-blue-large"
        type="button"
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
