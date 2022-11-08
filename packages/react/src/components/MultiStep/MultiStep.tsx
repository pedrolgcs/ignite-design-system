import * as S from './MultiStep.styles'
import { Text } from '@/components'

export type MultiStepProps = {
  size: number
  currentStep?: number
}

function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <S.MultiStepContainer>
      <Text size={'xs'}>
        Passo {currentStep} de {size}
      </Text>

      <S.Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, index) => index + 1).map((step) => {
          return <S.Step key={step} active={currentStep >= step} />
        })}
      </S.Steps>
    </S.MultiStepContainer>
  )
}

export default MultiStep
