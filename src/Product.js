// src/Product.js
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const addProduct = async (product) => {
  try {
    const docRef = await addDoc(collection(db, "products"), product);
    return docRef;
  } catch (error) {
    throw new Error("Error adding product: " + error.message);
  }
};

export const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));
  return querySnapshot;
};

