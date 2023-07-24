import axios from 'axios'

export const GetProductsById = async () => {

  let apiResult = null; 
  let requestHeaders = {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json;charset=UTF-8',
   };
      try {
        const apiUrl = `http://internal-api.canaldigital.com/stage/cpm/v3/products/CDSE`;
        const response = await axios.get(apiUrl, {
          headers: requestHeaders,
      });
        apiResult = response;
      } catch (error) {
        console.error(error);
        apiResult = null;
      } 

  return apiResult; 
}
