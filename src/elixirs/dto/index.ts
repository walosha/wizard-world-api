import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, Matches } from 'class-validator';

export enum DIFFICULTY {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD',
}

export class ElixirDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsOptional()
  @Matches(
    `^${Object.values(DIFFICULTY)
      .filter((v) => typeof v !== 'number')
      .join('|')}$`,
  )
  difficulty: DIFFICULTY;
}

export class CreateElixirDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  name: string;
}
