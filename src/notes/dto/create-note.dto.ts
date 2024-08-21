import { IsBoolean, IsIn, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

const allowedStatus = ['regular', 'important', 'urgent', 'lapsed'];

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
    @IsIn(allowedStatus)
    readonly status: string; // regular, important, urgent, lapsed
    @IsNotEmpty()
    @IsString()
    readonly title: string;
}
