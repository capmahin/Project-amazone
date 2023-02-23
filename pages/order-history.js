import Layout from "@/components/Layout";
import { getError } from "@/utils/error"
import axios from "axios";
import React, { useEffect, useReducer } from 'react'


function reducer(state, action){
    switch(action.type){
         case 'FETCH_REQUEST':
            return {...state,loading:true, error:''};
            
          case 'FETCH_SUCCESS':
            return {...state, loading: false, orders:action.payload, error:''};
            
           case 'FETCH_FAIL':
            return {...state,loading:false, error:action.payload};
            
          default:
            return state;  
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
    <Layout title = "Order History">
        <h1>Order History</h1>
        {loading ? (
            <div>Loading...</div>
        ): error ?(
            <div className="alert-error">{error}</div>
        ):(
            <div className="overflow-x-auto">
             <table className="min-w-full">
              <thead className="border-b">

              </thead>
             </table>
            </div>
        )}

    </Layout>
  )
}
