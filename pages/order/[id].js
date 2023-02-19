import Layout from "@/components/Layout";
import { useRouter } from "next/router";

function OrderScreen(){

    const {query} = useRouter();
    const orderId = query.id;
return (
    <Layout title={`Order ${orderId}`}>

    </Layout>
)
}

OrderScreen.auth = true;
export default OrderScreen;