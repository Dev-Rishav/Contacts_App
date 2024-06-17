import {Field, Formik,Form} from "formik";
import Modal from './Modal'

const AddAndUpdateContact = ({isOpen,onClose}) => {
  return (
    <div>
        <Modal
        isOpen={isOpen} 
        onClose={onClose}
      >
       
        <Formik>
            <Form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                <lable htmlFor="name">
                    Name
                </lable>
                <Field name="name" className="h-10 border px rounded-lg "/>
                </div>

                <div className="flex flex-col gap-1">
                <lable htmlFor="email">
                    Email
                </lable>
                <Field type="email" name="name" className="h-10 border rounded-lg"/>
                </div>

                <div className="flex flex-col gap-1">
                <lable htmlFor="Phone_No">
                    Phone Number
                </lable>
                <Field name="phone" className="h-10 border rounded-lg"/>
                </div>

                <button className="bg-orange px-3 py-1.5 border self-end rounded-lg ">Add Contact</button>
            </Form>
        </Formik>

      </Modal>
    </div>
  )
}

export default AddAndUpdateContact