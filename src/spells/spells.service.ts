import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { createPaginator } from 'prisma/prisma.pagination';
import { Prisma, Wizard } from '@prisma/client';
const paginate = createPaginator({ perPage: 20 });

@Injectable()
export class SpellsService {
  constructor(private prisma: PrismaService) {}

  async create(createSpellDto: Prisma.SpellCreateInput) {
    return await this.prisma.spell.create({
      data: createSpellDto,
      select: {
        id: true,
        name: true,
      },
    });
  }

  async findAll({ page = 1, name = '' }: { page: number; name: string }) {
    return await paginate<Wizard, Prisma.SpellFindManyArgs>(
      this.prisma.spell,
      {
        orderBy: {
          id: 'desc',
        },
        select: {
          id: true,
          name: true,
        },
        where: {
          OR: [
            {
              name: {
                contains: name,
                mode: 'insensitive',
              },
            },
          ],
        },
      },

      { page },
    );
  }

  async findOne(id: string) {
    return await this.prisma.spell.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
      },
    });
  }

  async update(id: string, updateSpellDto: Prisma.SpellUpdateInput) {
    return await this.prisma.spell.update({
      where: { id },
      data: updateSpellDto,
      select: {
        id: true,
        name: true,
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.spell.delete({
      where: { id },
    });
  }
}
