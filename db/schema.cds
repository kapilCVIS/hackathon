namespace sp.sam;

using {
    managed,
    cuid,
    User
} from '@sap/cds/common';

// entity RFLOG {
//     Resource            : String;
//     Created_On          : Date;
//     Created_At          : Time;
//     Creation_Time       : Decimal(10, 2);
//     Log_Activity_Desc   : String;
//     Log_Activity        : String;
//     User_Name           : String;
//     Logical_Transaction : String;
//     Log_Trans_Desc      : String;
//     Logical_Trans_Step  : String;
//     Step_Description    : String;
//     Message             : String;
//     Exception_Code      : String;
//     Reference_Obj_Type  : String;
//     Reference_Document  : String;
//     Message_ID          : String;
//     Message_Type        : String;
//     Message_Number      : String;
// }

// entity RESOURCE_TIME{
//     Resource            : String;
//     Creation_Time       : Decimal(10, 2);
//     Log_Trans_Desc    : String;
//     Step_Description:String
// }

// entity STEP_TIME {
//     Step_Description : String;
//     Resource         : String;
//     Creation_Time    : Decimal(10, 2);
// }

// entity USER_TRANS {
//     User_Name      : String;
//     Log_Trans_Desc : String;
//     Step_Description    : String;
//     Creation_Time    : Decimal(10, 2);

// }

// entity TIME_TRANS {
//     AVG_TIME_PER_TRANS : Decimal(10, 2);
//     USER_NAME          : String;
//     Log_Trans_Desc     : String
// }

// entity USER_ACTVT_TIME {
//     TOT_ACTVT_TIME    : Decimal(10, 2);
//     Log_Activity_Desc : String;
//     Log_Activity      : String;
//     User_Name         : String;
// }

// entity TRANS_ACTVT {
//     Log_Activity_Desc   : String;
//     actvt_count         : Integer;
//     LOGICAL_TRANSACTION : String;
// }
