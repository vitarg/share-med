import React from "react";
import { Avatar, Box, Container, CssBaseline, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { AuthPaper, AuthBody } from "./styles";
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
    <Container component="main" maxWidth="xs">
      <Box>{error}</Box>
      <CssBaseline />
      <AuthPaper>
        <Avatar>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
        <form onSubmit={handleOnSubmit} noValidate>
          <AuthBody>{children}</AuthBody>
        </form>
      </AuthPaper>
    </Container>
  );
};

export default Auth;
