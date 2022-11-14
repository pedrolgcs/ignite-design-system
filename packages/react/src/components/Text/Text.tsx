import * as S from './Text.styles'

export type TextProps = S.TextStyleProps & {}

function Text(props: TextProps) {
  return <S.Text {...props} />
}

Text.displayName = 'Text'

export default Text
