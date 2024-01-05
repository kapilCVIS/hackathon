const get = require("./handlers/GET/getGPT");

module.exports = cds.service.impl(async function () {
  // this.on("runGpt", get.gpt);
  this.on("POST","GPT",get.getNumber);
  this.on("POST","GPT_DL",get.getDLNumber);
  this.on("POST","GPT_CONT",get.getContainer);
  // this.on("getRFLogs",get.getLogs);
  // this.on("GET","RFLOG",get.getLogs);
  // this.on("GET","USER_TRANS",get.getTrans);
  // this.on("GET","TIME_TRANS",get.getTimeTrans);
  // this.on("GET","USER_ACTVT_TIME",get.getActvtTime);
  // this.on("GET","TRANS_ACTVT",get.getTransActvt);
  // this.on("GET","STEP_TIME",get.getStepTime);
  // this.on("GET","RESOURCE_TIME",get.getResourceView);
});
