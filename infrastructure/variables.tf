variable "ddb_table_name" {
    type = string
    description = "DDB Table Name for Todolistx"
    default = "todolistx_tasks"
}

variable "ddb_table_hashkey_name" {
    type = string
    description = "DDB Table Name for Todolistx"
    default = "task_id"
}