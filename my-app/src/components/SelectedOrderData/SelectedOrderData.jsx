import React , { useState, useEffect } from 'react'
import './SelectedOrderData.css'
import { RotatingLines } from 'react-loader-spinner';
function SelectedOrderData({apiData}) {
  const [loading, setLoading] = useState(false);
  const [currentData, setCurrentData] = useState(apiData);

  useEffect(() => {
    setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setCurrentData(apiData);
      }, 2000);
  
  }, [apiData]);

  return (
    <div className='allorders'>
       {loading ? (
        <div className='custom-load'>
        <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="66"
        visible={true}
      
        />
        </div>
      ) : (
        currentData && (
         <table className="orderTable">
           <thead>
             <tr>
               <th>Created Date</th>
               <th>Created By</th>
               <th>Dealer Id</th>
               <th>Order Id</th>
               <th>Business Unit</th>
               <th>Customer Id</th>
               <th>Order Type</th>
               <th>Ibs User Id</th>
               <th>Products</th>
             </tr>
           </thead>
           <tbody>
             {apiData.salesInfo.map((item) => (
               <tr key={item.orderId}>
                 <td>{item.createdDate}</td>
                 <td>{item.createdBy}</td>
                 <td>{item.dealerId}</td>
                 <td>{item.orderId}</td>
                 <td>{item.businessUnit}</td>
                 <td>{item.customerId}</td>
                 <td>{item.orderType}</td>
                 <td>{item.ibsUserId}</td>
                 <td>
                   <table>
                     <thead>
                       <tr>
                         <th>Product ID</th>
                         <th>Quantity</th>
                       </tr>
                     </thead>
                     <tbody>
                       {item.productList.map((product) => (
                         <tr key={product.ibsProductId}>
                           <td>{product.ibsProductId}</td>
                           <td>{product.quantity}</td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
       )
       )}
    </div>
  )
}

export default SelectedOrderData