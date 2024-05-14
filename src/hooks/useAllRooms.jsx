import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useAllRooms = () => {
    const { isPending, isRefetching, data, refetch } = useQuery({
        queryKey: ["allrooms"],
        queryFn: async () => {
            const {data} = await axios(`${import.meta.env.VITE_API_URL}/mybookedlist/${email}`)
            return data
        }
    })

    return { isPending, data, refetch, isRefetching }
};

export default useAllRooms;