import React from 'react';

export const SignUpForm = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleUserRegister = (e) => {
    
    console.log(formData);

    // Add user registration logic here
    const baseURL = 'http://localhost:3000/api/auth';
    fetch(`${baseURL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <form>
      {/* Sign-in form implementation */}
        <input value={formData.firstName} type="text" placeholder="First Name" onChange={() => handleChange({ target: { name: 'firstName', value: formData.firstName } })}/>
        <input value={formData.lastName} type="text" placeholder="Last Name" onChange={() => handleChange({ target: { name: 'lastName', value: formData.lastName } })}/>
        <input value={formData.email} type="email" placeholder="Email" onChange={() => handleChange({ target: { name: 'email', value: formData.email } })}/>
        <input value={formData.password} type="password" placeholder="Password" onChange={() => handleChange({ target: { name: 'password', value: formData.password } })}/>
        <button type="submit" onClick={handleUserRegister}>Create Account</button>
    </form>
  );
}