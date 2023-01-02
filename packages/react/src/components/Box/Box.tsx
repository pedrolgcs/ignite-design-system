import * as React from 'react'
import * as S from './Box.styles'

export type BoxProps = S.BoxStyleProps & {}

function Box(props: BoxProps, ref: React.Ref<HTMLElement>) {
  return <S.Box {...props} ref={ref} />
}

const BoxWithRef = React.forwardRef(Box)

BoxWithRef.displayName = 'Box'

export default BoxWithRef
