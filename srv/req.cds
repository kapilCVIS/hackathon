
using sp.sam as sp from '../db/schema';
using { API_BUSINESS_PARTNER as external } from './external/API_BUSINESS_PARTNER.cds';

@protocol: 'rest'
service root {
     
     entity CustomerLookup as projection on external.BP_DetailsSet;

     entity NewCustomer as projection on sp.NewCustomer;

     entity Address as projection on sp.Address;
     @open
     type object {};
     action connectMellisa(param:object) returns object;
}
