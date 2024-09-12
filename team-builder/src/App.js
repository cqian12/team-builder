import './App.css';
import React, { useState } from 'react';
import axios from '../node_modules/axios'
import MyForm from './Form'
import Member from './Member'

const initialFormVals = {
  name:'',
  email:'',
  role:''
}


function App() {
  const [members, setMembers] = useState([])
  const [formVals, setFormVals] = useState(initialFormVals)

  const updateForm = (inputName,inputVal) => {
    setFormVals({...formVals,[inputName]: inputVal})
  }

  const submitForm = () => {
    let newMem = {
      name:formVals.name.trim(),
      email:formVals.email.trim(),
      role:formVals.role
    }

    if (!newMem.name || !newMem.email || !newMem.role) return

    axios.post('whateversite.com',newMem)
    .then(res => {
      setMembers(res.data,...members)
      setFormVals(initialFormVals)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>My Form</h1>
      <MyForm vals = {formVals} update = {updateForm} submit = {submitForm} />

      {members.map((member, index) => {
        return (<Member key = {member.id} info = {member} />)
      })}
    </div>
  );
}

export default App;
