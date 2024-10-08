import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { MovieCard } from '../components/MovieCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/MovieCard',
  component: MovieCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onLike: fn() },
} satisfies Meta<typeof MovieCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'The Matrix',
    imageUrl: 'https://m.media-amazon.com/images/I/91+Hx3QZmLL._AC_UF894,1000_QL80_.jpg',
    description: 'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
    isLiked: false,
  },
};