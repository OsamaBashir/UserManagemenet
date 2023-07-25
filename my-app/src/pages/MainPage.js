import React ,{useEffect,useState} from 'react';
import './MainPage.css';
import InputField from '../components/Common/InputField/InputField';
import MainComponent from '../components/MainComponent/MainComponent';

const MainPage = () => {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: ''

  })
  const [isValid, setIsValid] = useState(true);
  const [isError,setIsError] = useState(false);
  const [firstNameValid, setFirstNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const validate = formData.email.includes('@');
    if(formData.email === ''){
      setIsValid(false); 
      }
    else{
      setIsValid(true);
      if(!validate){
        setIsEmailValid(false)
        }
      else{
        setIsEmailValid(true)
      } 
    }
   
    if(formData.password === '' || formData.confirmPassword === ''){
      setIsPasswordValid(false)
    }
    else{
      setIsPasswordValid(true)
    }
    if(formData.password === formData.confirmPassword){
       setIsConfirmPasswordValid(true)
      }
       else{ 
        setIsConfirmPasswordValid(false)
       }
    if(formData.firstName !== '' && isNaN(formData.firstName)){
        setFirstNameValid(true);
    }
    else{
      setFirstNameValid(false);
    }
    if(formData.lastName !== '' && isNaN(formData.lastName)){
      setLastNameValid(true);
  }
  else{
     setLastNameValid(false);
  }
  if(formData.email && emailValidity && formData.password && isPasswordValid && formData.firstName && firstNameValid && formData.lastName && lastNameValid && formData.confirmPassword && isConfirmPasswordValid && formData.role && !isError){
   if (selectedUser === null) {
      // Add new user
      console.log(formData);
      const newUser = formData;
      setUsers([...users, newUser]);
    } else {
      // Update existing user
      const updatedUsers = [...users];
      updatedUsers[selectedUser] = formData;
      setUsers(updatedUsers);
      setSelectedUser(null);
    }
    // Reset the form fields
     setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: ''
     });
   } 
  };
  
  const editUser = (index) => {
    setSelectedUser(index);
    setFormData(users[index]);
  };
  
  useEffect(() => {
    if (selectedUser !== null) {
      setFormData(users[selectedUser]);
    }
  }, [selectedUser, users]);
  
    const deleteItem = (index) => {
    const updatedTodos = [...users];
    updatedTodos.splice(index, 1);
    setUsers(updatedTodos);
  };
   const emailValidity = isValid && isEmailValid;
   //const passwordValidity = isConfirmPasswordValid && isPasswordValid;

  const handleChange = (evt) => {
    const { name, value }= evt.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (name === 'password' || name === 'confirmPassword') {    
      if (name === 'confirmPassword') {
        if (formData.password !== value) {
          setIsError(true);
        } else {
          setIsError(false);
        }
      }
        
    }
  }

  return (
    <div className="container">
    <div className="flexbox-general">  
    <div className="flexbox">   
      <h2>Register</h2>
        <form>
            <label htmlFor="firstName">First Name:</label><br />
            <InputField 
               type="text"
               name='firstName'
               className={!firstNameValid ? 'redBorder' : ''}
               value={formData.firstName}
               onChange={handleChange}
             />
            <label htmlFor="lastName">Last Name:</label><br />
            <InputField 
              type="text"
              name="lastName"
              className={!lastNameValid ? 'redBorder' : ''}
              value={formData.lastName}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="email">Email:</label><br />
            <InputField 
              type="email"
              name="email"
              className={!emailValidity ? 'redBorder' : ''}
              value={formData.email}
              onChange={(e) => handleChange(e)}
            />
            <label htmlFor="password">Password:</label><br />
            <InputField 
              type="password"
              name="password"
              className={(isError || !isPasswordValid) ? 'redBorder' : ''}
              value={formData.password}
              onChange={(e) => handleChange(e)}
            />
             {isError &&
            <p className='custom-message'>Password and ConfirmPassword must be same</p> }
            <label htmlFor="confirmPassword">Confirm Password:</label><br />
            <InputField 
              type="password"
              name="confirmPassword"
              className={(isError || !isPasswordValid) ? 'redBorder' : ''}
              value={formData.confirmPassword}
              onChange={(e) => handleChange(e)}
            />
             {isError &&
            <p className='custom-message'>Password and ConfirmPassword must be same</p> }
             <label htmlFor="role">Role:</label><br />
            <select className='select-role' name='role' value={formData.role} onChange={(e) => handleChange(e)}>
            <option value=""> </option>
              <option value="Admin">Admin</option>
              <option value="User">User</option>
              <option value="Employee">Employee</option>
            </select><br />
          <button type="submit" className='btn-primary' onClick={handleSubmit}>Register</button>
       </form>
       
        </div>
       <div className='flexbox2'> 
        <h2>Registered Users</h2>
        <div className="user-list-container">  
         <MainComponent user = {users} deletedUser = {deleteItem} editUser={(index) => editUser(index)}/>
        </div>
        </div>
        </div>
        </div>
        
    
  );
};

export default MainPage;