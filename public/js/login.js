const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (!(email && password)){
      alert('Please enter information to log in.');
    }else{
      const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
          })

      if (response.ok) {
        document.location.replace('/');
      } else {
        console.log(response.ok)
        console.log(response)
        alert('Failed to log in');
      }
    }
    // if (email && password) {
    //   const response = await fetch('/api/users/login', {
    //     method: 'POST',
    //     body: JSON.stringify({ email, password }),
    //     headers: { 'Content-Type': 'application/json' },
    //   })
    // } else{
    //     // alert('Please enter information to log in.');
    //     alert('Please enter information to log in.');
    //   };
  
      // if (response.ok) {
      //   document.location.replace('/');
      // } else {
      //   console.log(response.ok)
      //   console.log(response)
      //   alert('Failed to log in');
      // }
    };

  document.getElementById('loginBtn').addEventListener('click', loginFormHandler)