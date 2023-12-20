import { Formik, Form, Field, validateYupSchema, ErrorMessage } from 'formik';
import React, { useEffect, useState } from 'react';
import * as yup from "yup";
import { Paper, Container, Typography, Button, Box, Avatar, Checkbox } from '@mui/material';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { green } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';

export default function Register() {
  const [logindata, setLoginData] = useState();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    Checkbox:false,
  };

  const nameExp = /^[A-Za-z]+$/;
  const validationSchema = yup.object({
    name: yup.string().matches(nameExp, 'Only alphabetic characters are allowed').required("Please  Enter Your name"),
    email: yup.string().email().required("Please  Enter Your email"),
    password: yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'
      ),  



  });

  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const handleSubmit = (values, onSubmitProps) => {
    console.log("value",values);
    if (values.name === logindata?.name && values.email === logindata?.email) {
      alert("User is already registered");
    }
    else {
      localStorage.setItem("login_detail",JSON.stringify(values));
      alert("Register succssefull");
      navigate ("/login");
    }
    onSubmitProps.resetForm({ values: initialValues });

  }


  useEffect(() => {
    setLoginData(JSON.parse(localStorage.getItem("login_detail")))
  }, [initialValues]);
  return (
    <Container maxWidth="sm" sx={{ p: 20 }}>
      <Paper elevation={10} >
        <Box p={2} align='center'>
          <Avatar style={avatarStyle}><AddCircleOutlinedIcon ></AddCircleOutlinedIcon></Avatar>
          <Typography variant='h4' align='center'>Sign Up</Typography>
          <Typography align='center' className='mt-2'>Please Fill This Form</Typography>

          <div className='container'>
            <div className='col-md-12 text-center'>

              <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <Form >
                  <div className='col-md-12 mt-4 errorclr'>
                    <Field type="text" name="name" placeholder="Enter Your name" autocomplete="off" className="form-control" />
                    <ErrorMessage name="name"></ErrorMessage>

                  </div>

                  <div className='col-md-12 mt-4 errorclr'>
                    <Field type="text" name="email" placeholder="Enter Your Email" autocomplete="off" className="form-control" />
                    <ErrorMessage name="email"></ErrorMessage>

                  </div>
                  <div className='col-md-12 mt-4  errorclr'>
                    <Field type="text" name="password" placeholder="Enter Your Password" autocomplete="off" className="form-control" />
                    <ErrorMessage name="password"></ErrorMessage>

                  </div>
                  <Field type="Checkbox"  name="Checkbox" color='primary'>
                    

                  </Field>I am Seller
                  <br></br>

                  {/* <Checkbox name="Checkbox" color='primary'>

                  </Checkbox>I accept the terms and condition */}
                  <br></br>
                  

                  <Button variant="contained" color='secondary' type="submit">REGISTER</Button><br></br><br></br>


                </Form>

              </Formik>
            </div>Go to login page
            <Link sx={{ textDecoration: "none" }} to="/login" >   Login</Link>
          </div>
        </Box>

      </Paper>
    </Container>
  )
}