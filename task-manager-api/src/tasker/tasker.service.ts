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
        active: true,
        password: createUserDto.password,
      },
    });
  }

  findAll() {
    return this.prisma.tasker.findMany();
  }

  async findOne(email: string, password: string) {
    // console.log('entra');
    const find = await this.prisma.tasker.findFirst({
      where: { email: email, password: password },
    });

    // console.log(find);

    return find;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
