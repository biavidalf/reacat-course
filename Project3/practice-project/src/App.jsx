/* eslint-disable react/prop-types */
import { useState, useRef } from 'react'
import Input from './components/Input/Input'
import Button from './components/Button/Button'
import Title from './components/Title/Title'
import List from './components/List/List'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [ users, setUsers ] = useState([
    {
      id: '1',
      username: "Max",
      age: 20
    },
    {
      id: '2',
      username: "Eva",
      age: 19
    },
    {
      id: '3',
      username: "Jack",
      age: 12
    }
  ])

  const usernameInputRef = useRef(null);
  const ageInputRef = useRef(null);

  const addUserHandler = () => {
    if(!usernameInputRef.current.value){
      toast.error('Username is a obligatory field.');
      return;
    }
    
    if(!ageInputRef.current.value){
      toast.error('Age is a obligatory field.');
      return;
    }

    if(ageInputRef.current.value <= 0){
      toast.error('Age has to be greater than 0.');
      return;
    }

    if(users.find(user => user.username === usernameInputRef.current.value)){
      toast.error('Username already in use.')
      return;
    }

    let newUser = {
        id: Math.random().toString(),
        username: usernameInputRef.current.value,
        age: ageInputRef.current.value
      }
    setUsers(prev => [...prev, newUser]);
    toast.success('User added successfuly.');
  }

  const deleteUserHandler = id => {
    setUsers(prev => {
      const updatedUsersList = prev.filter(user => user.id !== id);
      toast.success('User removed successfuly.');
      return updatedUsersList;
    })
  }

  return (
    <>
      <div className="w-screen h-screen bg-gray-800 flex flex-col items-center text-white">

        {/* First container */}
        <div className="w-1/2 bg-gray-700 shadow-lg rounded flex flex-col justify-center p-6 mt-6 gap-3">
          {/* Title */}
          <Title text="User Information" />
          
          {/* Inputs */}
          <Input type="text" label="Username" ref={usernameInputRef} />
          <Input type="number" label="Age" ref={ageInputRef} />

          {/* Button */}
          <Button label="Add User" onClick={addUserHandler} />
        </div>

        {/* Second Container */}
        <List users={users} onDeleteHandler={deleteUserHandler} />
        <div><Toaster/></div>
      </div>
    </>
  )
}

export default App
