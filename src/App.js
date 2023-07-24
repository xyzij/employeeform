import { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState ({
    name: '',
    id: '',
    email: '',
    gender: '',
    dob: '',
    jobtitle: '',
    department: '',
    contactnum: ''
  });

  const [error, setError] = useState({
    name: ''
  })

  
  const onChange = (e) => {
    const { value, name } = e.target;


    setForm((state) => ({
      ...state,
      [name]: value
    }));
  }

  const showData = () => {
    console.log('Form', form);
  
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.name.length < 5){
      setError((state) => ({
        ...state,
        name: 'Too short'
      }));
      return;
    } else{
      setError((state) => ({
        ...state,
        name: ''    
      }));
    };

    showData(); 
  }


  return (
    <div className="App">
      <header className="App-header">
       <form onSubmit={onSubmit}>
       <h1>Employee Details Form</h1>
       <label>
          Full Name:
          <input req minLength={5} onChange={onChange} name="full name" value={form.name}/>
        </label>
        {!!error.name && (
          <div>
            <i>{error.name}</i>
          </div>
          )}    
        <hr/>

        <label>
          Employee Id:
          <input onChange={onChange} name="employee id" value={form.id}/>
        </label>
        <hr/>

        <label>
          Email:
          <input onChange={onChange} name="email" value={form.email}/>
        </label>
        <hr/>

        <label>
          Gender:
          <div>
          <input onChange={onChange} type="radio" value = "Male" name = "gender" checked={form.gender === 'Male'} /> Male
          <input onChange={onChange} type="radio" value = "Female" name = "gender" checked={form.gender === 'Female'} /> Female
          </div>
        </label>
        <hr/>

        <label>
          Date Of Birth:
          <input onChange={onChange} name="dob" value={form.dob}/>
        </label>
        <hr/>

        <label>
          Job Title:
          <input onChange={onChange} name="jobtitle" value={form.jobtitle}/>
        </label>
        <hr/>

        <label>
          Department:
          <input onChange={onChange} name="department" value={form.department}/>
        </label>
        <hr/>

        <label>
          Contact No:
          <input onChange={onChange} name="contactnum" value={form.contactnum}/>
        </label>
        

        <div>
           <button> Submit</button>
        </div>

        
       </form>
      </header>
    </div>
  );
}

export default App;
