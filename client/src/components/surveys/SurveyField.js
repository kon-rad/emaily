import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {

  return (
    <div>
      <label htmlFor={input.name}>{label}</label>
      <input {...input} />
      <div className="red-text" style={{ marginBottom: '20px'}}>
        {touched && error}
      </div>
    </div>
  )
}

