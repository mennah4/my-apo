import React from "react";
import nookies from "nookies";
import { verifyIdToken } from "../firebaseAdmin";
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";
import { Box, Grid, Typography, Button, Card, CardContent, Divider} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
const useStyles = makeStyles({
    root: {
      width:"100%",
        height:"100%",
        position:"absolute",
        background: "url('/../public/static/images/apo.png') no-repeat",
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
      color: "white"
    },
    title: {
      fontSize: 14,
      color: "white"
    },
    pos: {
      marginBottom: 12,
      color: "white"
    },
  });
  
function Authenticated({ session }) {
    const classes = useStyles();
  firebaseClient();
  if (session) {
    return (
      <Grid style={{backgroundImage:{src:"/../public/static/images/apo.png"}}}>
        <Image
        src="/../public/static/images/apo.png"
        alt="Picture of the author"
        width={1500}
        height={800}
      />
          {/* <Image src={require('/../public/static/images/apo.png')} /> */}

        <Box w={500} style ={{margin:"0px"}} mx="auto">
          <Card style ={{minWidth: 275,
            background:"rgb(32,16,13,0.3"}} >
          <CardContent>
                <Typography style={{fontSize: 24,
                color: "white"}} color="textSecondary" gutterBottom>
                On February 20 in 2014
                </Typography>
                <Typography  style={{fontSize: 20,
                color: "white"}}  variant="h5" component="h2">
                Monkey Head Nebula
                </Typography>
                <Typography   style={{fontSize: 14,
                color: "white"}} variant="body2" component="p">
                This image reveals carved knots of gas and dust in a small portion of the Monkey Head Nebula. The nebula is a star-forming region that hosts dusky dust clouds silhouetted against glowing gas.
                </Typography>
                
              <Divider style ={{margin:"20px"}}></Divider>
              <Typography >
                Okay, here we go, the time to tell you how my heart hubbles with you,
                Ever since I've known you till now, I was certain that I would never love anyone so deeply.
                and that you are my certainty, a certainty that does not permeate doubt, and know that when I knew you 
                I realized what it means for a person to have a soul that is far from  ... 
                bit closer than everything.
                Did I ever tell you that time has become taste, smell and color since I knew you? 
                Did I ever tell you that I used to see the universe as gray and that you poured colors on it that I did not know? 
                Did I ever tell you that you passed by my life like a sun shined on a city that didn't know sun?
                like a bird landing on a winter tree?
                I don't just love you, Rather lean on you as if you are the most stable thing in this world.
                Iyiki varsin, iyiki bebisiiiiiiimsin, Ez ji te hezdikim
              </Typography>
              <FavoriteBorderIcon/>
              <FavoriteIcon/>
            </CardContent>
            <Button
                style={{marginLeft: "75%"}}
                width="100%"
                variant="solid"
                variantColor="red"
                onClick={async () => {
                  await firebase.auth().signOut();
                  window.location.href = "/login";
                }}
              >
                Sign out Baby
              </Button>
          </Card>
        </Box>
      </Grid>
    );
  } else {
    return (
      <Box>
        <Typography>loading</Typography>
      </Box>
    );
  }
}

export async function getServerSideProps(conTypography) {
  try {
    const cookies = nookies.get(conTypography);
    const token = await verifyIdToken(cookies.token);
    const { uid, email } = token;
    return {
      props: { session: `Your email is ${email} and your UID is ${uid}.` },
    };
  } catch (err) {
    conTypography.res.writeHead(302, { Location: "/login" });
    conTypography.res.end();
    return { props: {} };
  }
}
export default Authenticated;