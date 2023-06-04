"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import PandaIcon from "../../public/PandaIcon";
import styles from "./page.module.scss";
import * as yup from "yup";
import { useCallback, useContext, useState } from "react";
import { AuthContext } from "@/hook/authContext";
import { Button, Checkbox, FormControlLabel, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface ISignInProps {
  email: string;
  password: string;
  rememberPassword: boolean;
}

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().min(6).required(),
});

const initialValues = { email: "", password: "", rememberPassword: false };

export default function SignIn() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { signIn } = useContext(AuthContext);

  const handleSignIn = useCallback(
    ({ email, password }: ISignInProps) => {
      signIn({
        email: email,
        password: password,
      }).catch((error) => {
        console.error(error.message);
      });
    },
    [signIn]
  );

  return (
    <div className={styles.container}>
      <aside>
        <div className={styles.logo}>
          <PandaIcon />
          <h2>AdminHub</h2>
        </div>
        <div>
          <h1>Get exclusive access to AdminHub</h1>
          <p>
            We are in the process of developing our online platform, where we aim to make the concept as user-friendly
            as possible. We therefore send out access continuously, focusing on the good costomer contact.
          </p>
        </div>
        <footer>
          <span>AdminHub </span>&copy; {new Date().getFullYear()} All Rights Reversed
        </footer>
      </aside>
      <main>
        <center>
          <h1>Sign In</h1>
          <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSignIn}>
            {({ isSubmitting }) => (
              <Form>
                <Field type="email" name="email" placeholder="Enter email address" />
                <ErrorMessage name="email" component="i" />

                <div className={styles.password}>
                  <Field type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" />
                  <IconButton onClick={() => setShowPassword((show) => !show)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </div>
                <ErrorMessage name="password" component="i" />

                <div className={styles.strapline}>
                  <FormControlLabel control={<Checkbox />} label="remember password" />
                  <Button variant="text" href="#">
                    FORGOT PASSWORD
                  </Button>
                </div>

                <Button type="submit" variant="contained" disabled={isSubmitting} size="large">
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </center>
      </main>
    </div>
  );
}
