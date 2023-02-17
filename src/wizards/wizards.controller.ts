import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  Query,
  ParseUUIDPipe,
} from '@nestjs/common';
import { WizardsService } from './wizards.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  HttpRestApiModelWizard,
  HttpRestApiModelWizardSpells,
  HttpRestApiResponseWizard,
} from './doc';
import { Prisma } from '@prisma/client';
import { CreateWizardDto, UpdateWizardDto, WizardIdDto } from './dto';

@ApiTags('wizard')
@Controller('wizards')
export class WizardsController {
  constructor(private readonly wizardsService: WizardsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all  wizards' })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'search',
    required: false,
  })
  async findAll(@Query('page') page: number, @Query('search') search: string) {
    const wizrds = await this.wizardsService.findAll({ page, search });
    return { data: wizrds, message: 'Wizrds successfully sent' };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a  wizard' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of a wizard that exists in the database',
  })
  async findOne(@Param('id', ParseUUIDPipe) id: string) {
    const wizard = await this.wizardsService.findOne(id);
    return { data: wizard, message: 'A wizard successfully sent' };
  }

  @Post()
  @ApiOperation({ summary: 'Create wizard' })
  async create(@Body() createWizardDto: CreateWizardDto) {
    const wizard = await this.wizardsService.create(createWizardDto);
    return { data: wizard, message: 'Wizrds successfully created' };
  }

  @Post(':id/spell/:spellId')
  @ApiOperation({ summary: 'Add spell to  wizard' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of a wizard that exists in the database',
  })
  @ApiBody({ type: HttpRestApiModelWizardSpells })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  async addSpellToWizard(
    @Param('id') id: string,
    @Body() addSpellsToWizardDto: Prisma.SpellCreateManyWizardInput,
  ) {
    const wizard = await this.wizardsService.addSpellsToWizard(
      id,
      addSpellsToWizardDto,
    );
    return { data: wizard, message: 'Spell  successfully added to wizard' };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update a  wizard' })
  @ApiBody({ type: HttpRestApiModelWizard })
  @ApiResponse({ status: HttpStatus.OK, type: HttpRestApiResponseWizard })
  update(@Param('id') id: string, @Body() updateWizardDto: UpdateWizardDto) {
    return this.wizardsService.update(id, updateWizardDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a  wizard' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Forbidden.' })
  async remove(@Param('id') id: string) {
    return await this.wizardsService.remove(id);
  }
}
