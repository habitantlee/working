// Postman 날짜 변환 함수들 2024.07.05 habitant.lee

function getCurrentDate() {
    return new Date();
}
//월 , 일 한자리 인 경우 앞 0 붙이는 함수
function prependZero(PrependMonth, PrependDate) {
    if (PrependMonth < 10) {
        PrependMonth = "0" + PrependMonth
    }
    if (PrependDate < 10) {
        PrependDate = "0" + PrependDate
    }
    return [PrependMonth, PrependDate]
}
function dateDiff(diffDate) {
    currentDate = getCurrentDate()
    currentDate.setDate(currentDate.getDate() + diffDate)
    return currentDate
}
function MonthDiff(diffDate) {
    currentDate = getCurrentDate()
    currentDate.setMonth(currentDate.getMonth() + diffDate)
    return currentDate
}
//UTCISO 날짜로 변환 함수, diffDate 설정 시 해당 값 만큼 합 연산하여 내려줌(예시 2024-05-20T02:32:19.882Z)
function formatToISOString(diffDate) {
    currentDate = getCurrentDate()
    if (diffDate) {
        currentDate = dateDiff(diffDate)
        result = currentDate.toISOString()
    }
    result = currentDate.toISOString()
    return result
}
// formatWithDateSeparator("-" 넣을지 말지 유무 True/false, diffDate 설정 값에 따라 해당 일수 차감하여 값 내려줌)
function formatWithDateSeparator(Separator, diffDate) {
    currentDate = getCurrentDate()
    if (diffDate) {
        currentDate = dateDiff(diffDate)
    }
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; // 월은 0부터 시작이기에 +1
    var date = currentDate.getDate();
    let hour = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    const prependZeroToMonthAndDate = prependZero(month, date)
    if (Separator == true) {
        // 날짜 포멧 년, 월, 일 사이 "-" 추가 된 포멧
        result = year + '-' + prependZeroToMonthAndDate[0] + '-' + prependZeroToMonthAndDate[1]
    } else {
        // 날짜 포멧 년, 월, 일 붙어진 포멧
        result = year + prependZeroToMonthAndDate[0] + prependZeroToMonthAndDate[1]
    }
    return result;
}
// 해당 월의 시작일 혹은 마지막일을 가져오는 함수
function getLastDayOfMonth(Separator, diffMonth, startDateOrEndDate) {
    currentDate = getCurrentDate()
    if (diffMonth) {
        currentDate = MonthDiff(diffMonth)
    }
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; // 월은 0부터 시작이기에 +1
    var date = new Date(year, month - startDateOrEndDate, startDateOrEndDate).getDate();
    let hour = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    const prependZeroToMonthAndDate = prependZero(month, date)
    if (Separator == true) {
        // 날짜 포멧 년, 월, 일 사이 "-" 추가 된 포멧
        result = year + '-' + prependZeroToMonthAndDate[0] + '-' + prependZeroToMonthAndDate[1]
    } else {
        // 날짜 포멧 년, 월, 일 붙어진 포멧
        result = year + prependZeroToMonthAndDate[0] + prependZeroToMonthAndDate[1]
    }
    return result;
}
pm.environment.set("YYYYMMDD_CurrentDate", formatWithDateSeparator(false));
pm.environment.set("YYYYMMDD_PastDate", formatWithDateSeparator(false, -1));
pm.environment.set("YYYYMMDD_StartMonth", getLastDayOfMonth(false, -1, 1));
pm.environment.set("YYYYMMDD_EndMonth", getLastDayOfMonth(false, -1, 0));
pm.environment.set("ISO_CurrentDate", formatToISOString())
pm.environment.set("ISO_PastDate", formatToISOString(- 1))
