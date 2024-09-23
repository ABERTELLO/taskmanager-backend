export interface CreateNoteInterface {
    readonly author: string;
    readonly completed: boolean;
    readonly content?: string;
    readonly date: string; // estimated completion date, format 'yyyymmddhhmmss'
    readonly registrationDate: string; // format 'yyyymmddhhmmss'
    readonly status: string; // regular, important, urgent, lapsed
    readonly title: string;
}