require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5001;

const IS_SANDBOX = false; // Set to false for Production
const TOKEN_URL = IS_SANDBOX ? 'https://uat-accounts.payu.in/oauth/token' : 'https://accounts.payu.in/oauth/token';
const PAYMENT_LINK_URL = IS_SANDBOX ? 'https://uatoneapi.payu.in/payment-links' : 'https://oneapi.payu.in/payment-links';

app.post('/api/payu/create-payment-link', async (req, res) => {
  const { amount, name, email, phone, courseTitle } = req.body;

  try {
    // 1. Get OAuth Token from PayU
    const tokenParams = new URLSearchParams();
    tokenParams.append('grant_type', 'client_credentials');
    tokenParams.append('client_id', process.env.VITE_PAYU_CLIENT_ID);
    tokenParams.append('client_secret', process.env.VITE_PAYU_CLIENT_SECRET);
    tokenParams.append('scope', 'create_payment_links');

    const tokenResponse = await axios.post(
      TOKEN_URL,
      tokenParams,
      { 
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
          'Accept': 'application/json'
        } 
      }
    );

    const accessToken = tokenResponse.data.access_token;

    // 2. Create the Payment Link
    const paymentLinkData = {
      subAmount: amount,
      isPartialPaymentAllowed: false,
      description: "Payment for " + (courseTitle || "Course Registration"),
      source: "API",
      currency: "INR",
      customer: {
        name: name,
        phone: phone,
        email: email
      },
      successUrl: "https://www.pmiservices.org/accessibility-statement",
      failureUrl: "https://www.pmiservices.org/accessibility-statement"
    };

    const linkResponse = await axios.post(
      PAYMENT_LINK_URL,
      paymentLinkData,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'mid': process.env.VITE_PAYU_MERCHANT_ID || '',
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
          'Accept': 'application/json'
        }
      }
    );

    // 3. Return the Payment Link URL to the React frontend
    if (linkResponse.data && linkResponse.data.result && linkResponse.data.result.paymentLink) {
      res.json({ success: true, url: linkResponse.data.result.paymentLink });
    } else {
      console.log("PayU Response:", linkResponse.data);
      res.json({ success: false, error: 'Could not extract Payment Link from PayU response' });
    }

  } catch (error) {
    console.error("PayU Error Details:", error.response ? error.response.data : error.message);
    res.status(500).json({ 
      success: false, 
      error: 'Payment Gateway Error', 
      details: error.response ? error.response.data : error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend Server running securely on http://localhost:${PORT}`);
});
