export const adminCheck =(req, res, next) =>{
    let isadminCheck =true;
    if (isadminCheck){
        console.log( "user authentification adminCheck running");
        res.json({message: "Admin authenticated!"})
      
    }else{
        console.log(("user authentification adminCheck running"));
        res.status(401).json({message: "unauthorized"});
        return
        
    }
    next();
};
