import { Injectable } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { Task } from './domain/task';
import { v4 as uuidv4 } from 'uuid';
import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { marshall } from '@aws-sdk/util-dynamodb';

@Injectable()
export class TasksService {
    private ddb: DynamoDB;

    constructor(){
        this.ddb = new DynamoDB({region: 'eu-west-1'});
    }

    async create(task: TaskDTO): Promise<Task> {
        let taskRecord: Task;
        taskRecord = {...task, lastUpdateDate: new Date().toISOString()};
        this.ddb.putItem({
            TableName: 'todolistx_tasks',
            Item: marshall({...taskRecord, task_id: uuidv4()})
        })
        return taskRecord;
    }
}
