import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios"
function DeletForm({showForm}) {
  	// const [post, setPost] = useState({});
  // const [formValue, setformValue] = useState([])
  const formik = useFormik({
    initialValues: {
      title: "",
      userId: 1,
      body: "",
    },
    onSubmit: (values) => {
      // setformValue([...formik.initialValues,formik.initialValues])
        const api = axios.create({baseURL :"https://api.tawwr.com/"})
        api.post('posts',values).then(response => response.data.data);
      showForm()
    console.log(values);
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required").max(80, "limit passed"),
      userId: Yup.string().required("author is required").max(10, "limit passed"),
      body: Yup.string().required("your message is required"),
    }),
  });
  // console.log(formik.values);
  return (
    <div className="form">
      <Form className="f1" onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="my third post" 
            name="title" 
            onChange={formik.handleChange} value={formik.values.title}/>
        </Form.Group>

          {/* <Form.Label></Form.Label> */}

        <Button variant="primary" type="submit"  >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default DeletForm;
