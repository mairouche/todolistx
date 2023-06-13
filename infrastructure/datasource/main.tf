resource "aws_dynamodb_table" "datasource" {
    name = var.ddb_table_name
    billing_mode = "PROVISIONED"
    read_capacity = "5"
    write_capacity = "5"
    hash_key = var.ddb_table_hashkey_name

    attribute {
        name = var.ddb_table_hashkey_name
        type = "S"
    }
}