import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export const FadeIn = styled.div`
  animation: ${fadeIn} ${props => props.duration || 0.8}s;
`
