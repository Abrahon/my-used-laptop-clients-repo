import { useEffect, useState } from "react"

const AllBuyers = email =>{
    const [isBuyers, setIsBuyers] = useState(false);
    
    const [isBuyersLoading, setIsBuyersLoading] = useState(true)
    
    useEffect(()=>{
        if(email){
            fetch(`https://used-laptop-products-server.vercel.app/users/buyer/${email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setIsBuyers(data.isBuyers);
                setIsBuyersLoading(false);

            })
           
        }
        
     
        
    }, [email])
    return [isBuyers, isBuyersLoading]
}

export default AllBuyers;