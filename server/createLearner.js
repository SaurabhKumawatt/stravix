// createLearner.js
const axios = require('axios');
const qs = require('qs');

const createLearner = async () => {
  try {
    const response = await axios.post(
      'https://api.ongraphy.com/public/v1/learners',
      qs.stringify({
        mid: 'karan1384', // <-- Replace with your MID
        key: '37e6b600-476c-49b8-86dc-bac712f597ac', // <-- Replace with your API Key
        email: 'testuser123@stravix.in',
        name: 'Test User',
        password: '12345678',
        mobile: '+919999999999',
        sendEmail: true,
        customFields: JSON.stringify({ Gender: 'M' }),
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    console.log('✅ Learner Created Successfully:', response.data);
  } catch (error) {
    console.error('❌ Error Creating Learner:', error.response?.data || error.message);
  }
};

createLearner();
