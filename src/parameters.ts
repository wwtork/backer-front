export const baseUrls = {
    backerBaseUrl: 'http://backer-api.local/app_dev.php',
    // backerBaseUrl: 'http://backer.local'
    selfBaseUrl:  'localhost:4200'
};

export const parameters = {
    nodeIpsUrl: baseUrls.backerBaseUrl + '/rest/nodeips/getips',
    wddListUrl: baseUrls.backerBaseUrl + '/rest/wdd/dnstest',
    wddUpdateUrl: baseUrls.backerBaseUrl + '/rest/wdd/dnstest',
    apiUrl: baseUrls.backerBaseUrl + '/api/',
    afterLoginUri: '/connection-wizard',
    backerUrl: baseUrls.backerBaseUrl + '/api/secured/hardlogin',
    interkassaReturnUrl: baseUrls.selfBaseUrl + '/connection-wizard',
    getMethodsUri: 'secured/method/list',
    getTariffsUri: 'secured/tariff/list',
    checkAccessUri: 'secured/check-hosting-access',
    saveHostingSettingsUri: 'secured/save-hosting-settings',
    updateSiteSettingsUri: 'secured/update-site-settings',
    backupScanDataUri: 'secured/backupscan/status/',
    backupScanTerminateUri: 'secured/backupscan/terminate/',
    backupStartScanUri: 'secured/backupscan/init',
    firewallScanDataUri: 'secured/firewallscan/status/',
    firewallStartScanUri: 'secured/firewallscan/init',
    listDirectoryUri: 'secured/backupscan/listdir',
    requestTariffUri: 'secured/tariff/requesttariff/',
    buyUri: 'secured/payment/buy',
    defaultMethodUri: 'secured/method/default',
    payUri: 'secured/payment/pay',
    fileBackupUri: 'secured/backup/get_file_backup_info/{siteId}',
    dbBackupUri: 'secured/backup/get_db_backup_info/{siteId}',
    storageInfoUri: 'secured/backup/storage_info/{siteId}',
    changeFileBackupIntervalUri: 'secured/backup/change_file_backup_interval/{siteId}',
    changeDbBackupIntervalUri: 'secured/backup/change_db_backup_interval/{siteId}',
    changeStorageTimeUri: 'secured/backup/change_storage_time/{siteId}',
    createBackupUri: 'secured/backup/create_backup/{siteId}',
    messagesUri: 'secured/log/messages/{siteId}',
    uptimeUri: 'secured/reliability/uptime/{siteId}',
    fixedWebsiteUri: 'secured/reliability/fixed_website/{siteId}',
    hostingErrorsUri: 'secured/reliability/hosting_errors/{siteId}',
    cachedDynamicUri: 'secured/speed/cached_dynamic_count/{siteId}',
    cachedStaticUri: 'secured/speed/cached_static_count/{siteId}',
    blockedRequestsUri: 'secured/safety/blocked_requests/{siteId}',
    changesUri: 'secured/safety/changes/{siteId}',
    innerAntivirusUri: 'secured/safety/inner_antivirus/{siteId}',
    restoreBackupUri: 'secured/backup/restore_backup/{siteId}',
    scanInfoUri: 'secured/wsr/scan_info/{siteId}',
    acceleratedRequestsUri: 'secured/speed/accelerated_requests/{siteId}',
    monitoringUri: 'secured/reliability/uptime/{siteId}',
    getStorageLimitInfoUri: 'secured/backup/get_storage_limit_info',
    getTrafficLimitInfoUri: 'secured/speed/get_traffic_limit_info',
    loadSpeedUri: 'secured/speed/load_speed/{siteId}',
    changesControlUri: 'secured/safety/changes/{siteId}',
    chartUri: 'secured/speed/chart/{siteId}',
    sslUri: 'secured/safety/changes/{siteId}',
    webscanUri: 'secured/safety/webscan/{siteId}',
    getSiteListUri: 'secured/sites_list',
    getUserUri: 'secured/user',
    getTicketUri: 'secured/ticket/details/{ticketId}',
    ticketUpdateUri: 'secured/ticket/update/{ticketId}',
    ticketCreateUri: 'secured/ticket/create',
    getTicketListUri: 'secured/ticket/list',
    switchFixedFileUri: 'secured/safety/switch_fixed_file/{siteId}',
    fixedFileUri: 'secured/safety/fixed_file/{siteId}',
    getBackupListUri: 'secured/backup/list/{siteId}'
};