/*function Signupform(){
  const signup = async event => {
    event.preventDefault() // stops automatic page redirection
    
    // Add form logic
    const res = await fetch(
      'https://hooks.zapier.com/hooks/catch/123456/abcde',
      {
        body: JSON.stringify({
          name: event.target.name.value
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    )

    const result = await res.json()
  }

  return (
    <form onSubmit={signup}>
      <label htmlFor="fullname">Full Name</label>
      <input id="fullname" name="fullname" type="text" autoComplete="name" required/>
  
      <button type="submit">Done</button>
    </form>
  )
}*/

function Signupform() {
  if (confirmPassword != password) {
    {
      alert("Passwords do not match!");
    }
  }

  const callNextForm = (e) => {
    e.preventDefault();
  };

  const submit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="formContainer">
      <div className="form signupForm">
        <form onSubmit={callNextForm}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" required />

          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" required />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />

          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" required />

          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            required
          />

          <button type="submit">next</button>
        </form>
      </div>
      <div className="form signupForm formHidden">
        <form onSubmit={submit}>
          <label htmlFor="DoB">Date of Birth</label>
          <input type="date" name="DoB" id="DoB" required />

          <label htmlFor="country">Country</label>
          {/**Find way to get country dropdown */}

          <label htmlFor="Bep20Address">Bep20 Address</label>
          <input type="text" name="bep20Address" id="bep20address" required />

          <label htmlFor="referrerCode">Referrer&apos;s Code</label>
          <input type="text" name="refCode" id="refCode" />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signupform