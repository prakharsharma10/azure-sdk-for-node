// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'matthchreastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://matthchreastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '2915bbd6-1252-405f-8173-6c00428146d9';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .post('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask/reactivate?api-version=2016-07-01.3.1')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Tue, 06 Sep 2016 23:57:33 GMT',
  etag: '0x8D3D6B19201C5E4',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'b11fbf9c-95e5-4542-8818-b7d63f889b17',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Tue, 06 Sep 2016 23:57:33 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://matthchreastus2.eastus2.batch.azure.com:443')
  .post('/jobs/HelloWorldJobNodeSDKTest/tasks/HelloWorldNodeSDKTestTask/reactivate?api-version=2016-07-01.3.1')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Tue, 06 Sep 2016 23:57:33 GMT',
  etag: '0x8D3D6B19201C5E4',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'b11fbf9c-95e5-4542-8818-b7d63f889b17',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Tue, 06 Sep 2016 23:57:33 GMT',
  connection: 'close' });
 return result; }]];