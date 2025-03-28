import dotenv from 'dotenv';

dotenv.config();

const verifyUser = async (req, res, next) => {

    try {
        if (!req.session.admin) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        // Fetch user token and refresh time

        if (req.session.admin == false) {
            return res.status(403).json({ error: 'Invalid token' });
        }

        next(); // User is verified, proceed to next route handler
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

export default verifyUser;
