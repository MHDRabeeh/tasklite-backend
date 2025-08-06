import todoModel from "../models/todoModel.js"
export async function createTodo(req,res) {
    try {
        const {title ,description,status,userId,priority,dueDate} = req.body
        if(!title||!dueDate){
           return res.status(400).json({message:"please fill the  filed Due date and title"})
        }
        if(!userId){
            return res.status(401).json({message:"user not found"})
        }

        const newTodo = await todoModel.create({title,description,status,userId,priority,dueDate});
        return res.status(201).json({message:"new todo created successfully",newTodo})

        
    } catch (error) {
        return res.status(201).json({message:error.message})
    }
    
}
export async function updateTodo(req,res) {
    try {
        const {id} = req.body
        const {title,description,status,priority,dueDate} = req.body;

        if(!title || !dueDate){
            return res.status(400).json({message:"title and due data is required"})
        }
        const editTodo = await todoModel.findByIdAndUpdate(id,{title,description,status,priority,dueDate})
        if(!editTodo){
            return res.status(404).json({message:"user not fount"});
        }
       res.status(200).json({message:"todo updated successfully",editTodo})
        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
    
}

export async function deleteTodo(req,res) {
    try {
        const {id} = req.params
        const deleteTodo =await todoModel.findByIdAndDelete(id);
        if(!deleteTodo){
            return res.status(400).json({message:"todo not found"});
        }
        return res.status(200).json({message:"todo deleted successfully"});

        
    } catch (error) {
        return res.status(500).json({message:error.message});
    }   
}

