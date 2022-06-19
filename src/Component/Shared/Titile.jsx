import React from 'react'
import PropTypes from 'prop-types'
function Titile({title,topBorder}) {
  return (
    <div className='header_area'>
        <h2 className= {`page_title ${topBorder ? "top_border" : ""}`} >{title}</h2>
    </div>
  )
}

Titile.propTypes={
title:PropTypes.string,
topBorder:PropTypes.bool,
}
Titile.defaultProps = {
    title:"Your Title",
    topBorder:true,
}

export default Titile