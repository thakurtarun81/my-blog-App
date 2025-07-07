import { object, string } from "yup";

const BlogSchema = object().shape({
  title: string().required().min(5).trim(),
  subtitle: string().required().trim(),
  about: string().required().trim(),
});

export default BlogSchema;
