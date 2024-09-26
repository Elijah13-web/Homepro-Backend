
export const authCheck =(req, res, next) =>{
    let isAuth =true;
    if (isAuth){
        console.log( "user authentification middleware running");
      
    }else{
        console.log(("user authentification middleware running"));
        // res.status(401).json({message: "unauthorized"});
        // return
        
    }
    next();
};

export const globalMiddleware = (req, res, next ) => {
    // return res.json ({message: "General middleware activated!"});
    console.log("Global middleware activated!");
    next();
    
};