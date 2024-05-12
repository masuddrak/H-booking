import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { authContext } from "../Providers/AuthProvider";


const useUpateRoom = () => {
    const { user } = useContext(authContext)
    const email = user?.email
    const { isPending, isRefetching, data, refetch } = useQuery({
        queryKey: ["upadtebooking",email],
        enabled: !!email,
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/mybookedlist/${email}`)
            return res.json()
        }
    })

    return { isPending, data, refetch, isRefetching }
};

export default useUpateRoom;