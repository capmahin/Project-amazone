import { getError } from "@/utils/error"
import axios from "axios";
import React, { useEffect } from 'react'

export default function OrderHistoryScreen() {
    useEffect(()=>{
        const fetchOrders = async ()=>{
            try{
               dispatch({type:'FETCH_REQUEST'});
               const {data} = await axios.get(`/api/orders/history`);
            } catch(err){
                dispatch({type: 'FETCH_FAIL', payload:getError(err)});
            }
        }
    },[])
  return (
    <div>order-history</div>
  )
}
