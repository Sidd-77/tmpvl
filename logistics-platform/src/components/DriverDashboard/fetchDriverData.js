import axios from 'axios';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
// Fetch new (pending) requests
export const fetchNewRequests = async (setNewRequests) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/drivers/pending-bookings`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      if (response.ok) {
        setNewRequests(data.pendingBookings);  // Assuming `pendingBookings` is the correct response key
      } else {
        console.error('Error fetching new requests:', data.message);
      }
    } catch (error) {
      console.error('Error fetching new requests:', error);
    }
  };
  
  // Fetch active jobs (bookings with status: active)
  export const fetchActiveJobs = async (setActiveJobs, driverId) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/drivers/active-bookings/${driverId}`);
      const data = await response.json();
      
      if (response.ok) {
        setActiveJobs(data.activeBookings); // Set active jobs in the state
      } else {
        console.error('Error fetching active jobs:', data.message);
      }
    } catch (error) {
      console.error('Error fetching active jobs:', error);
    }
  };
  
  // Fetch completed jobs (bookings with status: delivered)
  export const fetchCompletedJobs = async (setCompletedJobs, driverId) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/drivers/completed-bookings/${driverId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
      if (response.ok) {
        setCompletedJobs(data.completedBookings);  // Assuming `completedBookings` is the correct response key
      } else {
        console.error('Error fetching completed jobs:', data.message);
      }
    } catch (error) {
      console.error('Error fetching completed jobs:', error);
    }
  };
  
  // Update job (booking) status
  export const updateJobStatus = async (bookingId, newStatus, vehicleType) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/drivers/update-status`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bookingId, status: newStatus, vehicleType}),  // Send bookingId and new status
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log('Booking status updated:', data.booking);
      } else {
        console.error('Failed to update status:', data.message);
      }
    } catch (error) {
      console.error('Error updating job status:', error);
    }
  };
  
  export const fetchVehicleDemand = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/vehicle-demand`); // Adjust the API route accordingly
      const data = await response.json();
      console.log('Vehicle demand data:', data); // Check the data in the console
      return data;
    } catch (error) {
      console.error('Error fetching vehicle demand data:', error);
    }
  };
  