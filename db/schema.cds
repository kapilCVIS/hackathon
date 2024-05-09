namespace sp.sam;

using {
    managed,
    cuid,
    User
} from '@sap/cds/common';

entity NewCustomer
{
    key BusinessPartner : String;
        fname           : String;
        lname           : String;
        phone_no        : String;
        street1         : String;
        street2         : String;
        country         : String;
        city            : String;
        post_code       : String;
        bill_preference : String;
        email_communication : String;
        bpAddress: Association to Address;
     
}

entity Address  {
    key BusinessPartner : String;
    searchAddress : String;
    streetaddress: String;
    pincode: String;
    city: String;
    state: String;
    country:String;
    CO:String;
}
