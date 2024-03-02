import { addDoc, collection, doc } from "firebase/firestore"
import { db } from "../Firebase/Config"

export const AddAirCraft=async(form)=>{
const {capacity,name}=form
const collRef= collection(db,"aircrafts")
try {
    const docRef=await addDoc(collRef,{
        name:name,capacity:capacity,
    })
    console.log(docRef,"docRef");
    return{ res:true}
} catch (error) {
    console.log(error,"error");
    return{ res:false}
}
}

export const AddAirport=async(form)=>{
    const {name,city,country}=form
    const collRef= collection(db,"airports")
    try {
        const docRef=await addDoc(collRef,{
            name:name,country:country,  city:city,
        })
        console.log(docRef,"docRef");
        return{ res:true}
    } catch (error) {
        console.log(error,"error");
        return{ res:false}
    }
    }

    export const AddFlight=async(form)=>{
      
        const collRef= collection(db,"flights")
        try {
            const docRef=await addDoc(collRef,form)
            console.log(docRef,"docRef");
            return{ res:true}
        } catch (error) {
            console.log(error,"error");
            return{ res:false}
        }
        }
        export const AddFlightBooking=async(form)=>{
      
            const collRef= collection(db,"bookFlights")
            try {
                const docRef=await addDoc(collRef,form)
                console.log(docRef,"docRef");
                return{ res:true}
            } catch (error) {
                console.log(error,"error");
                return{ res:false}
            }
            }
    