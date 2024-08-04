import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from './firebaseConfig';

export const placeOrder = async (order) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), order);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getUserOrders = async (userId) => {
  const q = query(collection(db, "orders"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot;
};
