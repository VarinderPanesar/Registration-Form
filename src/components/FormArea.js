import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function FormArea() {
  
  const [formValue,setformValue]= useState({
    f_name:"",
    l_name:"",
    email:"",
    phone:"",
    institute:"",
    address:"",
    city:"",
    province:"",
    p_code:""
  })

  const [formError,setformError] = useState({
    f_name:"",
    l_name:"",
    email:"",
    phone:"",
    institute:"",
    address:"",
    city:"",
    province:"",
    p_code:""
  })

  const eventChange = (event)=>{
    setformValue({
      ...formValue,
      [event.target.name] : event.target.value
    })
  }


  const eventSubmitted = async (e)=>{
    e.preventDefault();

    try{
  const response= await axios.post("http://localhost:3001/insert",formValue);
  console.log(response);
    }

    catch(error){

      if(error.response && error.response.data.rec_error)
        {
          setformError(error.response.data.rec_error.errors);
        }

  }

  }
  
  
  return (
  <>
    <section className="form-container">
    <div className="form-wrapper">
        <h1>Registration <span className='txt-highlight'>Form</span></h1>
        <p>Register Below by filling out the details and selecting the events that you want to be a part of</p>

        <div className="form-main-wrapper">

          <form onSubmit={eventSubmitted}>

          <div className="txt-fields-wrapper">

          <div className="hf-txt-field">
          <label for="first_name" className="txt-field-label rqd">First Name</label>
          <TextField id="outlined-basic" name="f_name" variant="outlined" className="txt-field" placeholder='First Name' required value={formValue.f_name} onChange={eventChange}/>

       
          <div className="err_alert">{formError.f_name && formError.f_name.message}</div>
          </div>

          <div className="hf-txt-field">
          <label for="last_name" className="txt-field-label rqd">Last Name</label>
          <TextField id="outlined-basic" name="l_name" variant="outlined" className="txt-field" placeholder='Last Name' required value={formValue.l_name} onChange={eventChange}/>
          <div className="err_alert">{formError.l_name && formError.l_name.message}</div>
          </div>

          </div>


          <div className="txt-fields-wrapper">

<div className="fl-txt-field">
<label for="email" className="txt-field-label rqd">Email</label>
<TextField id="outlined-basic" name="email" variant="outlined" className="txt-field" placeholder='Email' required type="email" value={formValue.email} onChange={eventChange}/>
<div className="err_alert">{formError.email && formError.email.message}</div>
</div>

</div>

<div className="txt-fields-wrapper">
<div className="hf-txt-field">
<label for="phone_number" className="txt-field-label rqd">Phone Number</label>
<TextField id="outlined-basic" name="phone" variant="outlined" className="txt-field" placeholder='Phone Number'  required inputProps ={{pattern:"[0-9]{10}"}} value={formValue.phone} onChange={eventChange}/>
<div className="err_alert">{formError.phone && formError.phone.message}</div>
</div>

<div className="hf-txt-field">
<label for="institute_name" className="txt-field-label rqd">Name of Institute</label>
<TextField id="outlined-basic" name="institute" variant="outlined" className="txt-field" placeholder='Institute Name' required value={formValue.institute} onChange={eventChange}/>
<div className="err_alert">{formError.institute && formError.institute.message}</div>
</div>

</div>


<div className="txt-fields-wrapper">

<div className="fl-txt-field">
<label for="address" className="txt-field-label rqd">Address</label>
<TextField id="outlined-basic" name="address" variant="outlined" className="txt-field" placeholder='Address' required value={formValue.address} onChange={eventChange}/>
<div className="err_alert">{formError.address && formError.address.message}</div>
</div>


</div>


<div className="txt-fields-wrapper">

<div className="hf-txt-field">
<label for="city" className="txt-field-label rqd">City</label>
<TextField id="outlined-basic" name="city" variant="outlined" className="txt-field" placeholder='City' required value={formValue.city} onChange={eventChange}/>
<div className="err_alert">{formError.city && formError.city.message}</div>
</div>

<div className="hf-txt-field">
<label for="province" className="txt-field-label rqd">Province</label>
<TextField id="outlined-basic" name="province" variant="outlined" className="txt-field" placeholder='Province' required value={formValue.province} onChange={eventChange}/>
<div className="err_alert">{formError.province && formError.province.message}</div>
</div>

</div>


<div className="txt-fields-wrapper">

<div className="fl-txt-field">
<label for="postal_code" className="txt-field-label rqd">Postal Code</label>
<TextField id="outlined-basic" name="p_code" variant="outlined" className="txt-field" placeholder='Postal Code' value={formValue.p_code} onChange={eventChange} required/>
<div className="err_alert">{formError.p_code && formError.p_code.message}</div>
</div>


</div>


<div className="txt-fields-wrapper">

<div className="fl-txt-field">
<Button variant="contained" type="submit" className="btn-field">Submit</Button>
</div>


</div>







          </form>
        </div>
        </div>
    </section>
  </>
  )
}
