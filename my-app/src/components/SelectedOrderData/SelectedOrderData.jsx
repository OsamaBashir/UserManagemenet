import React , { useState, useEffect } from 'react'
import './SelectedOrderData.css'
import { RotatingLines } from 'react-loader-spinner';
import { GetProductsById } from '../../api/GetProductsById';
function SelectedOrderData({apiData}) {
  const [loading, setLoading] = useState(false);
  const [currentData, setCurrentData] = useState(apiData);
  const [selectedRowProducts, setSelectedRowProducts] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setCurrentData(apiData);
      }, 2000);
  
  }, [apiData]);
  const handleRowClick = (rowData) => {
    const selectedProducts = rowData.productList.map((item) => (
      item
      ))
    console.log('rrr',selectedProducts);
    GetProductsById().then(
      res => {
        let ProductsById = res.data.products.filter(
          (array22) => selectedProducts.some((array11) => array11.ibsProductId === array22.ibsId
          ));
        console.log('aaa',ProductsById);

        setResponse(ProductsById);
        console.log('aca',response);
      }
    );
    setSelectedRowProducts(rowData.productList);
  };
  return (
    <>
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
               {/* <th>Products</th> */}
             </tr>
           </thead>
           <tbody>
             {currentData.salesInfo.map((item) => (
               <tr key={item.orderId}  onClick={() => handleRowClick(item)}>
                 <td>{item.createdDate}</td>
                 <td>{item.createdBy}</td>
                 <td>{item.dealerId}</td>
                 <td>{item.orderId}</td>
                 <td>{item.businessUnit}</td>
                 <td>{item.customerId}</td>
                 <td>{item.orderType}</td>
                 <td>{item.ibsUserId}</td>
               </tr>
             ))}
           </tbody>
         </table>
       )
       )}
        </div>
        <div className='flexbox-products'>
        <div className='selectedproducts'>
        {response && (
          <table  className="productTable">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>AvailableForGroups</th>
                <th>ProductType</th>
              </tr>
            </thead>
            <tbody>
              {response.map((product) => (
                <tr key={product.ibsId}>
                  <td>{product.ibsId}</td>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.availableForGroups}</td>
                  <td>{product.productType}</td>
                </tr>
              ))}
            </tbody>
          </table>
           
          )}
      </div>
      </div>
      </>
   
  )
}

export default SelectedOrderData