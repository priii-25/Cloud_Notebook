//passed as second arguemnt in func for routes
const jwt = require("jsonwebtoken");
const JWT_SECRET = "priiiherebro";

const fetchuser = (req, res, next) => {
  //get user form the jwt token and add id and append req obj
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "please authenticate using a valid token" });
  }
  try {
    const string = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "please authenticate using a valid token" });
  }
};
module.exports = fetchuser;
