import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CreateTask } from './dto/task.dto';
import { RedisService } from './redis.service';

@Controller()
export class RedisController {
  constructor(private readonly redisService: RedisService) {}

  @Post('task')
  @ApiResponse({
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        statusCode: { type: 'number', enum: [HttpStatus.BAD_REQUEST] },
      },
    },
    status: HttpStatus.BAD_REQUEST,
  })
  @ApiResponse({
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        statusCode: {
          type: 'number',
          enum: [HttpStatus.INTERNAL_SERVER_ERROR],
        },
      },
    },
    status: HttpStatus.INTERNAL_SERVER_ERROR,
  })
  @ApiResponse({
    schema: {
      type: 'object',
      properties: {
        message: { type: 'string' },
        statusCode: { type: 'number', enum: [HttpStatus.OK] },
      },
    },
    status: HttpStatus.OK,
  })
  async createTask(@Body() createTaskDto: CreateTask) {
    return this.redisService.createTask(createTaskDto);
  }
}
