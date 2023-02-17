import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { WizardDto } from 'src/wizards/dto';

export class SpellDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ required: true, type: () => WizardDto })
  @IsOptional()
  Wizard: WizardDto;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  wizardId: string;
}

export class CreateSpellDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty({ required: true, type: () => WizardDto })
  @IsOptional()
  Wizard: WizardDto;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  wizardId: string;
}
