import React, { useState } from 'react'
import axios from 'axios'

export const SearchOrderApi = async (fromDate, toDate) => {

  let apiResult = null; 
  let requestHeaders = {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json;charset=UTF-8',
   };
      try {
        const apiUrl = `http://internal-api.canaldigital.com/stage/order/v2/order/CDSE/orders/all?fromDate=${fromDate}&toDate=${toDate}`;
        const response = await axios .get(apiUrl, {
          headers: requestHeaders,
      });
        apiResult = response;
      } catch (error) {
        console.error(error);
        apiResult = null;
      } 

  return apiResult; 
}
