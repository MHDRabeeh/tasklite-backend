import todoModel from "../models/todoModel.js"
export async function createTodo(req,res) {
    try {
        console.log(req.body,"this is body ");
        
        const {title ,description,status,userId,priority,dueDate} = req.body
        if(!title||!dueDate){
           return res.status(400).json({success:false, message:"please fill the  filed Due date and title"})
        }
        if(!userId){
            return res.status(401).json({success:false,message:"user not found"})
        }

        const newTodo = await todoModel.create({title,description,status,user:userId,priority,dueDate});
        if(!newTodo){
            console.log();
            
            return res.status(401).json({success:false,message:"user not found"}) 
        }
        return res.status(201).json({success:true,message:"new todo created successfully",newTodo})

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:error.message})
        
        
    }
    
}
export async function updateTodo(req,res) {
    try {
        const {id} = req.params
        const {title,description,status,priority,dueDate} = req.body;

        if(!title || !dueDate){
            return res.status(400).json({success:false, message:"title and due data is required"})
        }
        const editTodo = await todoModel.findByIdAndUpdate(id,{title,description,status,priority,dueDate})
        // if(!editTodo){
        //     return res.status(404).json({message:"user not fount"});
        // }
       res.status(200).json({success:true, message:"todo updated successfully",editTodo})
        
    } catch (error) {
        return res.status(500).json({success:false, message:error.message});
    }
    
}

export async function deleteTodo(req,res) {
    try {
        const {id} = req.params
        const deleteTodo =await todoModel.findByIdAndDelete(id);
        if(!deleteTodo){
            return res.status(400).json({success:false, message:"todo not found"});
        }
        
        return res.status(200).json({ success:true,message:"todo deleted successfully"});

        
    } catch (error) {
        return res.status(500).json({success:false,message:error.message});
    }   
}
export async function getTodo(req,res) {
    try {
        const {id} = req.params;
        console.log(id,"kkkkkkkkkkk");
        
        if(!id){
            return res.status(400).json({success:false,message:"authentication required"})
        }
        const todo = await todoModel.find({user:id});
        if(!todo){
            return res.status(400).json({success:false, message:"user not found "})
        }
        res.status(200).json({success:true,todo})
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({success:false,message:`server error ${error.message}`})
        
    }
    
}
export  async function changeStatus(req,res) {
    try {
        const {id} = req.params;
        const {status} = req.body;

        if(!id){
            return res.status(400).json({success:false,message:"task id not provided"})
        }
        if(!status){
            return res.status(400).json({success:false,message:"status is not provided"})
        }
        const updatedTodo = await todoModel.findByIdAndUpdate(id,{status:status}, { new: true, runValidators: true })
        return res.status(200).json({success:true,message:`Todo marked as ${status}`,updatedTodo})
    } catch (error) {
        console.log(error);  
        return res.status(500).json({success:false,message:error.message})
    }
    
}

