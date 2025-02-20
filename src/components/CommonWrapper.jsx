/* eslint-disable react/prop-types */

const CommonWrapper = ({children, className}) => {
  return (
    <div className={`max-w-[1400px] py-4 mx-auto my-auto ${className}`}>
      {children}
    </div>
  )
}

export default CommonWrapper
