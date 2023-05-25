import { createContext, useMemo, useState } from "react";
import { destroyCookie, setCookie } from "nookies";
import Router from "next/router";
import api from "@/services/api";
import { isAxiosError } from "axios";

interface IUser {
  email: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  isAuthenticated: boolean;
  user?: IUser;
  signIn(credential: IUserCredentials): Promise<void>;
  signOut(): void;
}

export interface IContextProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as IAuthContext);

function AuthProvider({ children }: IContextProps) {
  const [user, setUser] = useState<IUser>();

  const handleSignIn = async (credential: IUserCredentials) => {
    try {
      const res = await api.post("/api/sign-in", credential);
      const { token } = res.data;
      setCookie(null, "auth_token", token, { maxAge: 1 * 60 * 60 * 24 }); // Armazena o token em um cookie
      setUser({ email: credential.email }); //armazena em um estado o email do usuário logado
      Router.push("/dashboard");
    } catch (error) {
      if (isAxiosError(error)) throw new Error(error.message || "Unknown error");
      throw new Error("Unknown error");
    }
  };

  const handleSignOut = () => {
    destroyCookie(null, "auth_token");
    Router.push("/");
  };

  const values = useMemo(
    (): IAuthContext => ({
      user,
      isAuthenticated: !!user,
      signIn: handleSignIn,
      signOut: handleSignOut,
    }),
    [user]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
