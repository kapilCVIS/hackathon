// @protocol: 'rest'
using sp.sam as sp from '../db/schema';

service root {
    // @open
    // type object {};

    //  action runGpt(input : LargeString, inData:LargeString) returns LargeString;
     entity GPT as projection on sp.GPT; 
      entity GPT_DL as projection on sp.GPT_DL; 
       entity GPT_CONT as projection on sp.GPT_CONT; 
    // entity STEP_TIME as projection on sp.STEP_TIME;
    // entity RFLOG      as projection on sp.RFLOG;
    // entity USER_TRANS as projection on sp.USER_TRANS;
    // entity TIME_TRANS as projection on sp.TIME_TRANS;
    // entity USER_ACTVT_TIME as projection on sp.USER_ACTVT_TIME;
    // entity TRANS_ACTVT as projection on sp.TRANS_ACTVT;
    // entity RESOURCE_TIME as projection on sp.RESOURCE_TIME;
}
