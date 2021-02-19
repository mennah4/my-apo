import React, { useState } from "react";
import Link from "next/link";
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";
import {
  Box,
  Grid,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Card,
  Button,
  Typography,
} from "@material-ui/core";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login({ props }) {
  firebaseClient();
  const toast = () => toast("Wow so easy!");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <Grid container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh', backgroundColor:"rgb(56,155,65,.3)" }}>
    <Card style={{padding: "30px",  backgroundColor:"rgb(13,30,55,0.9)"}}>
        <Grid style = {{margin:"20px"}}>
        <Typography style ={{color: "white"}} textAlign="center" as="h2">
          Register Baby
        </Typography>
        </Grid>
        
      <Box w={600} p={10} my={12} mx="auto">
        <Grid>
        <FormControl style={{width: "-webkit-fill-available"}} isRequired>
            <FormLabel htmlFor="email" style ={{color: "white"}}>Email address</FormLabel>
            <Input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="emailAddress"
                value={email}
                aria-describedby="email-helper-text"
                inputProps={{width: "-webkit-fill-available"}}
            />
            <FormHelperText style ={{color: "white"}} id="email-helper-text">
               Ye, you are now a part of my db watch out.
            </FormHelperText>
            </FormControl>

        </Grid>
        <Grid>
        <FormControl  style={{width: "-webkit-fill-available"}}  isRequired>
          <FormLabel htmlFor="password" style ={{color: "white"}}>Password</FormLabel>
          <Input
            onChange={(e) => setPass(e.target.value)}
            type="password"
            id="pass"
            value={pass}
            aria-describedby="password-helper-text"
            inputProps={{width: "-webkit-fill-available"}}
          />
        </FormControl>
        </Grid>
        
        <Grid justify="center" mt={6} isInline spacing={10}>
          <Button
            width="40%"
            variant="solid"
            variantColor="blue"
            style={{
                backgroundColor: "rgb(247,230,2,.7) !important",
                height:"50px",
                fontWeight:"bold",
                '&:focus': {
                  backgroundColor: "rgb(247,230,2,.9)",
                },
                '&:hover': {
                  backgroundColor: "rgb(247,230,2,.9)",
                },
                marginTop:"10px",
                color:"white !important",
                marginRight:"25px"
            }}
            isDisabled={email === "" || pass === ""}
            onClick={async () => {
              await firebase
                .auth()
                .createUserWithEmailAndPassword(email, pass)
                .then(function (firebaseUser) {
                  window.location.href = "/";
                })
                .catch(function (error) {
                  const message = error.message;
                  alert(message)
                });
            }}
          >
            Create account
          </Button>
          <Button
            width="40%"
            variant="solid"
            variantColor="green"
            style={{
              backgroundColor: "rgb(247,230,2,.7)",
              height:"50px",
              fontWeight:"bold",
              '&:focus': {
                backgroundColor: "rgb(247,230,2,.9)",
              },
              '&:hover': {
                backgroundColor: "rgb(247,230,2,.9)",
              },
              marginTop:"10px",
              color:"white",
              marginRight:"25px"
          }}
            isDisabled={email === "" || pass === ""}
            onClick={async () => {
              await firebase
                .auth()
                .signInWithEmailAndPassword(email, pass)
                .then(function (firebaseUser) {
                  window.location.href = "/";
                })
                .catch(function (error) {
                  const message = error.message;
                  alert(message)
                });
            }}
          >
            Log in
          </Button>
        </Grid>
      </Box>
      </Card>
    </Grid>
  );
}