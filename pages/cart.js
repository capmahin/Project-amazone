import Layout from "@/components/Layout";
import { Store } from "@/utils/store"
import Link from "next/link";
import React, { useContext } from 'react'

export default function CartScreen() {

    const {state, dispatch} = useContext(Store);
    const {
        cart:{cartItems},
    } = state;
  return (
    <Layout title="Shopping Cart">
     <h1 className="mb-4 text-xl">Shopping Cart</h1>
     {
        cartItems.length === 0 ?
        <div>
            Cart is empty. <Link href="/">Go shopping</Link>
        </div>
     }
    </Layout>
}
