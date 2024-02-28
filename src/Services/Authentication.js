import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../Firebase/Config";
import { addDoc, collection } from "firebase/firestore";

export const SignUpFirebase = async (obj) => {
  const { name, email, phone, password, confirmPassword } = obj;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user) {
        updateProfile(user, {
          displayName: name,
          phoneNumber: phone,
        })
          .then(() => {
            addDoc(collection(db, "users"), {
              name: name,
              phone: phone,
              email: email,
              uid: user.uid,
            });
          })
          .catch((error) => {
            console.log(error, "in Update profile ");
          });
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
    });
};
