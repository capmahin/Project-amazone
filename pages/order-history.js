import { getError } from "@/utils/error"
import axios from "axios";
import React, { useEffect, useReducer } from 'react'


function reducer(state, action){
    switch(action.type){
         case 'FETCH_REQUEST':
            return {...state,loading:true, error:''};
    }
}

export default function OrderHistoryScreen() {

    const [{loading, error, orders}, dispatch]= useReducer(reducer,{
        loading:true,
        orders:[],
        error:'',
    });
    useEffect(()=>{
        const fetchOrders = async ()=>{
            try{
               dispatch({type:'FETCH_REQUEST'});
               const {data} = await axios.get(`/api/orders/history`);
               dispatch({type: 'FETCH_SUCCESS', payload:data});
            } catch(err){
                dispatch({type: 'FETCH_FAIL', payload:getError(err)});
            }
        };

        fetchOrders();
    },[])
  return (
    <div>order-history</div>
  )
}
