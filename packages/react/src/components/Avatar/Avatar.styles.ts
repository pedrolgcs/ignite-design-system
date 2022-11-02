import * as React from 'react'
import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '@/styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$12',
  height: '$12',
  overflow: 'hidden',
  border: '1px solid rgba(255, 255, 255, 0.1)',
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarFallback = styled(Avatar.AvatarFallback, {
  width: '100%',
  height: '100%',
  backgroundColor: '$gray600',
  color: '$gray800',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    width: '$6',
    height: '$6',
  },
})

export type AvatarImageStyleProps = React.ComponentProps<typeof AvatarImage>
