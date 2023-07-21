import React, { useState } from 'react';
import MainPage from '../../pages/MainPage';
import './TabComponent.css';
import Button from '../Common/Button/Button';
import OrderComponent from '../OrderComponent/OrderComponent';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
console.log(activeTab);
  return (
    <div>
      <div className='custom-tab'>
        <Button  title='Register' className='custom-button-register' onClick={() => handleTabChange('register')}  label="Register" />
        <Button title='Orders' className='custom-button-orders' onClick={() => handleTabChange('orders')}   label="Orders" />
        <Button title='Customers' className='custom-button-customers' onClick={() => handleTabChange('customers')}  label="Customers"  />
      </div>
      <div>
        {activeTab === 'register' ? (
          <MainPage />
        ) : activeTab === 'orders' ? (
            <OrderComponent />
        ) : activeTab === 'customers' ? ( <h1>This is the Customers Tab</h1>
        ) : ( <h1>Welcome</h1>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
