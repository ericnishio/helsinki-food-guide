import styled from 'styled-components'

import {HEADING_FONT} from '../styles/fonts'
import {White} from '../styles/colors'
import {TABLET_MIN_WIDTH} from '../styles/responsive'

export const Heading = styled.h2`
  color: ${White.LIGHT};
  font-family: ${HEADING_FONT};
  font-size: 42px;
  font-weight: 400;
  font-style: normal;
  line-height: 55px;

  @media (max-width: ${TABLET_MIN_WIDTH}) {
    font-size: 24px;
    line-height: 32px;
  }
`
