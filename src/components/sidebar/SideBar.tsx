import { ReactComponent as Logo } from "../../img/Logo.svg";
import { ReactComponent as MegaphoneIcon } from "../../img/custom megaphone icon.svg";
import { ReactComponent as MessageIcon } from "../../img/custom message icon.svg";
import { ReactComponent as Avatar } from "../../img/Avatar.svg";
import { ReactComponent as Dashboard } from "../../img/dashboard.svg";

import SideBarLink from "./SideBarLink";

function SideBar() {
  return (
    <div className="sidebar-container">
      <SideBarLink Icon={Logo} destinationPath="" />
      <SideBarLink Icon={Avatar} destinationPath="account" />
      <SideBarLink Icon={Dashboard} destinationPath="dashboard" />
      <SideBarLink Icon={MessageIcon} destinationPath="message" />
      <SideBarLink Icon={MegaphoneIcon} destinationPath="campaign" />
    </div>
  );
}
export default SideBar;
