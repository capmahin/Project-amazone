import Layout from "@/components/Layout"
import data from "@/utils/data";
import { useRouter } from "next/router"
import React from 'react'

export default function ProductScreen() {
  const {query} = useRouter();
  const {slug} = query;
  const product = data.products.find(x => x.slug === slug)
  return (
    <Layout title={product.name}></Layout>
  )
}
