import type { Preview } from "@storybook/react";
import "../src/sass/main.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
        sort: "requiredFirst"
      },
    },
    backgrounds: {
      default: 'background-gray',
      values: [
        {
          name: 'background-gray',
          value: '#f5f5f5',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
      ],
    },
    options: {
      // https://storybook.js.org/docs/react/writing-stories/naming-components-and-hierarchy#sorting-stories
      storySort: (a, b) =>
        a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
  },
};

export default preview;
