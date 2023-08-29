require("dotenv").config();

const { expressjwt } = require("express-jwt");
const secret = 'aQ*_1+°¡aP';

const getToken = (req) => {
  const { authorization } = req.headers;

  if (authorization) {
    const [type, token] = authorization.split(" ");
    return type === "Token" || type === "Bearer" ? token : null;
  }
  return null;
};

const auth = expressjwt({
  secret,
  algorithms: ["HS256"],
  userProperty: "user",
  getToken,
});

module.exports = auth;
