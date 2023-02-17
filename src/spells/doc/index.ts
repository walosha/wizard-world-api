import { ApiProperty } from '@nestjs/swagger';
import { HttpRestApiResponse } from 'src/common/HttpRestApiResponse';

export class HttpRestApiModelspells {
  @ApiProperty({ type: 'string' })
  public name: string;
}

export class HttpRestApiResponsespells extends HttpRestApiResponse {
  @ApiProperty({ type: HttpRestApiModelspells })
  public data: HttpRestApiModelspells;
}
