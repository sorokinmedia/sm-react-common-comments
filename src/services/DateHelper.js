/* eslint-disable */
import {convertToPlural, seconds_plural} from "./PluralTextHelper"

export function monthAsWord(month){
    if (month===0) return "января";
    if (month===1) return "февраля";
    if (month===2) return "марта";
    if (month===3) return "апреля";
    if (month===4) return "мая";
    if (month===5) return "июня";
    if (month===6) return "июля";
    if (month===7) return "августа";
    if (month===8) return "сентября";
    if (month===9) return "октября";
    if (month===10) return "ноября";
    if (month===11) return "декабря";

    return -1
}

export function timeValueInTwoDigit(value) {
    if(value > 9) return value.toString()

    return '0' + value
}

export function timestampToReadableDigitDate(tamp) {
    const dateObj = new Date(Number(tamp))
    return dateObj.getDate() + '.' + timeValueInTwoDigit(Number(dateObj.getMonth()) + 1) + '.'
        + dateObj.getFullYear() + ', ' + dateObj.getHours() + ':'
        + timeValueInTwoDigit(dateObj.getMinutes())
}

export function timestampToReadableDigitDateDDMMYYYY(tamp, delimiter = '-') {
    const dateObj = new Date(Number(tamp))
    return timeValueInTwoDigit(dateObj.getDate()) + delimiter + timeValueInTwoDigit(Number(dateObj.getMonth()) + 1)
        + delimiter
        + dateObj.getFullYear()
}

export function buildDDMMYYYYDateByStr(str, delimiter) {
    const parts = str.split(delimiter);
    let date = new Date();
    date.setFullYear(Number(parts[2]));
    date.setMonth(Number(parts[1]) - 1);
    date.setDate(Number(parts[0]));

    return date;
}

export function timestampToReadableDate(tamp) {
    const dateObj = new Date(Number(tamp))
    return dateObj.getDate() + ' ' + monthAsWord(Number(dateObj.getMonth())) + ' '
        + dateObj.getFullYear() + 'г., ' + dateObj.getHours() + ':'
        + timeValueInTwoDigit(dateObj.getMinutes())
}



export function timestampToReadableDateToOneDay(tamp) {
    const dateObj = new Date(Number(tamp))
    return dateObj.getDate() + ' ' + monthAsWord(Number(dateObj.getMonth())) + ' '
        + dateObj.getFullYear() + 'г.'
}

export function timestampToReadableDateWithSecons(tamp) {
    const dateObj = new Date(Number(tamp))
    return timestampToReadableDate(tamp) + ':' + timeValueInTwoDigit(dateObj.getSeconds())
}

export function deductTimezone(date) {
    return date + (new Date).getTimezoneOffset()*60*1000
}

export function getTimeLeft(timeNow, timeEnd) {
    const interval = Number(timeEnd) - Number(timeNow)
    const days = interval/1000/60/60/24
    const hours = days*24%24

    return Math.floor(days)
        + ' '
        + convertToPlural(Math.floor(days), 'days')
        + ' и '
        + Math.floor(hours)
        + ' '
        + convertToPlural(Math.ceil(hours))
}

export function secondsToReadableTime(secs) {
    const computedHours = Math.floor(secs/3600)
    const computedMinutes = Math.floor((secs - computedHours*3600)/60)
    const seconds = secs - computedMinutes*60 - computedHours*3600

    const hours = computedHours ? computedHours + ' ' + convertToPlural(computedHours, 'hours') + ' ' : '',
          minutes = computedMinutes ? computedMinutes + ' ' + convertToPlural(computedMinutes, 'minutes') + ' ' : '';

    return hours + minutes + seconds + ' ' + seconds_plural(seconds, 'seconds')
}

export function secondsToRedableHoursAndMinutes(secs) {
    const computedHours = Math.floor(secs/3600)
    const computedMinutes = Math.floor((secs - computedHours*3600)/60)
    const seconds = secs - computedMinutes*60 - computedHours*3600

    const hours = computedHours ? computedHours + ' ' + convertToPlural(computedHours, 'hours') + ' ' : '',
        minutes = computedMinutes ? computedMinutes + ' ' + convertToPlural(computedMinutes, 'minutes') + ' ' : '';

    return hours + minutes
}

export function secondsToRedableDHM(secs) {
    const computedDays = Math.floor(secs/3600/24)
    const daysStr = computedDays ? computedDays + ' ' + convertToPlural(computedDays, 'days') + ' ' : '';

    return daysStr + ' ' + secondsToRedableHoursAndMinutes(secs - computedDays*3600*24)
}

export function dateToPHPUnix(date) {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);

    return date.getTime()/1000
}
