import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { createPaginator } from 'prisma/prisma.pagination';
import { Prisma, Wizard } from '@prisma/client';

const paginate = createPaginator({ perPage: 20 });

@Injectable()
export class WizardsService {
  constructor(private prisma: PrismaService) {}

  async create(createWizardDto: Prisma.WizardCreateInput) {
    return await this.prisma.wizard.create({ data: createWizardDto });
  }

  async addSpellsToWizard(
    id,
    createWizardDto: Prisma.SpellCreateManyWizardInput,
  ) {
    return await this.prisma.wizard.update({
      where: id,
      data: {
        spells: {
          createMany: {
            data: createWizardDto,
          },
        },
      },
    });
  }

  async findAll({ page, search = '' }) {
    return await paginate<Wizard, Prisma.WizardFindManyArgs>(
      this.prisma.wizard,
      {
        orderBy: {
          id: 'desc',
        },
        where: {
          OR: [
            {
              firstname: {
                contains: search,
                mode: 'insensitive',
              },
            },
            {
              lastname: {
                contains: search,
                mode: 'insensitive',
              },
            },
          ],
        },
        include: {
          spells: true,
        },
      },

      { page },
    );
  }

  async findOne(id: string) {
    return await this.prisma.wizard.findUnique({
      where: { id },
      include: { spells: true },
    });
  }

  async update(id: string, updateWizardDto: Prisma.WizardUpdateInput) {
    return await this.prisma.wizard.update({
      where: { id },
      data: updateWizardDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.wizard.delete({
      where: { id },
    });
  }
}
