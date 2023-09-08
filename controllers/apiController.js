// controllers/apiController.js
// Define the controller logic for your API endpoints
exports.getGreet = (req, res) => {
    res.send('Good Morning Dear User from NodeJS Server!');
  };
  
  exports.createProduct = (req, res) => {
    res.json({ message: 'Product created successfully' });
  };
  