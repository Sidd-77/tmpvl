import axios from 'axios';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// Fetch Driver Activity Data
export const fetchDriverActivity = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/admin/driver-activity`);
    return response.data;
  } catch (error) {
    console.error('Error fetching driver activity:', error);
    return [];
  }
};


