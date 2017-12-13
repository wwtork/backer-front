export const baseUrls = {
  backerBaseUrl: 'http://wwt-b.ddns.net'
};

export const parameters = {
    nodeIpsUrl: baseUrls.backerBaseUrl + '/app_dev.php/rest/nodeips/getips',
    wddListUrl: baseUrls.backerBaseUrl + '/app_dev.php/rest/wdd/dns_test',
    wddUpdateUrl: baseUrls.backerBaseUrl + '/app_dev.php/rest/wdd/dns_test',
    apiUrl: baseUrls.backerBaseUrl + '/app_dev.php/api/',
    afterLoginUri: '/connection-wizard',
    backerUrl: baseUrls.backerBaseUrl + '/secured/hard_login'

};