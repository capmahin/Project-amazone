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
    
    const {
        ShippingAddress,
        paymentMethod,
        orderItems,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        isPaid,
        paidAt,
        isDeliverd,
        deliverdAt,
    }= order;
return (
    <Layout title={`Order ${orderId}`}>
      <h1 className="mb-4 text-xl">{`Order ${orderId}`}</h1>
      {loading? (<div>Loading...</div>):
      error? (
        <div className="alert-error">{error}</div>
      ):
      (
        <div className="grid md:grid-cols-4 md:gap-5">
            <div className="overflow-x-auto md:col-span-3">
               <div className="card p-5">
                <h2 className="mb-2 text-lg">Shipping Address</h2>
                <div>
                    {ShippingAddress.fullName}, {ShippingAddress.address},{' '}
                    {ShippingAddress.city},{ShippingAddress.postCode},{' '} {ShippingAddress.country}
                </div>
                {isDeliverd?(
                    <div className="alert-success">Delivered at {deliverdAt}</div>
                ) : (
                    <div className="alert-error">Not delivered</div>
                )}
               </div>
               <div className="card p-5">
                <h2 className="mb-2 text-lg">Payment Method</h2>
                <div>{paymentMethod}</div>
                {isPaid?(
                    <div className="alert-success">Paid at{paidAt}</div>
                ):(
                    <div className="alert-error">Not paid</div>
                )

                }

               </div>
               <div className="card overflow-x-auto p-5">
                <h2 className="mb-2 text-lg">Order Items</h2>
                <table className="min-w-full">
                    <thead className="border-b">
                        <tr>
                            <th className="px-5 text-left">Item</th>
                            <th className="px-5 text-right">Quantity</th>
                            <th className="px-5 text-right">Price</th>
                            <th className="px-5 text-right">Subtotal</th>
                        </tr>
                    </thead>
                </table>
               </div>
            </div>
        </div>
      )}
    </Layout>
)
}

OrderScreen.auth = true;
export default OrderScreen;