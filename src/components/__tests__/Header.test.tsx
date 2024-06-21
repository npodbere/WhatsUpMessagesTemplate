import { create } from "react-test-renderer";
import { composeStories } from "@storybook/react";

import * as HeaderStories from "../stories/Header.stories";

const { InitialRendering } = composeStories(HeaderStories);

test("initial rendering of the header", async () => {
  const tree = create(<InitialRendering />);

  expect(tree).toMatchSnapshot();
});
