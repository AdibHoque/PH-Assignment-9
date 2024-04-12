import {createContext, useEffect, useState} from "react";
import app from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const AuthContext = createContext(null);

const auth = getAuth(app);

const firebaseErrorMessages = [
  {
    code: "auth/email-already-in-use",
    message: "The email address is already in use by another account.",
  },
  {
    code: "auth/invalid-email",
    message:
      "The email address is invalid. Please enter a valid email address.",
  },
  {
    code: "auth/user-not-found",
    message: "User not found. Please check your email and try again.",
  },
  {
    code: "auth/wrong-password",
    message: "Incorrect password. Please try again.",
  },
  {
    code: "auth/weak-password",
    message: "The password is too weak. Please choose a stronger password.",
  },
  {
    code: "auth/user-disabled",
    message:
      "Your account has been disabled. Please contact support for assistance.",
  },
  {
    code: "auth/network-request-failed",
    message:
      "A network error has occurred. Please check your internet connection and try again.",
  },
  {
    code: "auth/invalid-credential",
    message: "The provided credential is invalid. Please check and try again.",
  },
  {
    code: "auth/operation-not-allowed",
    message:
      "This operation is not allowed. Please contact support for assistance.",
  },
  {
    code: "auth/timeout",
    message: "The operation timed out. Please try again later.",
  },
  {
    code: "auth/missing-verification-code",
    message: "A verification code is required.",
  },
  {
    code: "auth/invalid-verification-code",
    message: "The verification code is invalid. Please check and try again.",
  },
  {
    code: "auth/invalid-phone-number",
    message: "The phone number is invalid. Please enter a valid phone number.",
  },
  {
    code: "auth/requires-recent-login",
    message:
      "This operation requires recent authentication. Please sign in again and try again.",
  },
  {
    code: "auth/captcha-check-failed",
    message: "Captcha verification failed. Please try again.",
  },
  {
    code: "auth/account-exists-with-different-credential",
    message:
      "An account already exists with the same email address but different sign-in credentials. Please sign in using a provider associated with this email address.",
  },
];

export default function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);
        MySwal.fire({
          position: "center",
          icon: "success",
          title: "Registration Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        // ...
      })
      .catch((error) => {
        const errorMessageObj = firebaseErrorMessages.find(
          (err) => err.code == error.code
        );
        console.log(error.code);
        setErrorMessage(
          errorMessageObj ? errorMessageObj.message : "Unkown Error"
        );
      });
  };
  const logIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);
        MySwal.fire({
          position: "center",
          icon: "success",
          title: "Logged in!",
          showConfirmButton: false,
          timer: 1500,
        });
        // ...
      })
      .catch((error) => {
        const errorMessageObj = firebaseErrorMessages.find(
          (err) => err.code == error.code
        );
        console.log(error.code);
        setErrorMessage(
          errorMessageObj ? errorMessageObj.message : "Unkown Error"
        );
      });
  };

  const logOut = () => {
    MySwal.fire({
      title: "Logout?",
      text: "You will need to Login again if you Logout, so make sure you remember your account credentials.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth);
        Swal.fire({
          title: "Logged Out!",
          text: "Your account is signed out.",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("User Auth chnaged", currentuser);
      setUser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {user, errorMessage, createUser, logOut, logIn};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}
