sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageBox) {
        "use strict";

        return Controller.extend("com.enmax.createcustomer.controller.Main", {
            onInit: function () {
                this._oWizard = this.byId("wizard");
                var oModel = new sap.ui.model.json.JSONModel({
                    items: [
                        { Name: "Varun Ranjan", BPN:"1010000000", PN: "403-867-5309", SA: "172 Baldwin St, Toronto, ON M5T 1L8, Canada" },
                        { Name: "Tejo Ravi Kumar", BPN: "1010000001", PN: "123-456-1234", SA: "120 Dundas St W, Toronto, ON M5G 1C3, Canada" },
                        { Name: "Rajendra Mishra", BPN: "1010000002", PN: "123-456-8363", SA: "589 Parliament St, Toronto, ON M4X 1P8, Canada" },
                        { Name: "Sheri Lindsay", BPN: "1010000003", PN: "123-456-2232", SA: "420 Eglinton Ave W, Toronto, ON M5N 1A2, Canada" },
                        { Name: "Emily Williamson", BPN: "1010000004", PN: "123-456-7777", SA: "115 Harbord St, Toronto, ON M5S 1G7, Canada" }
                    ]
                });
                
                this.getView().setModel(oModel);
                this.byId("idProductsTable").bindRows("/items");
                
            },
            onPressCustomerSearch: function(){
                let fname = this.getView().byId("ib1b").getValue();
                let lname = this.getView().byId("ib2b").getValue();
                let name = fname+" "+lname;
                var oModel = this.getView().getModel();                
                this.filterByName(name,oModel);
                this.getView().setModel(oModel);
                this.byId("idProductsTable").bindRows("/items");

                this._oWizard.nextStep();
            },
           // onPressMellisa: function(){
           //    
           //     
           //     this._oWizard.nextStep();
           // },

            /////////////////////
            // Define a function to make the AJAX call
            onPressMellisa: function() {
                var that = this;
                this.getView().setBusy(true);
                let searchAddress = this.getView().byId("searchAddress").getValue();
                let streetAddress = this.getView().byId("streetAddress").getValue();
                let city = this.getView().byId("city").getValue();
                let province = this.getView().byId("province").getValue();
                let po = this.getView().byId("po").getValue();
                let country = this.getView().byId("country").getValue();
                let co = this.getView().byId("co").getValue();
                let LICENSE_KEY = 'lhMNrmXwqhftY0wtpQokeA**nSAcwXpxhQ0PC2lXxuDAZ-**';
                // Define the URL of the Mellisa API endpoint you want to call
                let apiUrl = `https://address.melissadata.net/v3/WEB/GlobalAddress/doGlobalAddress?id=` + LICENSE_KEY;
                  // Define query parameters
  
               
                    if(streetAddress){
                    apiUrl = apiUrl + '&a1=' +  streetAddress;
                    }
                    if(city){
                    apiUrl = apiUrl + '&loc=' +  city;
                    }
                    if(province){
                    apiUrl = apiUrl + '&admarea=' +  province;
                    }
                    if(country){
                    apiUrl = apiUrl + '&ctry=' +  country;
                    }
                    if(po){
                    apiUrl = apiUrl + '&postal=' +  po;    
                    }
                
                apiUrl = apiUrl + '&format=JSON';

                // AJAX call using jQuery
                $.ajax({
                    url: apiUrl,
                    method: "GET",
                    dataType: "json",
                    crossDomain: true, // Enable CORS
                    success: function(response) {
                        // Handle successful response
                        console.log("Data received:", response);
                        //MessageBox.success(JSON.stringify(response));
                        that.getView().setBusy(false);
                        var mellisamodel = new sap.ui.model.json.JSONModel();
                        mellisamodel.setData(response);
                        that.getView().setModel(mellisamodel,"mellisamodel");
                        that._oWizard.nextStep();
                        // Process the response data here
                    },
                    error: function(xhr, status, error) {
                        // Handle errors
                        console.error("Error occurred:", error);
                        // Display error message to the user or implement error handling logic
                    }
                });
            },
            // Filter function
            filterByName:function(sName,oModel) {
                var aItems = oModel.getProperty("/items");
                var aFilteredItems = aItems.filter(function(item) {
                    return item.Name.toLowerCase().indexOf(sName.toLowerCase()) !== -1;
                });
                oModel.setProperty("/items", aFilteredItems);
            },
            onPressGetAddress: function(){
                let address = this.getView().byId("idProductsTable").getModel().getData().items[0].SA;

                this.getView().byId("searchAddress").setValue(address);
                this.getView().byId("streetAddress").setValue(address.split(", ")[0]);
                this.getView().byId("city").setValue(address.split(", ")[1]);
                //this.getView().byId("province").getValue();
                this.getView().byId("po").setValue(address.split(", ")[2].replace(/ON|\s/g, ""));
                this.getView().byId("country").setValue(address.split(", ")[3]);
               //this.getView().byId("co").getValue();
                console.log();
                this._oWizard.nextStep();
            },
            onPressNext: function(){
                this._oWizard.nextStep();
            }
            /////////////////////
        });
    });
