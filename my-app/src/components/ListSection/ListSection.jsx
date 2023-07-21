import React from 'react'
import './ListSection.css';

function ListSection({userList, onClick,onEdit}) {
   const deleteItem  = (index) =>{
     onClick(index);
   } ;
  return (
    <table className= 'flexboxEachUser'>
       <tr>
        <thead>
        <th>First Name </th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>Role</th>
        </thead>
    {userList.user.map((user, index) => (
      <tbody>
        <tr  className={
          user.role === 'Admin'
            ? 'background-flexbox'
            : user.role === 'User'
            ? 'background-flexbox1'
            : 'background-flexbox2'
        }>  
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.password.replace(user.password,('*'.repeat(user.password.length)))}</td>
        <td>{user.role}</td>
        <td>
        <button className='btn-edit'onClick={() => onEdit(index)}>Edit</button>
        <button className='btn-delete' onClick={() => deleteItem(index)}>Delete</button> 
        </td>
        </tr> 
        </tbody>    
 ))}
     </tr>
    </table>
  )
}

export default ListSection