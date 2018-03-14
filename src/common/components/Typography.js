import styled from 'styled-components'

import {HEADING_FONT} from '../styles/fonts'
import {White} from '../styles/colors'
import {MOBILE_MAX_WIDTH} from '../styles/responsive'

export const Heading = styled.h2`
  color: ${White.LIGHT};
  font-family: ${HEADING_FONT};
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
  line-height: 55px;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    font-size: 24px;
    line-height: 36px;
  }
`
