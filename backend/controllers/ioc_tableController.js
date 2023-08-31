import User from "../models/ioc_tableModels.js";
 
export const getioctable = async(req, res) =>{
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
