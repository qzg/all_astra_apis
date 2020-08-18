const cassandra = require('cassandra-driver')
const DefaultTableMappings = cassandra.mapping.DefaultTableMappings

/** globally shared configuration values **/

//const baseURL = "https://your-db-id-your-region.apps.astra.datastax.com" // something like: "https://38adb487-e5ae-4aa6-9549-f3c9eb189df5-us-east1.apps.astra.datastax.com"
const baseURL = "https://38adb487-e5ae-4aa6-9549-f3c9eb189df5-us-east1.apps.astra.datastax.com"
const restURL = baseURL + "/api/rest"
const gqlURL =  baseURL + "/api/graphql"
const secure_bundle_path = "/Users/kiyu.gabriel/Development/all_astra_apis/secure-connect-stuff.zip"
//const secure_bundle_path = "/Full/Path/to/your/secure-connect-bundle.zip"  // something like: "/Users/kiyu.gabriel/all_astra_apis/secure-connect-stuff.zip"

const keyspace = "stuff"
const username = "stuff_user"
const password = "stuff_password"


// this is consumed by the Mapper in utility.js
// See https://docs.datastax.com/en/developer/nodejs-driver/4.5/features/mapper/
// for complete information on how to use the mapper in Node.js
const mapper_model = {
  models: {
    'users':        { tables: ['users'], keyspace, mappings: new DefaultTableMappings },
    'user_devices': { tables: ['user_devices'], keyspace, mappings: new DefaultTableMappings },
    'activity_log': { tables: ['activity_log'], keyspace, mappings: new DefaultTableMappings }
  }
}

config = { baseURL, restURL, gqlURL, keyspace, username, password, secure_bundle_path, mapper_model }
module.exports = config
