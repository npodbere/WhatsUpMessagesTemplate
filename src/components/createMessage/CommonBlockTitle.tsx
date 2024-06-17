import { ReactComponent as Vector } from "../../img/Vector.svg";
import ToggleSwitch from "../common/ToggleSwitch";

interface ICommonBlockTitle {
  Icon: any;
  title: string;
  isOptional: boolean;
  isActive?: boolean;
  changeActiveStatus?: any;
}

function CommonBlockTitle({
  Icon,
  title,
  isOptional,
  isActive,
  changeActiveStatus,
}: ICommonBlockTitle) {
  return (
    <div className="create-message-header-title-container">
      <div className="create-message-header-title">
        <Icon />
        <div className="title-small">{title}</div>
        <Vector />
      </div>
      {isOptional ? (
        <ToggleSwitch
          isActive={isActive}
          changeActiveStatus={changeActiveStatus}
        />
      ) : (
        <div className="create-message-header-title-required">Required</div>
      )}
    </div>
  );
}

CommonBlockTitle.defaultProps = {
  changeActiveStatus: () => undefined,
  isActive: true,
};

export default CommonBlockTitle;
