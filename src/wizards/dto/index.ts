import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class WizardDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  id: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  lastname: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  description: string;
}

export class WizardIdDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  id: string;
}

export class CreateWizardDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  lastname: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  description: string;
}

export class UpdateWizardDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  lastname: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  description: string;
}
