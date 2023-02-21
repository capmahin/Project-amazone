
async function handler(req,res){
     if(req.method !== 'POST'){
        return;
     }
     const {name,email,password} = req.body;
     if(
        !name ||
        !email ||
        !email.includes('@')||
        !password ||
        password.trim().length < 3
     ){
        res.status(422).json({
            message: 'Validation error',
        });
        return;
     }
}

export default handler;