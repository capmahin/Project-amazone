import NextAuth from 'next-auth';

export default NextAuth({
    session:{
        strategy:'jwt',
    },
    callbacks:{
        async jwt(){
            
        }
    }

});