const TextAnalyzerService = require('../services/TextAnalyzerService');

module.exports = async (req, res) => {
  const { input } = req.body;
  const analyzer = new TextAnalyzerService();
  const result = await analyzer.analyze(input);

  res.render('index.html', {
    input,
    result,
  });
};
