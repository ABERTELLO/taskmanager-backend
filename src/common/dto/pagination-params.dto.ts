// Dependencies
import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';


export class PaginationParamsDto {
    @IsOptional()
    readonly filters?: string
    @IsOptional()
    @IsNumber()
    @IsPositive()
    @Min(1)
    readonly limit?: number
    @IsOptional()
    @IsNumber()
    @IsPositive()
    @Min(1)
    readonly page?: number
};
