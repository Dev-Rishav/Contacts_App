import { Field, Formik, Form } from "formik";
import Modal from './Modal'
import { addDoc, collection } from "firebase/firestore";
import {db} from "../config/firebase"

const AddAndUpdateContact = ({ isOpen, onClose }) => {

    const addContact= async (contact) =>{
        try {
            
            const contactRef = collection(db,"contacts");
            await addDoc(contactRef,contact);
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >

                <Formik
                    initialValues={{
                        name:"",
                        Email: "",
                        Phone_No:"",
                    }}

                    onSubmit={values => {       //this function triggers when the form is submitted
                        console.log(values);
                        addContact(values);
                    }}
                >
                    <Form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name">
                                Name
                            </label>
                            <Field name="name" className="h-10 border px rounded-lg " />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">
                                Email
                            </label>
                            <Field type="email" name="Email" className="h-10 border rounded-lg" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="Phone_No">
                                Phone Number
                            </label>
                            <Field name="Phone_No" className="h-10 border rounded-lg" />
                        </div>

                        <button className="bg-orange px-3 py-1.5 border self-end rounded-lg ">Add Contact</button>
                    </Form>
                </Formik>

            </Modal>
        </div>
    )
}

export default AddAndUpdateContact