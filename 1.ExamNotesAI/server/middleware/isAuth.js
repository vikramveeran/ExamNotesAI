import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    let { token } = req.cookies;
    if (!token) {
      return res.status(400).json({ message: "token is not found" });
    }

    let verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken) {
      return res.status(400).json({ message: "user doesn't have valid token" });
    }

    // Safely retrieve user ID regardless of how the payload key was named
    req.userId = verifyToken.userId || verifyToken.id || verifyToken._id;
    next();
  } catch (error) {
    return res.status(500).json({ message: `is auth error ${error}` });
  }
};

export default isAuth;


