import { useEffect, useState } from "react";
import axios from "axios";
import Room from "../components/Room";


const Rooms = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        const fackData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/allrooms`)
            setRooms(data)
        }
        fackData()
    }, [])

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-10">
                {
                    rooms.map(room => <Room key={room._id} room={room}></Room>)
                }
            </div>

        </div>
    );
};

export default Rooms;