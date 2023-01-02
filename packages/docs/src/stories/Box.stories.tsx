import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text, TextInput, BoxProps } from '@pedrolgcs-ignite-ui/react';

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum,
        atque nemo omnis ullam molestias, minus cupiditate perspiciatis,
        accusamus placeat odit totam vitae? Eveniet velit ducimus harum
        quibusdam quia voluptate!
      </Text>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};

export const CustomTag: StoryObj<BoxProps> = {
  args: {
    as: 'form',
    children: <TextInput prefix="ignite.call/" placeholder='seu-usuario' />,
  },
};
