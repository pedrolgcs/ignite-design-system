import { User } from 'phosphor-react'
import * as S from './Avatar.styles'

export type AvatarProps = S.AvatarImageStyleProps & {}

function Avatar(props: AvatarProps) {
  return (
    <S.AvatarContainer>
      <S.AvatarImage {...props} />

      <S.AvatarFallback delayMs={600}>
        <User />
      </S.AvatarFallback>
    </S.AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'

export default Avatar
