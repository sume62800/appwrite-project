import React, {useId} from 'react'

const input=React.forwardRef(function input(
    {
        label,
        type="text",
        className="",
        ...props
    }
) {
    const id=useId()
    return (
      <div>
        {label && <label className={`${className}`}  htmlFor={id}>{label}</label>}
        <input type={type} {...props} className={`${className}`} ref={ref} id={id}/>
      </div>
    )
  } )

export default input
