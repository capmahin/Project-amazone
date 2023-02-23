import { getSession } from "next-auth/react";


const handler = async (req,res)=>{

    const session = await getSession({req});
    if(!session){
        return res.status(401).send('signin required');
    }
}

export default handler;