import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';
import { CreateTask } from './dto/task.dto';

@Injectable()
export class RedisService {
  async craeteTask(): Promise<any> {
    const redisClients = new Redis({
      host: '127.0.0.1',
      port: 6379,
    });

    // // Set key "myname" to have value "Simon Prickett".
    // await redisClient.set('mynames', 'Simon Prickett');

    // // Get the value held at key "myname" and log it.
    // const fetchValue = await redisClient.get('myname');
    // console.log(fetchValue);
    // const deletedValue = await redisClient.del('myname');
    // console.log(deletedValue);
    // // Disconnect from Redis.
    // redisClient.quit();
  }

  async createTask(createTaskDto: CreateTask) {
    const redisClients = new Redis({
      host: '127.0.0.1',
      port: 6379,
    });
    const { name, info } = createTaskDto;
    const result = await redisClients.set(name, info);
    return result;
  }
}
