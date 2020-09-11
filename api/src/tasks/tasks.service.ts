import { Injectable } from '@nestjs/common';
import {Task} from "./tasks.model";

@Injectable()
export class TasksService {
    private tasks = [];

    getAllTasks(): Task[] {
        return this.tasks;
    }
}
