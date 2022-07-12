public with sharing class GetAllAccounts {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [select id,Name from Account ORDER BY Name];
    }
    @AuraEnabled(cacheable=true)
    public static List<Case> getCaseRecords(String Id){
        return [select CaseNumber from Case where AccountId = :Id];
    }
}
