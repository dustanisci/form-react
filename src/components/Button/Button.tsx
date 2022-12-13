import { useState } from 'react'
import { ButtonContainer, Loader, StyleButton, Tooltip } from './Button.style'
import LoadingGif from './../../assets/img/loading.gif'

interface IProps {
  id: string
  label: string
  loading: boolean
  tooltipLabel: string
}

export function Button({
  id,
  label,
  loading,
  tooltipLabel
}: IProps) {
  const [showTooltip, setShowTooltip] = useState<boolean>(false)

  return (<>
    <ButtonContainer>
      {showTooltip && <Tooltip>{tooltipLabel}</Tooltip>}
      {!loading && (
        <StyleButton
          type='submit'
          data-testid={id}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {label}
        </StyleButton>
      )}
      {loading && <Loader alt='Carregando' src={LoadingGif} />}
    </ButtonContainer>
  </>)
}