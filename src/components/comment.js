import {  Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import React from "react";
function Comment({ card }) {
    // console.log(card);
    const formik = useFormik({
        initialValues: {
            body: "",
        },
        onSubmit: (values) => {
            // setformValue([...formik.initialValues,formik.initialValues])
            const p = {...values, userId: 7 }
            const api = axios.create({ baseURL: "https://api.tawwr.com/" });
            api.post(`posts/${card.id}/comment`, p).then(response => console.log(response));
            formik.resetForm()

        },
        validationSchema: Yup.object({
            body: Yup.string().required("your message is required"),
        }),
    });
    return (
        <div>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="wite comment" 
                        name="body"
                        onChange={formik.handleChange}
                        value={formik.values.body} />
                </Form.Group>
                <Button onClick={formik.handleSubmit} variant="outline-secondary" id="button-addon2" type="submit">
                    Add Comment
                </Button>
            </Form>
        </div>
    );
}

export default Comment;
