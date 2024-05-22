import React from 'react';

const LoginForm = ({ onSubmit, renderErrorMessage }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <div className="forms">
      <form onSubmit={handleSubmit}>
        <div className="input-containers">
          <label className='log'>Username </label>
          <input className='logger' type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-containes">
          <label className='log'>Password </label>
          <input className='logger' type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-containers">
          <input className='logger' type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
