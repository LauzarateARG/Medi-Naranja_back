module.exports = {
    secret:process.env.AUTH_SECRET||"-Z4r4t3-",
    expires:process.env.AUTH_EXPIRES||"1d",
    rounds:process.env.AUTH_ROUNDS||10
}