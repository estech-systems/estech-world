import React, { useState } from "react"
import "./readmore.css"

const ReadMore = ({ text, maxLines = 3 }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="read-more-container">
      <div className={`read-more-text ${isExpanded ? "expanded" : "collapsed"}`}>
        {text}
      </div>
      <button className="read-more-btn" onClick={toggleReadMore}>
        {isExpanded ? "See Less" : "See More"}
      </button>
    </div>
  )
}

export default ReadMore
