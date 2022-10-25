import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi rerum,
          atque nemo omnis ullam molestias, minus cupiditate perspiciatis,
          accusamus placeat odit totam vitae? Eveniet velit ducimus harum
          quibusdam quia voluptate!
        </span>
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
