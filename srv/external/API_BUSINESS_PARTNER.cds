/* checksum : 320a43c1810a6c28733149da7cc77f91 */
@cds.external : true
@m.IsDefaultEntityContainer : 'true'
@sap.supported.formats : 'atom json xlsx'
service API_BUSINESS_PARTNER {};

@cds.external : true
@cds.persistence.skip : true
@sap.creatable : 'false'
@sap.updatable : 'false'
@sap.deletable : 'false'
@sap.pageable : 'false'
@sap.content.version : '1'
entity API_BUSINESS_PARTNER.BP_DetailsSet {
  @sap.unicode : 'false'
  @sap.label : 'Name2/First Nme'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  key McName2 : String(35) not null;
  @sap.unicode : 'false'
  @sap.label : 'Name 1/Last Nm'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  key McName1 : String(35) not null;
  @sap.unicode : 'false'
  @sap.label : 'Partner'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Partner : String(17) not null;
  @sap.unicode : 'false'
  @sap.label : 'House Number'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  HouseNum1 : String(10) not null;
  @sap.unicode : 'false'
  @sap.label : 'Street'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Street : String(60) not null;
  @sap.unicode : 'false'
  @sap.label : 'City'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  City1 : String(40) not null;
  @sap.unicode : 'false'
  @sap.label : 'Region'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  Region : String(3) not null;
  @sap.unicode : 'false'
  @sap.label : 'Postal Code'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  PostCode1 : String(10) not null;
  @sap.unicode : 'false'
  @sap.label : 'Telephone'
  @sap.creatable : 'false'
  @sap.updatable : 'false'
  @sap.sortable : 'false'
  @sap.filterable : 'false'
  TelNumber : String(30) not null;
};

