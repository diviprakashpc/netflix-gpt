import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    // contract is we dont need any information. WE just need to check if online/offline.
    const [onlineStatus,setOnlineStatus] = useState(true);
    useEffect(()=>{
        window.addEventListener('offline',() =>{
            setOnlineStatus(false)
        }) // We just want to add this event listener once.
    },[])

    window.addEventListener('online',() =>{
        setOnlineStatus(true)
    },[]) // We just want to add this event listener once.


    // return boolean
    return onlineStatus;
}


export default useOnlineStatus