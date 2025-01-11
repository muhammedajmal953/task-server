const  { login, countryNames } = require ("../service/userService")


 async function loginController(req,res) {
    try {
        let { email, password } = req.body
        
        const result = login(email, password)
        
        if (!result.success) {
          return  res.status(400).json(result)
        }

       return res.status(200).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Severver error' })
        
    }
}

async function countryDetails(req,res){
  try {
    let { searchQuery,page } = req.query
    console.log(searchQuery,page);
    
    const contries=await countryNames(searchQuery,page)

    if (!contries.success) {
      return  res.status(400).json(contries)
    }
    return res.status(200).json(contries)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Severver error' })
  }
}

module.exports={loginController,countryDetails}