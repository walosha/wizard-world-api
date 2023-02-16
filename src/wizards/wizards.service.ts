import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateWizardDto } from './dto/createWizardDto';

@Injectable()
export class WizardsService {
  constructor(private prisma: PrismaService) {}
  async create(createWizardDto: CreateWizardDto) {
    return await this.prisma.wizard.create({ data: createWizardDto });
  }

  async findAll() {
    return await this.prisma.wizard.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.wizard.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateWizardDto: any) {
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
