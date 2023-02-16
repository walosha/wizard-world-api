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
import { ElixirsService } from './elixirs.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Difficulty } from './types';
import { HttpRestApiModelElixir, HttpRestApiResponseElixir } from './doc';
import { Prisma } from '@prisma/client';

@ApiTags('elixir')
@Controller('elixirs')
export class ElixirsController {
  constructor(private readonly elixirsService: ElixirsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all  Elixirs' })
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
  @ApiQuery({
    name: 'difficulty',
    required: false,
    enum: ['EASY', 'MEDIUM', 'HARD'],
  })
  async findAll(
    @Query('page') page: number,
    @Query('name') name: string,
    @Query('difficulty') difficulty: Difficulty,
  ) {
    const elixir = await this.elixirsService.findAll({
      page,
      name,
      difficulty,
    });
    return { data: elixir, message: 'Elixir successfully sent' };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a  Elixir' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of a Elixir that exists in the database',
  })
  async findOne(@Param('id') id: string) {
    const elixir = await this.elixirsService.findOne(id);
    return { data: elixir, message: 'An elixir successfully sent' };
  }

  @Post()
  @ApiOperation({ summary: 'Create Elixir' })
  @ApiBody({ type: HttpRestApiModelElixir })
  @ApiResponse({ status: HttpStatus.FORBIDDEN, description: 'Forbidden.' })
  async create(@Body() createElixirDto: Prisma.ElixerCreateInput) {
    const elixir = await this.elixirsService.create(createElixirDto);
    return { data: elixir, message: 'Elixir successfully created' };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update a  Elixir' })
  @ApiBody({ type: HttpRestApiModelElixir })
  @ApiResponse({ status: HttpStatus.OK, type: HttpRestApiResponseElixir })
  async update(
    @Param('id') id: string,
    @Body() updateElixirDto: Prisma.ElixerUpdateInput,
  ) {
    const elixir = await this.elixirsService.update(id, updateElixirDto);
    return { data: elixir, message: 'Elixir successfully updated' };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a  Elixir' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Forbidden.' })
  async remove(@Param('id') id: string) {
    await this.elixirsService.remove(id);
    return {
      status: HttpStatus.NO_CONTENT,
    };
  }
}
