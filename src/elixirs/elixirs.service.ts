import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { createPaginator } from 'prisma/prisma.pagination';
import { Prisma, Wizard } from '@prisma/client';
const paginate = createPaginator({ perPage: 20 });

@Injectable()
export class ElixirsService {
  constructor(private prisma: PrismaService) {}
  async create(createElixirDto: Prisma.ElixerCreateInput) {
    return await this.prisma.elixer.create({ data: createElixirDto });
  }

  async findAll({
    page = 1,
    name = '',
    difficulty = '',
  }: {
    page: number;
    name: string;
    difficulty;
  }) {
    const difficultyQuery = difficulty
      ? {
          in: difficulty,
        }
      : {};

    return await paginate<Wizard, Prisma.ElixerFindManyArgs>(
      this.prisma.elixer,
      {
        orderBy: {
          id: 'desc',
        },
        where: {
          OR: [
            {
              name: {
                contains: name,
                mode: 'insensitive',
              },
              difficulty: difficultyQuery,
            },
          ],
        },
      },

      { page },
    );
  }

  async findOne(id: string) {
    return await this.prisma.elixer.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateElixirDto: Prisma.ElixerUpdateInput) {
    return await this.prisma.elixer.update({
      where: { id },
      data: updateElixirDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.elixer.delete({
      where: { id },
    });
  }
}
