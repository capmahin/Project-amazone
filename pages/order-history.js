import { getError } from "@/utils/error"
import React, { useEffect } from 'react'

export default function OrderHistoryScreen() {
    useEffect(()=>{
        const fetchOrders = async ()=>{
            try{
               dispatch({type:'FETCH_REQUEST'});
            } catch(err){
                dispatch({type: 'FETCH_FAIL', payload:getError(err)});
            }
        }
    },[])
  return (
    <div>order-history</div>
  )
}
