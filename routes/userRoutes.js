const { Router } =require( "express");
const { loginController, countryDetails } =require("../constroller/userController");

 const userRouter = Router()

userRouter.post('/login', loginController)
userRouter.get('/countries', countryDetails)


module.exports={userRouter}