import React, { useEffect, useCallback } from "react";
import Link from "next/link";
import { useAuth } from "../auth";
import Container from "../components/Container";
import { Grid, Box, Button, Typography, Card } from "@material-ui/core";
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import RedditIcon from '@material-ui/icons/Reddit';
export default function Home() {
  const { user } = useAuth();

  return (
    <Container>
      <Card>
        <Box w={500} p={4} my={12} mx="auto">
          <Typography as="h2" mt={8} TypographyAlign="center">
            Hello Stramger, Welcome to our home
          </Typography>

          <Box
            mt={8}
            alignItems="center"
            justifyContent="center"
            isInline
            width="100%"
          >
            <Typography TypographyAlign="center" mt={8}>
              Now would you like to see how did the sky hubble on your birthday?
            </Typography>
            <Button
              variant="solid"
              variantColor="blue"
              width="100%"
              isDisabled={!user}
            >
              <Link href="/authenticated">
                <a>Let's see</a>
              </Link>
              <RedditIcon/>
            </Button>
            <Button
              variant="solid"
              variantColor="green"
              width="100%"
              isDisabled={user}
            >
              <Link href="/login">
                <a>no?</a>
              </Link>
              <SentimentVeryDissatisfiedIcon/>
            </Button>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}