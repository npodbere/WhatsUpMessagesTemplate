import type { Meta, ReactRenderer, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import type { PartialStoryFn } from "@storybook/types";

import SideBar from "../SideBar";

const meta = {
  component: SideBar,
  decorators: [
    (Story: PartialStoryFn<ReactRenderer>): JSX.Element => (
      <BrowserRouter>
        <div style={{ display: "flex", height: "100vh" }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
  title: "sidebar/SideBar",
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const initialRendering: Story = {};
