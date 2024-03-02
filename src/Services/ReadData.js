import { collection, getDocs } from "firebase/firestore"
import { db } from "../Firebase/Config"

 export const getData=async(collName)=>{
    console.log(collName,"collction");
    const collRef=collection(db,collName)
    try {
        const snapDoc= await getDocs(collRef)
        const docsData=snapDoc.docs.map((doc)=>{
            return{...doc.data(),id:doc.id}
        })
        return docsData
    } catch (error) {
        console.log("error",error);
    }
}