import { object, string } from "yup";

const Loginschema = object().shape({
  email: string().email().required("Email is required."),
  password: string().required("Password is required. ").min(6),
});

export default Loginschema;
