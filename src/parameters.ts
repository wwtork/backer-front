export const baseUrls = {
    backerBaseUrl: 'http://wwt-b.ddns.net',
    // backerBaseUrl: 'http://backer.local'
    selfBaseUrl:  'http://wwt-bf.ddns.net'
};

export const parameters = {
    nodeIpsUrl: baseUrls.backerBaseUrl + '/rest/nodeips/getips',
    wddListUrl: baseUrls.backerBaseUrl + '/rest/wdd/dns_test',
    wddUpdateUrl: baseUrls.backerBaseUrl + '/rest/wdd/dns_test',
    apiUrl: baseUrls.backerBaseUrl + '/api/',
    afterLoginUri: '/connection-wizard',
    backerUrl: baseUrls.backerBaseUrl + '/api/secured/hard_login',
    interkassaReturnUrl: baseUrls.selfBaseUrl + '/connection-wizard',
};