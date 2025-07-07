import { object, string } from "yup";

const signupSchema = object().shape({
  fullName: string().required("Full name is required.").min(5).trim(),
  email: string().email().required("Email name is required."),
  password: string().required("Password name is required.").min(6),
  confirmPassword: string().required("confirm Your Password name is required."),
});

export default signupSchema;
