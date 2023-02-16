import CheckoutWizard from "@/components/CheckoutWizard"
import Layout from "@/components/Layout"
import React from 'react'

export default function PlaceOrderScreen() {
  return (
   <Layout title="Place Order">
    <CheckoutWizard activeStep={3} />

   </Layout>
  )
}
