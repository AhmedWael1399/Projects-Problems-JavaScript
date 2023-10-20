
function reformatDate(dateString) {
    const subDates = dateString.split(" ");
    const matches = subDates[0].match(/(\d+)([a-zA-Z]+)/);
    const numberMatch = parseInt(matches[1]);
    let formattedNumberMatch;
    if (numberMatch < 10) formattedNumberMatch = `0${numberMatch}`;
    else formattedNumberMatch = numberMatch;
    const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let i;
    for (i = 0; i < monthArray.length; i++) {
        if (subDates[1] == monthArray[i]) {
            i++;
            break;
        }
    }
    let formattedI;
    if (i < 10) formattedI = `0${i}`;
    else formattedI = i;
    return `${subDates[2]}-${formattedI}-${formattedNumberMatch}`;
}

const inputDate = "1st Jan 2052";
console.log(reformatDate(inputDate));