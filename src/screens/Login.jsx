import { Formik, Form, Field, validateYupSchema, ErrorMessage } from 'formik';
import React, { useEffect, useState } from 'react';
import * as yup from "yup";
import { Paper, Container, Typography, Button, Box, Avatar, Checkbox, Stack, Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { green } from '@mui/material/colors';
import { Link as router, useNavigate } from 'react-router-dom';


export default function Login() {
  const [userd̥ḁta, setUserdata] = useState();
  const[owner,setOwner]=useState("Buyer");
  
  console.log("🚀 ~ file: Login.jsx:14 ~ Login ~ owner:", owner)
  console.log("🚀 ~ file: Login.jsx:12 ~ Login ~ Checkbox:", userd̥ḁta?.Checkbox)

  const link = useNavigate();
  const navigate = useNavigate();

  const initialValues = {

    email: "",
    password: "",

  }
  useEffect(() => {
    setUserdata(JSON.parse(localStorage.getItem("login_detail")));
  }, [])
  const validationSchema = yup.object({

    email: yup.string().email().required("Please  Enter Your email"),
    password: yup.string().required("Please  Enter Your password"),


  })


  const avatarStyle = { backgroundColor: "#1bbd7e" }


  const handleSubmit = (values, onSubmitProps) => {

    if(userd̥ḁta == null){
      alert("Please  register yourself")
      navigate("/register")
    }


    if (values.email !== userd̥ḁta.email && values.password !== userd̥ḁta.password) {
      alert("Wrong Credentials");
    }
    else if (values.email !== userd̥ḁta.email) {
      alert("Email is not valid")
    }
    else if (values.password !== userd̥ḁta.password) {
      alert("password is not valid")
    }
    else if (owner==="Buyer" &&  userd̥ḁta.Checkbox===true || owner==="Seller" && userd̥ḁta.Checkbox===false){
      alert("You are not authorised")
      onSubmitProps.resetForm({ values: initialValues });
      }


    else if (values.email === userd̥ḁta.email && values.password === userd̥ḁta.password) {
      alert("Login Successfull");

      localStorage.setItem("login",true);
      link("/");


      onSubmitProps.resetForm({ values: initialValues });
    }
    else {
      alert("Something is Wrong");

    }


  }
  return (
    <Container maxWidth="sm" sx={{ p: 20 }}  >
      <Paper elevation={10} >
        <Box p={2} align='center'>
          <Avatar style={avatarStyle}><LockOutlinedIcon ></LockOutlinedIcon></Avatar>
          <Typography variant='h4' align='center'>Sign in {owner} </Typography>

          <div className='container'>

            <div className='col-md-12 text-center'>


              <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >

                <Form>

                  <Box >
                    <Stack direction={"row"} justifyContent={'flex-start'} spacing={1}>
                      <Typography>
                        New User ?
                      </Typography>

                      <Link sx={{ textDecoration: "none" }} to="/register" component={router}>Sign UP</Link>
                    </Stack>
                  </Box>
                  <div className='col-md-12 mt-4 errorclr'>

                    <Field type="text" name="email" placeholder="Enter Your Email" autocomplete="off" className="form-control" />
                    <ErrorMessage name="email" ></ErrorMessage>

                  </div>
                  <div className='col-md-12 mt-4 errorclr'>
                    <Field type="text" name="password" placeholder="Enter Your Password" autocomplete="off" className="form-control" />
                    <ErrorMessage name="password"></ErrorMessage>

                  </div>
                  
               
               <Stack direction={"row" } justifyContent={"center"} alignItems={"center"}  >
               <Typography>Are you a {owner==="Buyer"?"Seller": "Buyer"} </Typography> <Link sx={{textDecoration:"none"}} onClick={()=>setOwner(()=>owner==="Seller"?"Buyer": "Seller")}>Click here</Link>
               </Stack>
                  <br></br>
                  <Button variant="contained" color='secondary' type="submit">sign In {owner}</Button>
                </Form>
              </Formik>
            </div>
          </div>
        </Box>
      </Paper>
    </Container>
  )
}