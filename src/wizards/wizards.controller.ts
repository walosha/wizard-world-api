import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WizardsService } from './wizards.service';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateWizardDto } from './dto/createWizardDto';

@ApiTags('wizard')
@Controller('wizards')
export class WizardsController {
  constructor(private readonly wizardsService: WizardsService) {}

  @Get()
  findAll() {
    return this.wizardsService.findAll();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of a wizard that exists in the database',
  })
  findOne(@Param('id') id: string) {
    return this.wizardsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create wizard' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({ type: CreateWizardDto })
  create(@Body() oCreateWizardDto: CreateWizardDto) {
    return this.wizardsService.create(oCreateWizardDto);
  }
  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    // type: Wizard,
  })
  update(@Param('id') id: string, @Body() updateWizardDto: any) {
    return this.wizardsService.update(id, updateWizardDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    // type: Wizard,
  })
  remove(@Param('id') id: string) {
    return this.wizardsService.remove(id);
  }
}
