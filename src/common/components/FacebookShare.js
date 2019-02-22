import React, {useEffect} from 'react'
import PropTypes from 'prop-types'

const FacebookShare = ({size = 'small', style}) => {
  useEffect(() => {
    // eslint-disable-next-line
    if (typeof FB !== 'undefined') FB.XFBML.parse()  // ensure Facebook buttons appear on page
  })

  return (
    <div
      className="fb-share-button"
      data-href="https://helsinkifoodguide.com"
      data-layout="button_count"
      data-size={size}
      data-mobile-iframe="true"
      style={style}
    >
      <a
        target="_blank" // eslint-disable-line
        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fhelsinkifoodguide.com%2F&amp;src=sdkpreparse"
        className="fb-xfbml-parse-ignore"
      >
        Share
      </a>
    </div>
  )
}

FacebookShare.propTypes = {
  size: PropTypes.string,
  style: PropTypes.object,
}

export default FacebookShare
