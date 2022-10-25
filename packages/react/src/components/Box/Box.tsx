import * as React from 'react'
import * as S from './Box.styles'

export type BoxProps = React.ComponentProps<typeof S.Box> & {}

function Box(props: BoxProps) {
  return <S.Box {...props} />
}

export default Box
