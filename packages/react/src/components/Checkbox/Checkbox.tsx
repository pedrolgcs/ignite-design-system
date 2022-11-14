import { Check } from 'phosphor-react'
import * as S from './Checkbox.styles'

export type CheckboxProps = S.CheckboxStyleProps & {}

function Checkbox(props: CheckboxProps) {
  return (
    <S.CheckboxContainer {...props}>
      <S.CheckboxIndicator asChild>
        <Check weight="bold" />
      </S.CheckboxIndicator>
    </S.CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'

export default Checkbox
