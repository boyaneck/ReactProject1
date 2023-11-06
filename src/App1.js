import React, { useState } from 'react'
import Child from 'Child'
import './App.css'
function App() {
  

  const [users,setUsers]=useState([
      {id:1,age:30,name:'송중기'},
      {id:2,age:24,name:'송강'},
      {id:3,age:20,name:'올리비아 로드리고'},
      {id:4,age:29,name:'딜런 오브라이언'},
    ]
  );

    let [name,setName]=useState('');
    let [age,setAge] =useState('');

    const nameChange=(event)=>{
        setName(event.target.value);
    }

    
    const ageChange=(event)=>{
      setAge(event.target.value);
  }
  const AddButton =()=>{
  
    const newUser={
      id: users.length+1,
      age,
      name,
    };
    setUsers([...users,newUser]);
  }

  const clickRemove= (id )=>{
 
 alert(id)
  const newUsers=  users.filter((user)=>{
      return user.id !==id;
    });
    setUsers(newUsers)
  }
  return (
 
    <div>
      이름: &nbsp;<input value={name} onChange={nameChange}/>{name}  <br/>
       나이 &nbsp;<input value={age} onChange={ageChange}/>{age}
      <br/>
      <button onClick={AddButton}>추가</button>
<div className='app-style'> 
    <input/>
    <input/>
    {users.map((e)=>{
      return (
      <div key={e.id} className='component-style'>{e.id}.{e.name}
      <button onClick={()=>clickRemove(e.id)}>XX</button></div>
    );
    })}
    
     </div>

    </div>
    
    )
}

export default App