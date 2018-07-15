/* eslint-disable */
/**
 * @param $n Integer Число
 * @param $type String hours, days, minutes, seconds, rubl
 * @return mixed
 */
export function convertToPlural($n, $type="hours"){
    let  $_days = ['день', 'дня', 'дней'];
    let  $_chars = ['символ', 'символа', 'символов'];
    let  $_minutes = ['минуту', 'минуты', 'минут'];
    let  $_seconds = ['секунду', 'секунды', 'секунд', 'секунда'];
    let  $_hours = ['час', 'часа', 'часов'];
    let  $_rubl = ['рубль', 'рубля', 'рублей'];
    let  $_times = ['раз', 'раза', 'раз'];
    $n = Math.ceil($n);
    switch ($type) {
        case 'days':
            return $_days[plural_type($n)];
            break;
        case 'chars':
            return $_chars[plural_type($n)];
            break;
        case 'hours':
            return $_hours[plural_type($n)];
            break;
        case 'minutes':
            return $_minutes[plural_type($n)];
            break;
        case 'seconds':
            return $_seconds[plural_type($n)];
            break;
        case 'times':
            return $_times[plural_type($n)];
            break;
        case 'rubl':
        default:
            return $_rubl[plural_type($n)];
            break;
    }
}

export function plural_type($n) {
    return ($n%10==1 && $n%100!=11 ? 0 : ($n%10>=2 && $n%10<=4 && ($n%100<10 || $n%100>=20) ? 1 : 2));
}

export function seconds_plural($n) {
    return ($n%10==1 && $n%100!=11 ? 'секунда' : ($n%10>=2 && $n%10<=4 && ($n%100<10 || $n%100>=20) ? 'секунды' : 'секунд'));
}
