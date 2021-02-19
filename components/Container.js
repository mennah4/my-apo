import React from "react";
import NextLink from "next/link";
import { Box } from "@material-ui/core";

export default function Container({ children }) {
  return (
    <>
      <Box as="main" justifyContent="center" flexDirection="column" px={8}>
        {children}
      </Box>
    </>
  );
}