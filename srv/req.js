const get = require("./handlers/GET/getGPT");

module.exports = cds.service.impl(async function () {
  this.on("POST","NewCustomer",get.createCustomer);
  this.on("GET","NewCustomer",get.searchCustomer);

  this.on('connectMellisa', async (req) => {
    try {
        const res = await get.callMellisaAPI( req,this.entities );
    } catch (error) {
        console.error('Error in getErrorCount:', error.message);
    }
});

});
