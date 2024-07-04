// Postman 날짜 변환 함수들 2024.07.05 habitant.lee


//유지보수를 위하여 Test 스크립트 기본 작성 코드

var jsonData = pm.response.json();
var url = pm.request.url.path[0];
var url_cnt = 1;
var expected_status_Code = 200;
while (url_cnt < pm.request.url.path.count()) {
    url += "/"
    url += pm.request.url.path[url_cnt++]
}
pm.test(pm.info.requestName + " - " + url + " Status code is " + expected_status_Code, function () {
    if (pm.response.code != expected_status_Code) {
        console.log(pm.response.json()); // 예상 Status Code가 아닌 경우 Response Json 리턴
    }
    pm.response.to.have.status(expected_status_Code);
});
pm.test(pm.info.requestName + " Response time is less than " + parseInt(pm.environment.get("Response_time")) + "ms 확인", function () {
    pm.expect(pm.response.responseTime).to.be.below(parseInt(pm.environment.get("Response_time")));
});
 
/*
API 제목, URL, Status를 API TEST 항목 이름으로 노출 될 수 있도록 하는 영역

작동하고자 하는 API의 Status 코드에 따라 변경하여 작성 필요
*/


pm.test(pm.info.requestName + " - " + url + " Status code is " + expected_status_Code, function () {
    if (pm.response.code != expected_status_Code) {
        console.log(pm.response.json()); // 예상 Status Code가 아닌 경우 Response Json 리턴
    }
    pm.response.to.have.status(expected_status_Code);
});
//하기 코드는 해당 API 응답 시간을 비교하는 코드로  Response_time 의 값은 환경 변수에서 조정할 수 있음



pm.test(pm.info.requestName + " Response time is less than " + parseInt(pm.environment.get("Response_time")) + "ms 확인", function () {
    pm.expect(pm.response.responseTime).to.be.below(parseInt(pm.environment.get("Response_time")));
});
 

 
/*
TMS 서버에 따른 코드 분기

TMS는 데이터가 없는 경우 Status 200 에 빈 배열로 내려주는 경우가 많기에 하단의 코드를 통한 LIVE, 개발환경 분기하여 자동화 테스트 진행을 해야 함
*/
 
var jsonData = pm.response.json();
var url = pm.request.url.path[0];
var url_cnt = 1;
var expected_status_Code = 200;
while (url_cnt < pm.request.url.path.count()) {
    url += "/"
    url += pm.request.url.path[url_cnt++]
}
pm.test(pm.info.requestName + " Response time is less than " + parseInt(pm.environment.get("Response_time")) + "ms 확인", function () {
    pm.expect(pm.response.responseTime).to.be.below(parseInt(pm.environment.get("Response_time")));
});
if (pm.request.url.host[0] == "api") {
    pm.test(pm.info.requestName + " - " + url + " Status code is " + expected_status_Code, function () {
        if (pm.response.code != expected_status_Code) {
            console.log(pm.response.json()); // 예상 Status Code가 아닌 경우 Response Json 리턴
        }
        pm.response.to.have.status(expected_status_Code);
        //응답값 length 체크
        pm.expect(jsonData.length).to.have.gt(0)
    });
} else {
    // LIVE가 아닌 경우 해당 코드 실행
    pm.test(pm.info.requestName + " - " + url + " Status code is " + expected_status_Code, function () {
        if (pm.response.code != expected_status_Code) {
            console.log(pm.response.json()); // 예상 Status Code가 아닌 경우 Response Json 리턴
        }
        pm.response.to.have.status(expected_status_Code);
    });
}
 


//TMS 빈배열나오는 경우 체크

var jsonData = pm.response.json();
var url = pm.request.url.path[0];
var url_cnt = 1;
var expected_status_Code = 200;
while (url_cnt < pm.request.url.path.count()) {
    url += "/"
    url += pm.request.url.path[url_cnt++]
}
pm.test(pm.info.requestName + " - " + url + " Status code is " + expected_status_Code, function () {
    if (pm.response.code != expected_status_Code) {
        console.log(pm.response.json()); // 예상 Status Code가 아닌 경우 Response Json 리턴
    }
    pm.response.to.have.status(expected_status_Code);
    //응답값 length 체크
    pm.expect(jsonData.length).to.have.gt(0)
});
pm.test(pm.info.requestName + " Response time is less than " + parseInt(pm.environment.get("Response_time")) + "ms 확인", function () {
    pm.expect(pm.response.responseTime).to.be.below(parseInt(pm.environment.get("Response_time")));
});