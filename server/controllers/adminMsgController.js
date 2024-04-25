// adminMsgController.js
import AdminMsg from '../models/adminMsgModel.js';

const createAdminMessage = async (req, res) => {
    try {
        const { item, type, message, estimate } = req.body;
        const newAdminMsg = await AdminMsg.create({ item, type, message, estimate });
        res.status(201).json(newAdminMsg);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createAdminMessage };
