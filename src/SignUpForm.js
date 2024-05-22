import React from 'react';

const SignUpForm = ({ onSignUp }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newUser = {
      username: formData.get('uname'),
      password: formData.get('pass')
    };
    onSignUp(newUser);
  };

  return (
    <div className="forms">
      <form onSubmit={handleSubmit}>
        <div className="input-containers">
          <label className='log'>New Username </label>
          <input className='logger' type="text" name="uname" required />
        </div>
        <div className="input-containes">
          <label className='log'>New Password </label>
          <input className='logger' type="password" name="pass" required />
        </div>
        <div className="button-containers">
          <input className='logger' type="submit" value="Create Account" />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
