import React, { useState ,useEffect} from 'react'
import InputField from '../Common/InputField/InputField'
import './OrderComponent.css'
import Button from '../Common/Button/Button'
import SelectedOrderData from '../SelectedOrderData/SelectedOrderData'
import {SearchOrderApi} from '../../api/SearchOrderApi/SearchOrderApi'

function OrderComponent() {
  const [orderData, setOrderData] = useState({
        fromDate: '',
        toDate: '',
      })

  const [orderResponse,setOrderResponse] = useState(null);
const handleChange = (evt) => {
    const { name, value }= evt.target;
    setOrderData(prev => ({
        ...prev,
        [name]: value
    }));
    
    
    }
    useEffect(() => {
      console.log(orderData)
      }
    , [orderData]);
    
    const handleSearch = () => {
      const fromDate = encodeURIComponent(orderData.fromDate);
      const toDate = encodeURIComponent(orderData.toDate);
      SearchOrderApi(fromDate,toDate).then(
        res => {
          console.log(res);

          setOrderResponse(res.data);
        }
      );
      
      };
  return (
    <div className="orderContainer">
    <div className="flexbox-order"> 
    <div className='flexboxSearch'>
        <h4 className='custom-h4'>Get Order Details</h4>
        <div className='flexbox4'>
            <label htmlFor="fromDate">From:</label>
            <InputField 
               type="date"
               name='fromDate'
               className='custom-input'
               value={orderData.fromDate}
               onChange={handleChange}
             />
            <label htmlFor="toDate"className='labels'>To:</label>
            <InputField 
              type="date"
              name="toDate"
              className='custom-input'
              value={orderData.toDate}
              onChange={(e) => handleChange(e)}
            />
             <Button  title='Search' className='custom-button-search' onClick={handleSearch}  label="Search" />
         </div>   
    </div> 
       <div>

         <SelectedOrderData apiData={orderResponse}/> 
       </div>
    </div>
    </div>
  )
}

export default OrderComponent