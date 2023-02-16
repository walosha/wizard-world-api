import { ApiProperty } from '@nestjs/swagger';
import { HttpRestApiResponse } from 'src/common/HttpRestApiResponse';

export class HttpRestApiModelWizard {
  @ApiProperty({ type: 'string' })
  public firstname: string;

  @ApiProperty({ type: 'string' })
  public lastname: string;

  @ApiProperty({ type: 'string' })
  public description: string;
}

export class HttpRestApiResponseWizard extends HttpRestApiResponse {
  @ApiProperty({ type: HttpRestApiModelWizard })
  public data: HttpRestApiModelWizard;
}
