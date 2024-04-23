// const asyncHandler = (func) => async (req, res, next) => {
//   try {
//     await func(req, res, next)
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message
//     })
//   }
// };
// export default asyncHandler;



/* Second method to make a request handler */

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
  }
};

export default asyncHandler;




// // Type of making higher order function
// const asyncHandler = () => {};
// const asyncHandler = (func) => () => {};
// const asyncHandler = (func) => async () => {};