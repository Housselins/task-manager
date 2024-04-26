import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        name: createUserDto.name,
        description: createUserDto.description,
        statusId: createUserDto.statusId,
        assignedTo: createUserDto.taskerId,
        endAt: createUserDto.endAt,
        active: true,
      },
    });
  }

  findAll() {
    return this.prisma.task.findMany();
  }

  findOne(id: number) {
    return this.prisma.task.findFirst({ where: { id: id } });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
