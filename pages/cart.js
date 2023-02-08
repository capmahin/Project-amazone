import Layout from "@/components/Layout";
import { Store } from "@/utils/store"
import React, { useContext } from 'react'

export default function CartScreen() {

    const {state, dispatch} = useContext(Store);
    const {
        cart:{cartItems},
    } = state;
  return (
    <Layout title="Shopping Cart">

    </Layout>
}
