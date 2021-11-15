import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

// initialize firebase app
initializeFirebase();

// creating custom hook depending firebase methods
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // create user using email & password
  const registerUser = (email, password, name, location, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        const destination = location.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // method for login using email & password
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");

        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // login using google
  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // const user = result.user;
        // saveUser(user.email, user.displayName, "PUT");
        setAuthError("");
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // user state observer function
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // load admin data
  useEffect(() => {
    fetch(
      `https://afternoon-fortress-32990.herokuapp.com/bookings/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  // log out method
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  return {
    registerUser,
    user,
    authError,
    loginUser,
    isLoading,
    logout,
    signInWithGoogle,
    setSuccess,
    success,
    admin,
  };
};

export default useFirebase;
