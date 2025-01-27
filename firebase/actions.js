import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { db, storage } from "./config";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

//? Firestore functions

//* Common function for GET actions
export const useList = (collectionName) => {
  const [list, setList] = useState([]);
  const collectionRef = collection(db, collectionName);

  useEffect(() => {
    const getList = async () => {
      const data = await getDocs(collectionRef);
      setList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getList();
  }, []);

  return list;
};

//* Common function for POST actions
export const addItemToCollection = async (collectionName, data) => {
  try {
    const collectionRef = collection(db, collectionName);
    addDoc(collectionRef, data);
  } catch (error) {
    console.error(`Error adding item to ${collectionName}: `, error);
  }
};

//* Common function for UPDATE actions
export const updateItem = async (collectionRef, itemId, updatedData) => {
  try {
    const itemDocRef = doc(collectionRef, itemId);
    updateDoc(itemDocRef, updatedData);
  } catch (error) {
    console.error("Error updating item: " + error.message);
  }
};

//* Common function for DELETE actions
export const removeItem = async (collectionRef, docId) => {
  const isConfirmed = window.confirm(
    "Are you sure you want to remove this item?"
  );
  if (!isConfirmed) {
    return;
  }
  try {
    const itemRef = doc(collectionRef, docId);
    deleteDoc(itemRef);
  } catch (error) {
    console.error("Error deleting item: " + error.message);
  }
};

//* ------------------------------------------------------------------------------------------------

//? Storage functions

//* Common function for UPLOAD actions
export const uploadFile = async (file, fileName) => {
  const fileRef = ref(storage, `uploads/${fileName}`);
  await uploadBytes(fileRef, file);
  return getDownloadURL(fileRef);
};

//* Delete image from storage
export const deleteImage = async (fileName) => {
  const fileRef = ref(storage, fileName);
  try {
    await deleteObject(fileRef);
  } catch (error) {
    console.error(`Failed to delete image: ${error.message}`);
  }
};
