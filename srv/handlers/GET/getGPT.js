const cds = require('@sap/cds');
const request = require('request');
const axios = require('axios');
let LICENSE_KEY = 'lhMNrmXwqhftY0wtpQokeA**nSAcwXpxhQ0PC2lXxuDAZ-**';
// Define the URL of the Mellisa API endpoint you want to call
let apiUrl = `https://address.melissadata.net/v3/WEB/GlobalAddress/doGlobalAddress?id=` + LICENSE_KEY;

//https://address.melissadata.net/V3/WEB/GlobalAddress/doGlobalAddress?id=LICENSE_KEY&a1=22382 Avenida Empresa&loc=Rancho Santa Margarita&admarea=CA&postal=92688&ctry=US&format=JSON

const createCustomer = async (req) => {
  
  const srv = await cds.connect.to("db");
  const { NewCustomer } = cds.entities
  insQuery = UPSERT.into(NewCustomer, req.data);
  tx = srv.tx();
  affectedRows = await tx.run(insQuery);
  await tx.commit();
  console.log('Registration Completed...');
  return req.data;
};

const searchCustomer = async (req) => {
  let fname = req.data.fname;
  let lname = req.data.lname;
  const srv = await cds.connect.to("db");
  const { NewCustomer } = cds.entities
  let query = SELECT.one.from(NewCustomer).where`fname=${fname} OR lname=${lname}`;
  let res = await srv.run(query);
  if (res !== null) {
    return res;
  } else {
  }
};

const callMellisaAPI = async (req) => {
  let result = {};
  let requestData = {};
  // Define query parameters
  
 if(req.data.param){
  if(req.data.param.a1){
   apiUrl = apiUrl + '&a1=' +  req.data.param.a1;
  }
  if(req.data.param.loc){
    apiUrl = apiUrl + '&loc=' +  req.data.param.loc;
  }
  if(req.data.param.admarea){
    apiUrl = apiUrl + '&admarea=' +  req.data.param.admarea;
  }
  if(req.data.param.ctry){
    apiUrl = apiUrl + '&ctry=' +  req.data.param.ctry;
  }
  if(req.data.param.postal){
    apiUrl = apiUrl + '&postal=' +  req.data.param.postal;    
  }
 } 
 apiUrl = apiUrl + '&format=JSON';

  const response = await axios({
      method: "get",
      url: apiUrl,
      data: requestData,
      headers: {
          "Accept": "application/json"
      }
  });
  result = response.data.Records;
  req.data.param.res = result;
  var res = req._.req.res;
  return res.send(req.data.param);
};


module.exports = {
  createCustomer,
  searchCustomer,
  callMellisaAPI
};
