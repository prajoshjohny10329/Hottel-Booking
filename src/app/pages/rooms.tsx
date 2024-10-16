import { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await axios.get('/api/rooms');
      setRooms(response.data);
    };
    fetchRooms();
  }, []);

  return (
    <div>
      <h1>Available Rooms</h1>
      {rooms.map(room => (
        <div key={room._id}>
          <h2>{room.name}</h2>
          <p>Price: ${room.price} / night</p>
          <p>{room.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;

