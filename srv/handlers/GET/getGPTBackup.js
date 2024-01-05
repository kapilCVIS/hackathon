// const { Configuration, OpenAI } =require("openai");
// const fs = require('fs');
// const request = require('request');
// const axios = require('axios');

// async function analyzeImage(filePath,fileData) {
//   let imageData = fs.readFileSync(filePath);
//   const analyzeUrl = "https://opencvtesting.cognitiveservices.azure.com/computervision/imageanalysis:analyze?features=caption,read&model-version=latest&language=en&api-version=2023-02-01-preview";
//   const subscriptionKey = '5da14c4826514a32acbef5cdb09c4d42';

//   const headers = {
//       'Content-Type': 'application/octet-stream',
//       'Ocp-Apim-Subscription-Key': subscriptionKey,
//   };

//   const params = {
//       visualFeatures: 'Categories,Description,Color',
//   };

//   try {
//       const response = await axios.post(analyzeUrl, fileData, { headers, params });
//       return response.data;
//   } catch (error) {
//       console.error('Error analyzing image:', error.response ? error.response.data : error.message);
//       throw error;
//   }
//   return response.data;
// }

// const gpt = async (req) => {
//   var fileData = Buffer.from(req.data.inData,"base64");
//   let res = await analyzeImage('C:\\Users\\Yoga\\Desktop\\numberplate.jpg',fileData); 
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
//        // model: "gpt-3.5-turbo",
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

// //   const getLogs = async (req) => {
// //     const srv = await cds.connect.to('db');
// //         try {
// //             /** logic for inferred time*/
// //             let bdgData = [];
// //             const { RFLOG } = cds.entities;
// //             let rfQuery = SELECT
// //             .from(RFLOG)
// //             console.log('Fetching RFLogs Data....');
// //             let result = await srv.run(rfQuery);
// //             return result
// //             }
// //         catch (e) {
// //             req.reject(400, e);
// //         }
// //   };

// //   const getTrans = async (req) => {
// //     rec = {};
// //     record = [];
// //     const srv = await cds.connect.to('db');
// //         try {
// //             const { RFLOG } = cds.entities;
// //             let rfQuery = SELECT
// //             .columns('USER_NAME AS User_Name', 'Log_Trans_Desc AS Log_Trans_Desc','Step_Description AS Step_Description', 'ROUND( SUM(Creation_Time) / 3600 ,2 ) AS Creation_Time')
// //             .from(RFLOG)
// //             .groupBy('USER_NAME','Step_Description','Log_Trans_Desc');
// //             console.log('Fetching RFLogs Data....');
// //             let result = await srv.run(rfQuery);
// //             req.data = result;
// //             return req.data;
// //             }
// //         catch (e) {
// //             req.reject(400, e);
// //         }
// //   };

// //   const getTimeTrans = async (req) => {
// //     rec = {};
// //     record = [];
// //     const srv = await cds.connect.to('db');
// //         try {
// //             const { RFLOG } = cds.entities;
// //             let rfQuery = SELECT
// //             .columns('USER_NAME','Log_Trans_Desc','ROUND((AVG(CREATION_TIME) / 3600),2) AS AVG_TIME_PER_TRANS')
// //             .from(RFLOG)
// //             .groupBy('USER_NAME','Log_Trans_Desc')
// //             .orderBy('Log_Trans_Desc');
// //             console.log('Fetching RFLogs Data....');
// //             let result = await srv.run(rfQuery);
// //             req.data = result;
// //             return req.data;
// //             }
// //         catch (e) {
// //             req.reject(400, e);
// //         }
// //   };

// //   const getActvtTime = async (req) => {
// //     rec = {};
// //     record = [];
// //     const srv = await cds.connect.to('db');
// //         try {
// //             const { RFLOG } = cds.entities;
// //             let rfQuery = SELECT
// //             .columns('Log_Activity_Desc','Log_Activity','User_Name','ROUND((SUM(CREATION_TIME) / 3600),2) AS TOT_ACTVT_TIME')
// //             .from(RFLOG)
// //             .groupBy('Log_Activity_Desc','Log_Activity','User_Name')
// //             console.log('Fetching RFLogs Data....');
// //             let result = await srv.run(rfQuery);
// //             req.data = result;
// //             return req.data;
// //             }
// //         catch (e) {
// //             req.reject(400, e);
// //         }
// //   };

// //   const getTransActvt = async (req) => {
// //     rec = {};
// //     record = [];
// //     const srv = await cds.connect.to('db');
// //         try {
// //             const { RFLOG } = cds.entities;
// //             let rfQuery = SELECT
// //             .columns('Log_Activity_Desc','COUNT(Log_Activity_Desc) AS actvt_count','LOGICAL_TRANSACTION')
// //             .from(RFLOG)
// //             .groupBy('LOGICAL_TRANSACTION','Log_Activity_Desc')
// //             console.log('Fetching RFLogs Data....');
// //             let result = await srv.run(rfQuery);
// //             req.data = result;
// //             return req.data;
// //             }
// //         catch (e) {
// //             req.reject(400, e);
// //         }
// //   };


// //   const getStepTime = async (req) => {
// //     rec = {};
// //     record = [];
// //     const srv = await cds.connect.to('db');
// //         try {
// //             const { RFLOG } = cds.entities;
// //             let rfQuery = SELECT
// //             .columns('Step_Description','ROUND((SUM(Creation_Time) / 3600 ),2) AS Creation_Time','Resource')
// //             .from(RFLOG)
// //             .groupBy('Resource','Step_Description')
// //             console.log('Fetching RFLogs Data....');
// //             let result = await srv.run(rfQuery);
// //             req.data = result;
// //             return req.data;
// //             }
// //         catch (e) {
// //             req.reject(400, e);
// //         }
// //   };

// //   const getResourceView = async (req) => {
// //     rec = {};
// //     record = [];
// //     const srv = await cds.connect.to('db');
// //         try {
// //             const { RFLOG } = cds.entities;
// //             let rfQuery = SELECT
// //             .columns('Resource','ROUND((SUM(Creation_Time) / 3600 ),2) AS Creation_Time','Log_Trans_Desc','Step_Description')
// //             .from(RFLOG)
// //             .groupBy('Resource','Log_Trans_Desc','Step_Description')
// //             console.log('Fetching RFLogs Data....');
// //             let result = await srv.run(rfQuery);
// //             req.data = result;
// //             return req.data;
// //             }
// //         catch (e) {
// //             req.reject(400, e);
// //         }
// //   };

// module.exports = {
//   gpt,
//   // getLogs,
//   // getTrans,
//   // getTimeTrans,
//   // getActvtTime,
//   // getTransActvt,
//   // getStepTime,
//   // getResourceView
// };
