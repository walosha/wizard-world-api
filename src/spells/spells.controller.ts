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
} from '@nestjs/common';
import { SpellsService } from './spells.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { HttpRestApiModelspells, HttpRestApiResponsespells } from './doc';
import { Prisma } from '@prisma/client';

@ApiTags('spell')
@Controller('spells')
export class SpellController {
  constructor(private readonly spellsService: SpellsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all  Spells' })
  @ApiQuery({
    name: 'page',
    type: Number,
    required: false,
  })
  @ApiQuery({
    name: 'name',
    type: String,
    required: false,
  })
  async findAll(@Query('page') page: number, @Query('name') name: string) {
    const spell = await this.spellsService.findAll({
      page,
      name,
    });
    return { data: spell, message: 'Spell successfully sent' };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a  Spell' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of a Spell that exists in the database',
  })
  async findOne(@Param('id') id: string) {
    const spell = await this.spellsService.findOne(id);
    return { data: spell, message: 'An Spell successfully sent' };
  }

  @Post()
  @ApiOperation({ summary: 'Create Spell' })
  @ApiBody({ type: HttpRestApiModelspells })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  async create(@Body() createSpellDto: Prisma.SpellCreateInput) {
    const Spell = await this.spellsService.create(createSpellDto);
    return { data: Spell, message: 'Spell successfully created' };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update a  Spell' })
  @ApiBody({ type: HttpRestApiModelspells })
  @ApiResponse({ status: HttpStatus.OK, type: HttpRestApiResponsespells })
  async update(
    @Param('id') id: string,
    @Body() updateSpellDto: Prisma.ElixerUpdateInput,
  ) {
    const spell = await this.spellsService.update(id, updateSpellDto);
    return { data: spell, message: 'Elixir successfully updated' };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a  Elixir' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Forbidden.' })
  async remove(@Param('id') id: string) {
    await this.spellsService.remove(id);
    return {
      status: HttpStatus.NO_CONTENT,
    };
  }
}
