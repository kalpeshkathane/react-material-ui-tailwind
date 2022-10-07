import * as Yup from "yup"
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const pincodeRegExp=/^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/
export const signUpSchema = Yup.object({


  name: Yup.string().min(3).max(25).required("Please enter your name"),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Please enter phone number"),
  email: Yup.string().email().required("Please enter your email"),
   pincode: Yup.string().matches(pincodeRegExp, 'Pincode is not valid'),
 
});