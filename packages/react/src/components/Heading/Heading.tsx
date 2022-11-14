import * as S from './Heading.styles'

export type HeadingProps = S.HeadingStyleProps & {}

function Heading(props: HeadingProps) {
  return <S.Heading {...props} />
}

Heading.displayName = 'Heading'

export default Heading
