import React from 'react'
import './ListSection.css';

function ListSection({userList, onClick,onEdit}) {
   const deleteItem  = (index) =>{
     onClick(index);
   } ;
  return (
  <table>
    <tr>
    {userList.user.map((user, index) => (
     <div className='flexboxEachUser'>   
      <tr key={index}>
        <thead>
        <th>First Name </th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Password</th>
        </thead>
        <tbody>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.password.replace(user.password,('*'.repeat(user.password.length)))}</td>
        <button className='btn-edit'onClick={() => onEdit(index)}>Edit</button>
        <button className='btn-delete' onClick={() => deleteItem(index)}>Delete</button>  
        </tbody>    
      </tr>
      </div>
 ))}
    </tr>
  </table>

  )
}

export default ListSection