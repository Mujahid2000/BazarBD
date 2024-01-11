import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const SignUpForm = () => {
    const {createUser, user, handleUpdateProfile, setLoading} = useContext(AuthContext)
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';



  const handleSubmit =async (e) => {
    e.preventDefault();
    // Basic form validation
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      photoURL: e.target.photoURL.value
    };
    try {
    if (formData.password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
  }
  await  createUser(formData.email, formData.password)
  await  handleUpdateProfile(formData.name, formData.photoURL)
  
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your have Successfully login",
    showConfirmButton: false,
    timer: 1500
});
    setLoading(false)
    navigate(from , {replace: true});

  }catch(error) {
    console.error("Signup Error:", error.message);
    setLoading(false);
  }}

  return (
    <div className='max-w-lg shadow-lg border py-9 px-6 rounded-xl mt-32 mx-auto bg-slate-50'>
      <h2 className='text-center text-3xl text-sky-500 font-bold'>SIGN UP</h2>
      <form onSubmit={handleSubmit} className=''>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          required
          
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          required
          
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          name="password"
          required
          
        />
        <TextField
          label="PhotoURL"
          variant="outlined"
          fullWidth
          margin="normal"
          type="text"
          required
          name="photoURL"
          
        />
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
        <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
          <Grid item>
            <Typography variant="body1">
              Already have an account?{' '}
              <Link to="/signIn" style={{ textDecoration: 'underline', color: '#1F75FE' }}>
                Sign In
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default SignUpForm;