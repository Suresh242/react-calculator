import React from 'react'

export const Display = ({strToDisplay}) => {
  return (
    <div className="display">{strToDisplay ||"0.00"}</div>
  )
}
