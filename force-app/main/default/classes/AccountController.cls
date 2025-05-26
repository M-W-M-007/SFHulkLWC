public with sharing class AccountController {
@AuraEnabled (cacheable=true)
public static List<Account> getHighRevenueRecords(integer count){
    // try {
    //     return [SELECT Id, Name, AnnualRevenue, BillingState,BillingPostalCode, BillingCountry, BillingStreet, BillingCity FROM Account ORDER BY AnnualRevenue DESC NULLS LAST LIMIT 5 ];
    // } catch (Exception e) {
    //     throw new AuraHandledException(e.getMessage());
    // }
     try {
        return [SELECT Id, Name, AnnualRevenue, BillingState,BillingPostalCode, BillingCountry, BillingStreet, BillingCity FROM Account ORDER BY AnnualRevenue DESC NULLS LAST LIMIT :count];
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
}
}