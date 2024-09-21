import { Task } from "../model/user.js";

export const UserDetails = async (req, res) => {
    const { name, email, password} = req.body;
    try {
        const getDetails = new Task({ name, email, password });
        await getDetails.save();
        res.status(200).json(getDetails);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}