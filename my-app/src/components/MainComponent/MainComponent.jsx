import React from 'react'
import ListSection from '../ListSection/ListSection';

const MainComponent = ({user,deletedUser,editUser,selectedUser}) =>  {
  return (
    <div>
      <ListSection userList = {{user}} onClick = {deletedUser}  onEdit={editUser}/>     
      
    </div>
  )
}

export default MainComponent;
