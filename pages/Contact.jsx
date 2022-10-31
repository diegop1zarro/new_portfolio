import React, { useRef , useState} from 'react';
import emailjs from '@emailjs/browser';
import { Formik, Form, Field, ErrorMessage} from "formik";
import { initialValue , validSchema } from '../components/data/validate.js';
import { contact } from '../components/data/data.js';
import styles from '../styles/Contact.module.css'
import Heading from '../components/Layout/Heading.jsx';

const Contact = () => {
const form = useRef();
const [enviado , setEnviado] = useState(false)
  return (
    <div className={styles.contact}>
    <div className={styles.container}>
        <Heading title="Contact"/>
        <div className={styles.container_flexsb}>
      <Formik
      initialValues={initialValue}
      validationSchema={validSchema}
        onSubmit={(valores, { resetForm }) => { 
          emailjs.sendForm('service_co9xwh5','template_ep4xy8h', form.current,'VZYbMxL4f2Q01pBP9')
          setEnviado(true)
          setTimeout(()=>
            setEnviado(false),3000)
        resetForm();
      }}
      >
          {({ errors}) => (
            <Form ref={form} className={styles.right}>
              <div className={styles.flex}>
             <label>Name :</label>
             <Field type="text" name="user_name" placeholder="put your name :)"/>
             <ErrorMessage
             name="user_name"
             component={()=>(
              <span className={styles.error}>{errors.user_name}</span>
             )}
             />
              <label>Email :</label>
              <Field type="email" name="user_email" placeholder="put your email" />
             <ErrorMessage name="user_email" component={()=>(
             <span  className={styles.error}>{errors.user_email}</span> 
             )}/> 
             </div>
             <div className={styles.form_label}>
             <label>Message :</label>
             <Field  type="text" as="textarea" name="message"/>
             <ErrorMessage 
             name="message"
             component={()=>(
              <span  className={styles.error}>{errors.message}</span>
             )}
              />
              </div>
              <input type="submit" value="send" />
          {enviado === false ? null : <span className={styles.exito}>Message sent succesfully!</span>} 
            </Form>
          
          )}
      </Formik>
      <div className={styles.left}>
              {contact.map((item,i) => (
                <div className={styles.box} data-aos='zoom-in' key={i}>
                  <i>{item.icon}</i>
                  <p>{item.text1}</p>
                  <p>{item.text2}</p>
                </div>
              ))}
            </div>
      </div>
    </div>
    </div>
    );
  };
  export default Contact