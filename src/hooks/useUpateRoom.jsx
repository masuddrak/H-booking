import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";
import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";


const useUpateRoom = () => {
    const { user } = useContext(authContext)
    const AxiosSecure=useAxiosSecure()
    const email = user?.email
    const { isPending, isRefetching, data, refetch } = useQuery({
        queryKey: ["upadtebooking",email],
        enabled: !!email,
        queryFn: async () => {
            const {data} = await AxiosSecure(`${import.meta.env.VITE_API_URL}/mybookedlist/${email}`)
            return data
        }
    })

    return { isPending, data, refetch, isRefetching }
};

export default useUpateRoom;