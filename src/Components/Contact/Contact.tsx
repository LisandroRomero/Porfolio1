import { useState } from "react";
import emailjs from "@emailjs/browser"
const formData ={
    name: "",
    email: "",
    message: ""
}
const Contact = () => {
    const[form,setForm]=useState(formData)
    const handleChange = (event:any) => {
		setForm({
			...form,
			[event.target.name]: event.target.value
		})
	}
    const sendEmail = (event:any) => {
        event.preventDefault();
        if (form.name && form.email && form.message){
            emailjs.sendForm('service_6sw49nb', 'template_p1lyzt9', event.target, '8D2wiZJ-ZR66hNTKB')
            .then(response => console.log(response.text))
            .catch((error) =>console.log(error.text));
           
        }else{
            console.log("complete the form");
        }
    }
      ;
    return (
        <div>
             <form  onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" value={form.name} onChange={handleChange} />
      <label>Email</label>
      <input type="email" name="email" value={form.email} onChange={handleChange}/>
      <label>Message</label>
      <textarea name="message" value={form.message} onChange={handleChange}/>
      <button type='submit'>Send</button>
    </form>
        </div>
    );
};

export default Contact;