import React from "react";
import { Avatar, Box, Container, CssBaseline, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { AuthPaper, FormContent } from "./styles";
import { SerializedError } from "@reduxjs/toolkit/dist/createAsyncThunk";

interface AuthProps {
  title: string;
  handleOnSubmit: (e: React.FormEvent) => void;
  error: SerializedError | null;
}

const Auth: React.FC<AuthProps> = ({
  handleOnSubmit,
  title,
  error,
  children,
}) => {
  return (
    <Container
      component="main"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 500,
        minHeight: "calc(100vh - 92px)",
      }}
    >
      <Box>{error}</Box>
      <CssBaseline />
      <AuthPaper>
        <Avatar>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5" style={{ marginTop: 20 }}>
          {title}
        </Typography>
        <form onSubmit={handleOnSubmit} noValidate style={{ marginTop: 20 }}>
          <FormContent>{children}</FormContent>
        </form>
      </AuthPaper>
    </Container>
  );
};

export default Auth;
