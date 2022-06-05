import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  createTheme,
  CssBaseline,
  Divider,
  Fab,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  InputLabel,
  Input,
  FormHelperText,
  FormControl,
} from '@mui/material';
import type { NextPage } from 'next';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Head from 'next/head';

import MyButton from '@/components/MyButton';
import { Copyright, GitHub, Google } from '@mui/icons-material';
import { border, borderRadius, flexbox } from '@mui/system';

import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';

import { auth } from './base';

const Login: NextPage = () => {
  const theme = createTheme();

  const signInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => console.log(res))
      .catch((err) => console.log(err.code))
      .finally(() => console.log('nothing'));
  };

  const signInWithGithub = () => {
    signInWithPopup(auth, new GithubAuthProvider())
      .then((res) => console.log(res))
      .catch((err) => console.log(err.code))
      .finally(() => console.log('nothing'));
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div
          style={{
            backgroundColor: '#4D9EFE',
            backgroundImage: 'url(./LoginImg/bbOut.png)',
            height: '100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid
            container
            component='main'
            sx={{
              width: '65%',
              height: '85%',
            }}
          >
            {/* <CssBaseline /> */}
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: 'url(./LoginImg/Group58.png)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                  t.palette.mode === 'light'
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: 'contain',
                backgroundPosition: 'center',
              }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <div>
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    margin: '20px 20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    component='img'
                    sx={{
                      height: 233,
                      width: 350,
                      maxHeight: { xs: 250, md: 50 },
                      maxWidth: { xs: 370, md: 50 },
                    }}
                    alt='The house from the offer.'
                    src='./LoginImg/logo.png'
                    style={{ marginRight: '10px' }}
                  />
                  <Box
                    component='img'
                    // sx={{
                    //   height: 233,
                    //   width: 350,
                    //   maxHeight: { xs: 250, md: 20 },
                    //   maxWidth: { xs: 370, md: 30 },
                    // }}
                    alt='The house from the offer.'
                    src='./LoginImg/Pro360.png'
                  />
                </div>
                <Box
                  component='img'
                  sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 250, md: 200 },
                    maxWidth: { xs: 370, md: 300 },
                  }}
                  alt='The house from the offer.'
                  src='./LoginImg/login1.png'
                />

                <Typography
                  style={{
                    textAlign: 'center',
                    color: '#4D9EFE',
                    fontSize: '20px',
                    marginBottom: '15px',
                  }}
                >
                  Công cụ tuyệt vời đối với sự kiện
                </Typography>
                <Typography
                  style={{
                    textAlign: 'center',
                    fontSize: '15px',
                  }}
                >
                  Quản lý sự kiện, book trụ sở, blog, ...
                </Typography>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              style={{ backgroundColor: '#A6CFFF' }}
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography
                  component='h1'
                  variant='h5'
                  style={{ borderBottom: '2px solid #0057B7' }}
                >
                  <p>
                    <b>Sign in</b>
                  </p>
                </Typography>

                <Box
                  component='form'
                  noValidate
                  sx={{ mt: 1 }}
                  style={{ width: '100%' }}
                >
                  <InputLabel htmlFor='my-input' style={{ marginTop: '15px' }}>
                    Email
                  </InputLabel>
                  <input
                    id='outlined-basic'
                    style={{
                      border: 'none',
                      outline: 'none',
                      width: '100%',
                      height: '45px',
                      borderRadius: '5px',
                      textIndent: '15px',
                    }}
                    placeholder='Email của bạn'
                    type='text'
                  />
                  <InputLabel htmlFor='my-input' style={{ marginTop: '20px' }}>
                    Password
                  </InputLabel>
                  <input
                    id='outlined-basic'
                    style={{
                      border: 'none',
                      outline: 'none',
                      width: '100%',
                      height: '45px',
                      borderRadius: '5px',
                      textIndent: '15px',
                    }}
                    placeholder='Nhập mật khẩu'
                    type='password'
                  />
                  <Grid container>
                    <Grid
                      item
                      xs
                      style={{
                        textAlign: 'right',
                        marginTop: '15px',
                      }}
                    >
                      <p style={{ color: '#505050' }}>
                        <b>Forgot password?</b>
                      </p>
                    </Grid>
                  </Grid>
                  <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    sx={{ mt: 3, mb: 2 }}
                    style={{ borderRadius: '20px' }}
                  >
                    Login
                  </Button>
                  <Typography style={{ textAlign: 'center' }}>
                    -- Or Sign In With --
                  </Typography>
                  <Grid
                    container
                    style={{
                      margin: '5% 5%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Grid item style={{ width: '50%' }}>
                      <Button
                        variant='contained'
                        style={{
                          backgroundColor: 'white',
                          color: 'black',
                          textTransform: 'none',
                          width: '80%',
                        }}
                        startIcon={<Google fontSize='small' color='primary' />}
                        onClick={signInWithGoogle}
                      >
                        Google
                      </Button>
                    </Grid>
                    <Grid item style={{ width: '50%' }}>
                      <Button
                        variant='contained'
                        style={{
                          backgroundColor: 'black',
                          color: 'white',
                          textTransform: 'none',
                          width: '80%',
                        }}
                        startIcon={<GitHub fontSize='small' />}
                        onClick={signInWithGithub}
                      >
                        Github
                      </Button>
                    </Grid>
                  </Grid>
                  <Typography
                    style={{
                      textAlign: 'center',
                      marginTop: '15px',
                      fontSize: '15px',
                    }}
                  >
                    <p style={{ textAlign: 'center' }}>
                      <span>Do not have an account? </span>
                      <span style={{ fontWeight: 'bold', color: '#1565C0' }}>
                        {' '}
                        Sign Up Now
                      </span>
                    </p>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Login;
