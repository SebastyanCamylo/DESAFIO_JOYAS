export const queryReport = async (req, res, next) => {
  const params = req.params;
  const url = req.url;
  console.log(
    `Report from http://localhost:3000${url} whith parameter: `
    //params
  );
  next();
};
