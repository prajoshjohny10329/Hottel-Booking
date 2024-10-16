import { useState } from 'react';
import axios from 'axios';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    guestName: '',
    roomName: '',
    checkInDate: '',
    checkOutDate: '',
    guests: 1,
    totalAmount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/bookings', formData);
      alert(response.data.message);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Room</h2>
      <label>Name:</label>
      <input name="guestName" onChange={handleChange} required />

      <label>Room Name:</label>
      <input name="roomName" onChange={handleChange} required />

      <label>Check-In Date:</label>
      <input type="date" name="checkInDate" onChange={handleChange} required />

      <label>Check-Out Date:</label>
      <input type="date" name="checkOutDate" onChange={handleChange} required />

      <label>Guests:</label>
      <input type="number" name="guests" onChange={handleChange} required />

      <button type="submit">Confirm Booking</button>
    </form>
  );
};

export default BookingPage;
