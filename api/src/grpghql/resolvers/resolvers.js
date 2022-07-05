import { users, quotes } from "../../../fakedb.js";
import { randomBytes } from 'crypto'
const resolvers={
    Query:{
        users:()=>users,
        user:(_,{id})=>users.find(user=>user.id==id),
        quotes:()=>quotes,
        uquote:(_,{id})=>quotes.filter(quote=>quote.by==id)
    },
    User:{
        quotes:(ur)=>quotes.filter(quote=>quote.by==ur.id)
    },
    Mutation:{
        signupUserDummy:(_,{UserNew})=>{
            const id =randomBytes(5).toString("hex")
            users.push({
                id,
                ...UserNew
            })

            return users.find(user=>user.id=id);
        }
    }
}

export default resolvers;