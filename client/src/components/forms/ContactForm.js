import React, {useState} from 'react';
import styles from './ContactForm.module.css';
import { addNewContact } from '../../functions/contact';

const initialState ={
    name: '',
    email: '',
    phone: '',
    industry: '',
} ;

const ContactForm = () => {
    const [user, setUser] = useState(initialState);
    const [success,setSuccess] = useState(false);

    const handleSubmit =  (e) => {
        e.preventDefault();
        const {name, email, phone, industry} = user;
        
         addNewContact({name, email, phone, industry})
         .then((res) => {
             if(res.data === 'success'){
                 setSuccess(true);
                 setTimeout(() => {
                     setSuccess(false);
                 }, 1000);
             }
         })
         .catch((err) => console.log(err));

    }

    return (
        <div className={`${styles.ContactForm} d-flex flex-column w-50 align-items-center  p-4`}>
            
            <form  className="h-100 d-flex flex-column w-100 justify-content-center position-relative p-5 pos">
            <h2 className="p-5 fs-1">Connect with one of our experts to learn more!</h2>
            {success && (<div id={`${styles.pop}`} className="p-2 position-absolute fs-1 text-center top-50 start-50 translate-middle text-primary d-flex justify-content-center align-items-center">Form Successfully Submitted</div>)}
                <div className="">
                    <label htmlFor="name" className="form-label fs-1 py-2">Name:</label>
                    <input 
                    onChange={(e) => setUser({ ...user, [e.target.id]: e.target.value })}
                    type="text" 
                    className="form-control p-2" 
                    id="name" 
                    aria-label="name"
                    value={user.name}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="form-label fs-1 py-2">Email:</label>
                    <input 
                    onChange={(e) => setUser({ ...user, [e.target.id]: e.target.value })}
                    type="email" 
                    className="form-control" 
                    id="email"
                    value={user.email}
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="form-label fs-1 py-2">Phone Number:</label>
                    <input 
                    onChange={(e) => setUser({ ...user, [e.target.id]: e.target.value })}
                    type="tel" 
                    className="form-control" 
                    id="phone"
                    value={user.phone}
                    />
                </div>
                <div>
                    <label htmlFor="industry" className="form=label fs-1 py-2">Industry:</label>
                    <input 
                    onChange={(e) => setUser({ ...user, [e.target.id]: e.target.value })}
                    value={user.industry }
                    type="text" 
                    className="form-control lh-1" 
                    id="industry"
                    />
                </div>
                <div className="d-flex justify-content-center p=1">
                    <button type="button" onClick={handleSubmit} className={`${styles.formBtn} fs-2 mt-3 btn-primary`}>Send Away!</button>
                </div>
            </form>
            
        </div>
    )
};

export default ContactForm;
