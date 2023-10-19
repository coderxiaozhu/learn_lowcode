import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class AddUserDto {
  @ApiProperty({ example: 123, })
  id?: string;

  @ApiProperty({ example: 'xiaozhu' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '861353958@qq.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'coderxiaozhu' })
  @IsNotEmpty()
  username: string;
}
