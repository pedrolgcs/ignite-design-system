import * as React from 'react'
import { styled } from '@/styles'

export const TextArea = styled('textarea', {
  minHeight: 80,
  backgroundColor: '$gray900',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  resize: 'vertical',

  '&:placeholder': {
    color: '$gray400',
  },

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export type TextAreaStyleProps = React.ComponentProps<typeof TextArea>
