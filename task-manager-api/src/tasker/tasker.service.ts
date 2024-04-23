import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared';
import { CreateTaskerDto } from './dto/create-tasker.dto';

@Injectable()
export class TaskerService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateTaskerDto) {
    return this.prisma.tasker.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        active: createUserDto.active,
        password: createUserDto.passwords,
        createdAt: createUserDto.updatedAt,
        updatedAt: createUserDto.updatedAt,
      },
    });
  }

  findAll() {
    return this.prisma.tasker.findMany();
  }

  findOne(email: string) {
    return this.prisma.tasker.findFirst({where: {email: email}});
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
