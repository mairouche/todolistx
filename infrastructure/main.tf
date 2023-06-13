provider "aws" {
    region = "eu-west-1"
}

module "datasource" {
    source =   "./datasource"
    ddb_table_name = var.ddb_table_name
    ddb_table_hashkey_name = var.ddb_table_hashkey_name
}