export function errorHandler(err, req, res, next){
    if(res.headersSent){
        console.log('Youre already send response');
        return next();        
    }
    return res
    .status(505)
    .json({
        error: err.message,
        code: err.statusCode       
    })
}