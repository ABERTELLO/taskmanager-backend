export interface CreateNoteInterface {
    author: string;
    completed: boolean;
    content: string;
    date: string; // estimated completion date, format 'yyyymmddhhmmss'
    registrationDate: string; // format 'yyyymmddhhmmss'
    status: string; // regular, important, urgent, lapsed
    title: string;
}
