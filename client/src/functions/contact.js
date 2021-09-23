import axios from 'axios';

export const addNewContact = async ({name,email,phone,industry}) => {
    
    
    return await axios.post('http://localhost:5000/api/contacts/new',{name,email,phone,industry});
    
    

}