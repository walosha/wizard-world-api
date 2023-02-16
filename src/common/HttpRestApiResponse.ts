import { ApiProperty } from '@nestjs/swagger';

export class HttpRestApiResponse {
  @ApiProperty({ type: 'string' })
  public id: number;
}
