import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "src/configs/firebaseConfig";

// Function to get Collection All data
export function getStaticData(COLLECTION) {
  return new Promise((resolve, reject) => {
    try {
      const Query = collection(db, COLLECTION);
      onSnapshot(Query, (querySnapshot) => {
        resolve(querySnapshot.docs.map((d) => ({ docid: d.id, ...d.data() })));
      });
    } catch (error) {
      reject(error);
    }
  });
}

// Function to Create or Update Doc
export function Create_Update_Doc(COLLECTION, DATA) {
  return new Promise((resolve, reject) => {
    try {
      const newDocRef = doc(collection(db, COLLECTION));
      setDoc(newDocRef, DATA).then(() => {
        resolve("data.insert");
      });
    } catch (error) {
      reject(error);
    }
  });
}
