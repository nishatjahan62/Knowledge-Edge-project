import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/Firebase.init";
import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import axios from "axios";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // sign up (create user)
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // User signIN

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user signUp
  const logOut = () => {
    console.log("logging out");
    localStorage.removeItem("access-token");
    return signOut(auth);
  };
  // User update
  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  // signIN with google
  const googleProvider = new GoogleAuthProvider();
  const SignInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      // jwt call
      if (currentUser?.email) {
        const userData = { email: currentUser.email };
        axios
          .post(
            "https://assignment-11-server-sigma-lime.vercel.app/jwt",
            userData
          )
          .then((res) => {
            const token = res.data.token;
            localStorage.setItem("access-token", token);
          })
          .catch((err) => console.log(err));
      } else {
        localStorage.removeItem("access-token");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    logOut,
    logIn,
    updateUser,
    SignInWithGoogle,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};
export default AuthProvider;
