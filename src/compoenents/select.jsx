import React, { useId } from "react";

function select({ label, options, className, ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="" htmlFor={id}>
          {label}
        </label>
      )}
      <select className={`${className}`} {...props} id={id} ref={ref}>
        {options?.map((options) => {
          <option key={options} value={options}>
            {options}
          </option>;
        })}
      </select>
    </div>
  );
}

export default React.forwardRef(select);
