
const errorHandler = (err, req, res, next) => {
    console.error(err); 
  
  
    if (err.name === 'ValidationError') {
      return res.status(400).json({
        message: 'Validation error',
        details: err.errors,  
      });
    }
  
  
    if (err.name === 'MongoError') {
      return res.status(500).json({
        message: 'Database error',
        details: err.message,  
      });
    }
  
   
    res.status(500).json({
      message: 'Something went wrong!',
      details: err.message || err,
    });
  };
  
  export default errorHandler;
  