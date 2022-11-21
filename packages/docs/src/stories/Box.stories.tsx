import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, BoxProps } from '@ignite-ui/react'

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
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
