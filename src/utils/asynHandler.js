const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next))
    .catch((err) => next(err));
  };
};
export {asyncHandler}











// const asyncHandler = () => {}
// const asyncHandler  = () => () => {}
// const asyncHandler  = (fn) => async () => {}

// const asyncHandler = () => async (req , res , next) => {
//     try {
//         await fn(req , res , next)
//     } catch (error) {
//         req.status(error.code || 500).json({
//             success : false,
//             message : error.message,
//         })
//     }
// }
