import httpStatus from "http-status";
import {User} from "../models/user.model.js";
import bcrypt,{hash} from "bcrypt";

//asynchrous function we make 
//beacause of repeation try and catch statement
import crypto from "crypto"

const login = async (req,res) => {

    const {username,password} = req.body;

    if(!username || !password) {

        return res.status(400).json({message:"please provide"})
    }

    try {

        const user = await User.findOne({username});

        if(!user) {
            return res.status(httpStatus.NOT_found).json({message})
        }
        
        let isPasswordCorrect = awaitbcrypt.compare(password,user.password)

        if(isPasswordCorrect)  {
            let token = crypto.randomBytes(20).toString("hex");
            user.token = token;
            await user.save();
            return res.status(httpStatus.ok).json({token:token})
         }

         else {

            return res.status(httpStatus.UNAUTHORIZED).json({message: "INvalid Username or password"})
         }

    }

    catch (e) {

        
        return res.status(500).json({ message: "Something went wrong: " + e.message });  
        
        
    }


}


const register = async(req,res) => {
    const {name,username,password} = req.body;

//you have asynchrous handeler 
//you should handel the function
//by using try catch you can handel the function


   try {

      const existingUser = await User.findOne({username});
       
      if(existingUser) {
         return res.status(httpStatus.FOUND).json({message:"User already exist"});
      }

       const  hashedpassword = await bcrypt.hash(password);
       
       const newUser = new User({
         name: name,
         username: username,
         password: hashedPassword

       });

       await newUser.save();

       res.status(httpStatus.CREATED).json({message:"User Registered"})


   }

   catch (e) {

      res.json({message:'Something went wrong ${e}'})

   }
    
}

export {login,register};
