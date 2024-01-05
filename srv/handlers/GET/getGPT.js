const { Configuration, OpenAI } = require("openai");
const fs = require('fs');
const request = require('request');
const axios = require('axios');
const { text } = require("express");
const tesseract = require("node-tesseract-ocr")
const base64 = require('base-64');

// async function analyzeImage(fileData) {
//   const analyzeUrl = "https://opencvtesting.cognitiveservices.azure.com/computervision/imageanalysis:analyze?features=caption,read&model-version=latest&language=en&api-version=2023-02-01-preview";
//   const subscriptionKey = '5da14c4826514a32acbef5cdb09c4d42';

//   const headers = {
//     'Content-Type': 'application/octet-stream',
//     'Ocp-Apim-Subscription-Key': subscriptionKey,
//   };
//   const params = {
//     visualFeatures: 'Categories,Description,Color',
//   };
//   try {
//     const response = await axios.post(analyzeUrl, fileData, { headers, params });
//     return response.data;
//   } catch (error) {
//     console.error('Error analyzing image:', error.response ? error.response.data : error.message);
//     throw error;
//   }
// }

// async function analyzeImageOCR(fileData) {
//   const config = {
//     lang: "eng", // default
//     oem: 3,
//     psm: 3,
//   }
//   try {
//     const text = await tesseract.recognize(fileData)
//     console.log("Result:", text)
//   } catch (error) {
//     console.log(error.message)
//   }
//   return text;
// }

async function encodeImage(imagePath) {
  // const imageFile = fs.readFileSync(imagePath);
  // return base64.encode(imageFile);
  const img = fs.readFileSync(imagePath);
  return Buffer.from(img).toString('base64');
}


async function analyzeImageOpenAI(fileData,sPrompt) {
  // return 'GJ02CG3862';
  // const d = "C:\\Users\\Yoga\\Desktop\\nunber_plate_3.png";
  // const encodeData = await encodeImage(imageLocal);
  const imageUrl = `data:image/jpeg;base64,${fileData}`;
  const ai = new OpenAI({ apiKey: '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' });
  // const ai = new OpenAI({ apiKey: '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' });
  const response = await ai.chat.completions.create({
    model: 'gpt-4-vision-preview',
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: sPrompt },
          {
            type: 'image_url',
            image_url: { url: imageUrl },
          },
        ],
      },
    ],
    max_tokens: 500,
  });

  // Extract JSON data from the response and remove Markdown formatting
  const jsonString = response.choices[0].message.content;
  const formattedJsonString = jsonString.replace('```json\n', '').replace('\n```', '');
  console.log(formattedJsonString);
  return formattedJsonString;
}

const getNumber = async (req) => {
  // var fileData = Buffer.from(req.data.imageData,"base64");
  var fileData = req.data.imageData;
  let res = await analyzeImageOpenAI(fileData,req.data.prompt);
  req.data.imageData = "";
  if ( req.data.flg == 'V'  ){
    req.data.VehicleNo = res;
  }
  if ( req.data.flg == 'C'  ){
    req.data.ContainerNo = res;
  }
  if ( req.data.flg == 'D'  ){
    res = JSON.parse(res);
    req.data.FullName = res.FullName;
    req.data.LicenseValidityDate = res.LicenseValidityDate;
    req.data.LicenseNumber = res.LicenseNumber;
    req.data.LicenseCategory = res.LicenseCategory;
  }
  return req.data;
  
  // let res = await analyzeImageOCR(fileData);
  const ai = new OpenAI({ apiKey: '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' });
  let sPrompt = req.data.prompt;
  let sText = res.readResult.content;

  const aMessages = [];

  let oMessage = {};
  oMessage.role = "system";
  oMessage.content = sPrompt;
  aMessages.push(oMessage);

  oMessage = {};
  oMessage.role = "user";
  oMessage.content = sText;
  aMessages.push(oMessage);

  try {
    var completion = await ai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: aMessages,
      temperature: 0
    });
    console.log(completion.choices[0].message.content);
  }
  catch (error) {
    console.log(error);
  }
  req.data.imageData = "";
  req.data.result = completion.choices[0].message.content;
  return req.data;
};

const getDLNumber = async (req) => {
  // var fileData = Buffer.from(req.data.imageData,"base64");
  var fileData = req.data.imageData;
  let res = await analyzeImageOpenAI(fileData,req.data.prompt);
  req.data.imageData = "";
  req.data.result = res;
  // req.data.imageData = "";
  // req.data.result = '789090901220909';
  return req.data
  
  // let res = await analyzeImageOCR(fileData);
  const ai = new OpenAI({ apiKey: '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' });
  let sPrompt = req.data.prompt;
  let sText = res.readResult.content;

  const aMessages = [];

  let oMessage = {};
  oMessage.role = "system";
  oMessage.content = sPrompt;
  aMessages.push(oMessage);

  oMessage = {};
  oMessage.role = "user";
  oMessage.content = sText;
  aMessages.push(oMessage);

  try {
    var completion = await ai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: aMessages,
      temperature: 0
    });
    console.log(completion.choices[0].message.content);
  }
  catch (error) {
    console.log(error);
  }
  req.data.imageData = "";
  req.data.result = completion.choices[0].message.content;
  return req.data;
};

const getContainer = async (req) => {
  // var fileData = Buffer.from(req.data.imageData,"base64");
  // var fileData = req.data.imageData;
  // let res = await analyzeImageOpenAI(fileData);
  // req.data.imageData = "";
  // req.data.result = res;
  req.data.imageData = "";
  req.data.result = 'ASC909080';
  return req.data
  
  // let res = await analyzeImageOCR(fileData);
  const ai = new OpenAI({ apiKey: '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' });
  let sPrompt = req.data.prompt;
  let sText = res.readResult.content;

  const aMessages = [];

  let oMessage = {};
  oMessage.role = "system";
  oMessage.content = sPrompt;
  aMessages.push(oMessage);

  oMessage = {};
  oMessage.role = "user";
  oMessage.content = sText;
  aMessages.push(oMessage);

  try {
    var completion = await ai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: aMessages,
      temperature: 0
    });
    console.log(completion.choices[0].message.content);
  }
  catch (error) {
    console.log(error);
  }
  req.data.imageData = "";
  req.data.result = completion.choices[0].message.content;
  return req.data;
};

// const gpt = async (req) => {
//   var fileData = Buffer.from(req.data.inData,"base64");
//   let res = await analyzeImage(fileData); 
//   const ai = new OpenAI({ apiKey: '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' });
//   let sPrompt =  req.data.input;
//   let sText   =  res.readResult.content;

//   const aMessages = [];

//   let oMessage = {};
//   oMessage.role = "system";
//   oMessage.content = sPrompt;
//   aMessages.push(oMessage);

//   oMessage = {};
//   oMessage.role = "user";
//   oMessage.content = sText;
//   aMessages.push(oMessage);

//   try {
//     var completion = await ai.chat.completions.create({
//        model: "gpt-3.5-turbo",
//        messages: aMessages,
//        temperature: 0
//    }); 
//    console.log(completion.choices[0].message.content);
// }
// catch (error) {
//    console.log(error);
// }
//   return completion.choices[0].message.content;
// };

module.exports = {
  // gpt,
  getNumber,
  analyzeImageOpenAI,
  getContainer,
  getDLNumber
};
