const toTwoDigits = (number: number) : string => `0${number}`.slice(-2);

export const convertTime = (dateValue: string) : string => {
    // convert UTC time to locale time
    const localeTime = new Date(dateValue);

    return `${localeTime.getFullYear()}/${localeTime.getMonth() + 1}/${localeTime.getDate()} ${toTwoDigits(localeTime.getHours())}:${toTwoDigits(localeTime.getMinutes())}:${toTwoDigits(localeTime.getSeconds())}`;
};