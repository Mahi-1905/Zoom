/*importing the mongoose library connect with database.
and interect with database.
*/
import  mongoose,{Schema}  from "mongoose";
/*we define the schema structure.and validation rule
for creating schema.
*/
const userScheme = new Schema (
    {

        name: {type:String,required:true},
        username:{type:String,required:true,unique:true },
        password:{type:String,required:true},
        token:{type:String ,required:true}
    }
) 


const User = mongoose.model("user",userScheme);

export {User};
