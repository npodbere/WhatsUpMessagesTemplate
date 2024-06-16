import type { Meta, ReactRenderer, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import type { PartialStoryFn } from "@storybook/types";

import { ReactComponent as Dashboard } from "../../../img/dashboard.svg";
import SideBarLink from "../SideBarLink";

const meta = {
  component: SideBarLink,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer>): JSX.Element => (
      <BrowserRouter>
        <div style={{ backgroundColor: "#000" }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
  title: "sidebar/SideBarLink",
} satisfies Meta<typeof SideBarLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const initialRendering: Story = {
  args: {
    Icon: Dashboard,
    destinationPath: "dashboard",
  },
};
