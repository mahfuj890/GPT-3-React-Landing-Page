import React from 'react'
import PropTypes from 'prop-types'
function Titile({title,topBorder,fontSize}) {
  return (
    <div className='header_area'>
        <h2 className= {`page_title ${topBorder ? "top_border" : ""} ${fontSize ? "features_titlie" : ""}`} >{title}</h2>
    </div>
  )
}

Titile.propTypes={
title:PropTypes.string,
topBorder:PropTypes.bool,
fontSize:PropTypes.bool,
}
Titile.defaultProps = {
    title:"Your Title",
    topBorder:true,
    fontSize:false,
}

export default Titile