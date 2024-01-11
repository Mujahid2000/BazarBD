import  { useContext } from 'react';
import { Container, Typography, TextField, Button, Link, Grid, Paper } from '@mui/material';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const SignInForm = () => {
    const {signIn, googleLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit =async (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    const formData = {
        email: e.target.email.value,
        password: e.target.password.value
        
    };
    try{
    await signIn(formData.email, formData.password)
    .then(result =>{
        const user = result.user
        console.log(user);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your have Successfully login",
            showConfirmButton: false,
            timer: 1500
        });
        navigate(from , {replace: true});
       
    })} catch(error){
        console.error('get an error', error)
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        });
    }
    console.log('Form submitted:', formData);
    
    };

    const handleGoogleSignIn = async () =>{
        try{
            await googleLogin();
            navigate(from , {replace: true});
        }catch(error){
            console.error('Google Sign-In Error:', error.message);
        }
    }

    return (
    <Container component="main" maxWidth="xs" sx={{marginTop: 2}}>
        <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h6" component="div" sx={{ marginBottom: 2 }}>
        SIGN IN TO OUR PLATFORM
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            
            
            />
            <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            
            
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
            </Button>
            <Grid container>
            <Grid item xs>
            <Link href="" variant="body2">
                Forgot password?
            </Link>
            </Grid>
            <Grid item>
            <Link href="/signUp" variant="body2">
                {"Don't have an account? Sign Up"}
            </Link>
            </Grid>
            </Grid>
            <Button onClick={handleGoogleSignIn}
            className="w-full mt-2 text-white p-2 rounded-md flex items-center gap-2 hover:bg-blue-600 ">
            <FaGoogle  />
            Sign in with Google
            </Button>
        </form>
        </Paper>
    </Container>
    );
};

export default SignInForm;
