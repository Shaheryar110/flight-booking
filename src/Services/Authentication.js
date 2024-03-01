import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../Firebase/Config";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";

export const SignUpFirebase = async (obj) => {
  const { name, email, phone, password, confirmPassword } = obj;

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    if (user) {
      await updateProfile(user, {
        displayName: name,
        phoneNumber: phone,
      });

      await addDoc(collection(db, "users"), {
        name: name,
        phone: phone,
        email: email,
        uid: user.uid,
      });

      return { res: true };
    }
  } catch (error) {
    console.error(error);

    return { res: false };
  }
};

export const LoginFirebase = async (obj) => {
  const { email, password } = obj;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(email)) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
      });
  }
};

export const AdminLogin = async (form) => {
  const { email, password } = form;
  const docRef = doc(db, "admin", "38PNHfZibn76b9GJ2sbQ");

  try {
    const snap = await getDoc(docRef);
    if (
      snap.exists() &&
      snap.data().email === email &&
      snap.data().password === password
    ) {
      console.log("admin Authentication successful");

      return { res: true };
    } else {
      console.log(" adminAuthentication failed");
      return { res: false };
    }
  } catch (error) {
    console.log(error, "error");
    return { res: false };
  }
};
