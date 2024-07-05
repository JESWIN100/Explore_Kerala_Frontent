import axios from "axios";
import { toast } from "react-toastify";


 const BASE_URL = 'https://explore-kerala-backend.onrender.com'
 const token = `Bear ${localStorage.getItem('product-token')};`

 export const login=async(data)=>{
    try {

        const response = await axios.post(`${BASE_URL}/users/log-in`,data,{
            headers:{Authorisation:token}
        })

        return response.data
    } catch (error) {
         throw error
         toast.error(error.response.data.error)
    }
 }

 export const signup=async(data)=>{
    try {

        const response = await axios.post(`${BASE_URL}/users/sign-up`,data)
           

        return response.data
    } catch (error) {
         throw error
         toast.error(error.response.data.error)
    }
 }
   
   