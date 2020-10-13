import * as elasticsearch from 'elasticsearch'
 import * as httpAwsEs from 'http-aws-es'

 const esHost = process.env.ES_ENDPOINT

 const es = new elasticsearch.Client({
   hosts: [ esHost ],
   connectionClass: httpAwsEs
 })
