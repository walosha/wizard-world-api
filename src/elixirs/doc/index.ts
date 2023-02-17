import { ApiProperty } from '@nestjs/swagger';
import { HttpRestApiResponse } from 'src/common/HttpRestApiResponse';
import { Difficulty } from '../types';

export class HttpRestApiModelElixir {
  @ApiProperty({ type: 'string' })
  public name: string;

  @ApiProperty({ type: 'string', example: 'EASY' })
  public difficulty: Difficulty;
}

export class HttpRestApiResponseElixir extends HttpRestApiResponse {
  @ApiProperty({ type: HttpRestApiModelElixir })
  public data: HttpRestApiModelElixir;
}
