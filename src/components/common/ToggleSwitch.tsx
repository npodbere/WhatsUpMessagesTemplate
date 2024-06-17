interface IToggleSwitch {
  isActive?: boolean;
  changeActiveStatus?: any;
}

function ToggleSwitch({
  isActive = true,
  changeActiveStatus = () => undefined,
}: IToggleSwitch) {
  return (
    /* eslint-disable-next-line */
        <label className="toggle-button-switch">
      <input
        type="checkbox"
        checked={isActive}
        onChange={() => undefined}
        onClick={() => changeActiveStatus(!isActive)}
      />
      <span className="toggle-button-switch-slider toggle-button-switch-slider-round" />
    </label>
  );
}

export default ToggleSwitch;
