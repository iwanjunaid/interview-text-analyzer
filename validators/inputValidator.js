module.exports = (req, res, next) => {
  const { input } = req.body;
  const safeInput = input ? input.trim() : '';

  if (!safeInput.length) {
    return res.render('index.html', {
      error: `Input cannot be empty!`,
    });
  }
  
  if (safeInput.length > 255) {
    return res.render('index.html', {
      error: `Input cannot exceed 255 characters!`,
    });
  }

  req.body.input = safeInput;

  next();
};
