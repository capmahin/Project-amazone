import CheckoutWizard from "@/components/CheckoutWizard"
import Layout from "@/components/Layout"
import React from 'react'

export default function PaymentScreen() {
  return (
    <Layout title="Payment Method">
       <CheckoutWizard activeStep={2} />
    </Layout>
  )
}
