interface IToggleSwitch {
  isActive?: boolean;
  changeActiveStatus?: any;
}

function ToggleSwitch({ isActive, changeActiveStatus }: IToggleSwitch) {
  return (
    /* eslint-disable-next-line */
        <label className="toggle-button-switch">
      <input
        type="checkbox"
        checked={isActive}
        onClick={() => changeActiveStatus(!isActive)}
      />
      <span className="toggle-button-switch-slider toggle-button-switch-slider-round" />
    </label>
  );
}

ToggleSwitch.defaultProps = {
  changeActiveStatus: () => undefined,
  isActive: true,
};

export default ToggleSwitch;
