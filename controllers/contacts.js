

exports.addNewContact =  async (req, res) => {
    console.log(req.body)
    const {name,email,phone,industry} = req.body;
    if(ValidateEmail(email)){
      const sql = {name: name, email:email,phoneNumber:phone,industry:industry};
    res.locals.connection.query('INSERT INTO user SET ?',sql, function (error, results, fields) {
		if(error) throw error;
		res.send("success");});
    
    }
    
	
  
    
}


function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}