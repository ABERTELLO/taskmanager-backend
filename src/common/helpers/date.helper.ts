// Dependencies
import { InternalServerErrorException } from '@nestjs/common';


const addStartZeros = (value: any, builtStringLength: number = null) => {
    if (!builtStringLength) throw new InternalServerErrorException(`You should indicate zeros quantity as second argument of 'addStartZeros' function.`);
    const numberValue: number = parseInt(value);
    const isAValidValue: boolean = !isNaN(numberValue);
    if (!isAValidValue) throw new InternalServerErrorException('Invalid date to format. Cannot be filled with zeros.');
    const stringValue: string = numberValue.toString()
    let builtValue: string
    if (stringValue.length < builtStringLength) {
        builtValue = stringValue.padStart(builtStringLength, '0')
    } else builtValue = stringValue
    return builtValue
}

const isInvalidDateVerification = (date: any) => {
    const isAValidDate: boolean = !isNaN(date.getTime());
    if (!isAValidDate) throw new InternalServerErrorException('Invalid date.');
    else return;
}

export const addDays = (date: any, daysQuantity: number) => {
    const parsedDate: any = new Date(date);
    isInvalidDateVerification(parsedDate);
    const parsedDateMs: number = parsedDate.getTime();
    const daysQuantityMs: number = daysQuantity * 86400000;
    const builtDate: Date = new Date(parsedDateMs + daysQuantityMs);
    return builtDate;
}

export const numDate = (date: any) => {
    const parsedDate: any = new Date(date);
    isInvalidDateVerification(parsedDate);
    const dd: string = addStartZeros(parsedDate.getDate().toString(), 2); // string current day
    const hh: string = addStartZeros(parsedDate.getHours().toString(), 2); // string current hours
    const min: string = addStartZeros(parsedDate.getMinutes().toString(), 2); // string current minutes
    const mm: string = addStartZeros((parsedDate.getMonth() + 1).toString(), 2); // string current month
    const ss: string = addStartZeros(parsedDate.getSeconds().toString(), 2); // string current seconds
    const yyyy: string = addStartZeros(parsedDate.getFullYear().toString(), 4); // string current year
    const builtDate: string = yyyy + mm + dd + hh + min + ss;
    return builtDate;
}