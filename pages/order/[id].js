import Layout from "@/components/Layout";
import { getError } from "@/utils/error";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useReducer } from "react";

function reducer (state, action){
    switch(action.type){
        case 'FETCH_REQUEST':
            return {...state, loading:true, error: ''};

        case 'FETCH_SUCCESS':
            return {...state, loading:false, order:action.payload, error:''};

        case 'FETCH_FAIL':
            return {...state, loading:false, error:action.payload};
            default:
                state;
    }
}
function OrderScreen(){

    //order/:id

    const {query} = useRouter();
    const orderId = query.id;

    const [
        {loading, error, order},
        dispatch,
    ] = useReducer(reducer,{
        loading:true,
        order:{},
        error:'',
    });
    useEffect (()=>{
        const fetchOrder = async ()=>{
          try{
            dispatch({type:'FETCH_REQUEST'});
          const {data}= await axios.get(`/api/orders/${orderId}`);
          dispatch({type: 'FETCH_SUCCESS', payload:data});
          } catch(err){
            dispatch({type:'FETCH_FAIL', payload:getError(err)});
          }
        };
        if(
            !order._id ||
            (order._id && order._id !== orderId)
        ){
            fetchOrder();
        }
        
    },[order, orderId]);
    
return (
    <Layout title={`Order ${orderId}`}>
      <h1 className="mb-4 text-xl">{`Order ${orderId}`}</h1>
      {loading? (<div>Loading...</div>):
      error? (
        <div className="alert-error">{error}</div>
      )}
    </Layout>
)
}

OrderScreen.auth = true;
export default OrderScreen;