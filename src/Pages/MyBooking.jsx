import 'reactjs-popup/dist/index.css';
import UpdateDate from "../components/UpdateDate";
import useUpateRoom from "../hooks/useUpateRoom";
import axios from 'axios';


const MyBooking = () => {

const {data,isPending,refetch}=useUpateRoom()

      if(isPending){
        return <h1 className="text-4xl">Loadeing ...........</h1>
      }
      
    const handelCancelRoom = async (id,bookId) => {
        console.log(id)
        try {
            const Availability = "Available"
            const { data } =await axios.patch(`${import.meta.env.VITE_API_URL}/availability/${bookId}`, { Availability })
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        if(isPending){
            return <h1 className="text-4xl">Loadeing ...........</h1>
          }
        const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/deletemybookedlist/${id}`)
        console.log(data)
        refetch()
    }
   
    return (
       
        <div className="container mx-auto">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Room</th>
                            <th>Room Size</th>
                            <th>Price per Night</th>
                            <th>Bookig Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            data?.map(room => <tr key={room._id}>
                                <td>
                                    <div className="avatar">
                                        <div className="mask w-12 h-12">
                                            <img src={room.bookImage} alt="bookImage" />
                                        </div>
                                    </div>
                                </td>
                                <td>

                                    <span >{room.bookSize}sqb</span>
                                </td>
                                <td>

                                    <span >${room.bookPrice}</span>
                                </td>
                                <td>

                                    <span >{new Date(room.startDate).toLocaleDateString()}</span>
                                </td>
                                <th className="flex gap-4">

                                    {/* delete booking*/}
                                    <button onClick={()=>handelCancelRoom(room._id,room.bookId)} className='p-4 bg-red-400'>Cancel</button>
                                    {/* update booking */}
                                   
                                    <UpdateDate room={room} ></UpdateDate>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBooking;