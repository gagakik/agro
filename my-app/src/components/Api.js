import  axios from 'axios'


const Api = async () => {
    try {
      const response = await axios.get('http://213.131.37.250:8889/user/');
      // Process the response data here
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    return (
        <div>
        
        </div>
    )
  };
  
export default Api();

