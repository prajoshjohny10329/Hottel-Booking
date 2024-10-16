// pages/rooms.tsx
import { useEffect, useState } from 'react';
import Room from '@/models/Rooms'; // Adjust according to your path
import { connectMongo } from '@/lib/db';

// Define a TypeScript interface for the Room
interface RoomType {
  _id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  image: string;
}

const RoomsPage: React.FC = () => {

  const [rooms, setRooms] = useState<RoomType[]>([]); // Use the RoomType interface for state

  const fetchRooms = async () => {  
    const response = await fetch('/api/rooms/route');
    const data: RoomType[] = await response.json(); // Specify the type of data received
    setRooms(data);
  };
  
  useEffect(() => {
    fetchRooms();
  }, []);
  

  return (
    <div>
      <h1>Rooms</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {rooms.map((room) => (
          <div key={room._id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '300px' }}>
            <img src={room.image} alt={room.name} style={{ width: '100%', borderRadius: '8px' }} />
            <h2>{room.name}</h2>
            <p>{room.description}</p>
            <p>Price: ${room.price}</p>
            <p>Capacity: {room.capacity} {room.capacity > 1 ? 'guests' : 'guest'}</p>
            <button style={{ backgroundColor: '#4CAF50', color: 'white', border: 'none', padding: '10px', borderRadius: '5px' }}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;
