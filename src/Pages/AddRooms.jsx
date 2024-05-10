import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import axios from "axios";

const AddRooms = () => {
    const { user } = useAuth()
    const {
        register,
        handleSubmit,
    } = useForm()



    const heldelRegister = (room) => {

        try {
            const { data } = axios.post(`${import.meta.env.VITE_API_URL}/addroom`,room)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        console.table(room)

    }



    return (
        <div className="bg-base-content glass">
            <div className="text-base-content container mx-auto py-10">
                <div>
                    <h3 className="text-white text-4xl text-center font-bold">Add Rooms H-Bookings</h3>
                </div>
                <form onSubmit={handleSubmit(heldelRegister)} className="space-y-6 mt-10">
                    <div className="grid grid-cols-2 gap-10">

                        <div className="space-y-1 text-sm">
                            <label htmlFor="Name" className="block text-white">Price per Night</label>
                            <input type="number" {...register("Price")} placeholder="Price per Night" required className="w-full px-2 outline-0 py-4 border-b-[1px] border-gray-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="Name" className="block text-white">Room Size</label>
                            <input type="number" {...register("Size")} placeholder="Room Size" required className="w-full px-2 outline-0 py-4 border-b-[1px] border-gray-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="Name" className="block text-white">Availability</label>
                            <input type="text" {...register("Availability")} defaultValue={"Available"} placeholder="Availability" required className="w-full px-2 outline-0 py-4 border-b-[1px] border-gray-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="Name" className="block text-white">Room Images 1</label>
                            <input type="url" {...register("images1")} placeholder="Room Images 1" required className="w-full px-2 outline-0 py-4 border-b-[1px] border-gray-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="Name" className="block text-white">Room Images 2</label>
                            <input type="url" {...register("images2")} placeholder="Room Images 2" required className="w-full px-2 outline-0 py-4 border-b-[1px] border-gray-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="Name" className="block text-white">Room Images 3</label>
                            <input type="url" {...register("images3")} placeholder="Room Images 3" required className="w-full px-2 outline-0 py-4 border-b-[1px] border-gray-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="Name" className="block text-white">Special Offers</label>
                            <input type="text" {...register("Offers")} placeholder="Special Offers" required className="w-full px-2 outline-0 py-4 border-b-[1px] border-gray-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="Name" className="block text-white"> User Name </label>
                            <input type="text" {...register("name")} placeholder="User Name" required className="w-full px-2 outline-0 py-4 border-b-[1px] border-gray-400" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="Name" className="block text-white"> User Email</label>
                            <input type="email" {...register("email")} defaultValue={user?.email} readOnly placeholder="User Email" className="w-full px-2 outline-0 py-4 border-b-[1px] border-gray-400" />
                        </div>
                        <div className="space-y-1 text-sm col-span-full">
                            <label htmlFor="Name" className="block text-white">Room Description</label>
                            <textarea type="text" {...register("Description")} rows={5} required placeholder="Description" className="w-full px-2 outline-0 py-4 border-b-[1px] border-gray-400" />
                        </div>

                    </div>

                    <button className="block w-full p-3 text-center rounded-sm bg-base-content text-white">Add Room</button>
                </form>
            </div>
        </div>
    );
};

export default AddRooms;