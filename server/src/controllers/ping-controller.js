export const pingCheck = async (req, res) => {
  return res.status(200).json({
    message: "pong",
    success: true,
  });
};
