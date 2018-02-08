import styled from 'styled-components'

import {TABLET_MIN_WIDTH} from '../styles/responsive'

const GUTTER = '20px'

export const Content = styled.div`
  margin-left: ${GUTTER}; margin-right: ${GUTTER};

  @media (min-width: ${TABLET_MIN_WIDTH}) {
    width: 1200px;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
