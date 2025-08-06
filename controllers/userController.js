
import UserModel from '../models/userModel.js'
export async function registerUser(req,res){
    try {

        const {email,username} = req.body
       console.log(req.body);
       
        if(!email||!username){
            return res.status(400).json({message:"please enter email and user name "})
        }

        const userExist = await  UserModel.findOne({email});

        if(userExist){
            return res.status(400).json({message:"user already exist"})
        }

        const newUser = await UserModel.create({email,username});
        return res.status(201).json({message:"user register successfully",newUser})
        
    } catch (error) {
        console.log(error.message);
       return res.status(500).json({message:error.message}) 
    }
    
}

export async function login(req,res) {
    try {

        const {email} = req.body;
        console.log(req.body);
        
        if(!email){
            return res.status(400).json({message:"please enter email"})
        }

        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(400).json({message:"User not Exist"})
        }
        res.status(200).json({message:"user login successfully",user})
  
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:error.message})

    }
    
}