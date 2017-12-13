export const baseUrls = {
  backerBaseUrl: 'http://wwt-b.ddns.net'
};

export const parameters = {
    nodeIpsUrl: baseUrls.backerBaseUrl + '/rest/nodeips/getips',
    wddListUrl: baseUrls.backerBaseUrl + '/rest/wdd/dns_test',
    wddUpdateUrl: baseUrls.backerBaseUrl + '/rest/wdd/dns_test',
    apiUrl: baseUrls.backerBaseUrl + '/api/',
    afterLoginUri: '/connection-wizard',
    backerUrl: baseUrls.backerBaseUrl + '/api/secured/hard_login'

};