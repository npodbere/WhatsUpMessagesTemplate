import { NavLink } from "react-router-dom";

interface ISideBarLink {
  Icon: any;
  destinationPath: string;
}

function SideBarLink({ Icon, destinationPath }: ISideBarLink) {
  return (
    <div className="sidebar-link-container">
      <NavLink
        to={`/${destinationPath}`}
        className={({ isActive }) => {
          return `sidebar-link${isActive ? " sidebar-link-selected" : ""}`;
        }}
      >
        <Icon />
      </NavLink>
    </div>
  );
}

export default SideBarLink;
