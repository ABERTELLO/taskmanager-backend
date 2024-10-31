// Dependencies
import { IsBoolean, IsIn, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';


export class CreateNoteDto {
    @IsNotEmpty()
    @IsString()
    readonly author: string;
    @IsNotEmpty()
    @IsBoolean()
    readonly completed: boolean;
    @IsString()
    @IsOptional()
    readonly content?: string;
    @IsNotEmpty()
    @IsString()
    @Length(14)
    readonly date: string; // estimated completion date, format 'yyyymmddhhmmss'
    @IsNotEmpty()
    @IsString()
    @Length(14)
    readonly registrationDate: string; // format 'yyyymmddhhmmss'
    @IsNotEmpty()
    @IsIn(['regular', 'important', 'urgent', 'lapsed'])
    readonly status: string;
    @IsNotEmpty()
    @IsString()
    readonly title: string;
}
