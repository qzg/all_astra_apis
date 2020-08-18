const cassandra = require('cassandra-driver')
const Mapper = cassandra.mapping.Mapper

class TableMapper {
  // determine the names of all of the tables in the specified keyspace
  // and create a mapper_model
  constructor( client, keyspace ){
    this.client = client
    this.keyspace = keyspace
  }

  async build(){
    let mapper_model = {models:{}}
    const mappings = new DefaultTableMappings
    const tables_query = 'SELECT * FROM system_schema.tables WHERE keyspace_name=?'
    const tables_list = await this.client.execute( tables_query, [this.keyspace] )
    tables_list.forEach( table => {
      mapper_model.models[table] = {tables: [table], this.keyspace, mappings }
    })
    return new Mapper( client, mapper_model )
  }
}
