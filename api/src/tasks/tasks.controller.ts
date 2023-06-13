import { Body, Controller, Post } from '@nestjs/common';
import { TaskVO } from './vo/task.vo';
import { TaskDTO } from './dto/task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private readonly taskService: TasksService){}

    @Post('/')
    async create(@Body() task: TaskDTO): Promise<TaskVO> {
        return this.taskService.create(task);
    }
}
