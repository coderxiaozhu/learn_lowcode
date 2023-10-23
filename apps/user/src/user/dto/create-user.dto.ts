import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @ApiProperty({ example: "xiaozhu" })
    name: string;

    @IsNotEmpty()
    @ApiProperty({ example: "小朱" })
    username: string;

    @ApiProperty({ example: "coderxiaozhu" })
    enName: string;
    
    @IsNotEmpty()
    @ApiProperty({ example: "" })
    email: string;

    @ApiProperty({ example: "" })
    avatar: string;

    @ApiProperty({ example: "" })
    mobile: string;

    @ApiProperty({ example: 1 })
    departmentId: number;
}
