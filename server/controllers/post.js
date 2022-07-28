import postmessage from "../models/postmodels.js";

export const getpost= async(req,res)=>{
try{
    const PostMesssage= await postmessage.find();
    console.log(PostMesssage)
    res.status(200).json(PostMesssage)

}
catch(error){

    res.status(404).json({messsage:error.messsage})
}
}
export const createpost=(req,res)=>{
    const post=req.body;
    const newpost=new postmessage(post)
    try{
        await newpost.save()
        res.status(201).json(newpost)

    }
    catch(error){
        res.status(404).json({messsage:error.messsage})


    }
}