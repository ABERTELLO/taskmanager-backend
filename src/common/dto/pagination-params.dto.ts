import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator'

export class PaginationParamsDto {
    @IsOptional()
    readonly filters?: object[]
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
}
