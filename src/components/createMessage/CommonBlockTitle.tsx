import { ReactComponent as Vector } from "../../img/Vector.svg";

interface ICommonBlockTitle {
  Icon: any;
  title: string;
}

function CommonBlockTitle({ Icon, title }: ICommonBlockTitle) {
  return (
    <div className="create-message-header-title">
      <Icon />
      <div className="title-small">{title}</div>
      <Vector />
    </div>
  );
}

export default CommonBlockTitle;
