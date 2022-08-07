// '출생 연도' 셀렉트 박스 option 목록 동적 생성
const birthYearEl = document.querySelector('#year')
// option 목록 생성 여부 확인
let isYearOptionExisted = false;
birthYearEl.addEventListener('focus', function () {
  // year 목록 생성되지 않았을 때 (최초 클릭 시)
    if(!isYearOptionExisted) {
    isYearOptionExisted = true
    for(let i = 1940; i <= 2022; i++) {
        // option element 생성
        const YearOption = document.createElement('option')
        YearOption.setAttribute('value', i)
        YearOption.innerText = i
        // birthYearEl의 자식 요소로 추가
        this.appendChild(YearOption);
        }
    }
});


// Month 셀렉트 박스
const birthMonthEl = document.querySelector('#month')

let isMonthOptionExisted = false;
birthMonthEl.addEventListener('focus', function () {
    if(!isMonthOptionExisted){
        isMonthOptionExisted = true;
        for(let i = 1; i <= 12; i++){
            const MonthOption = document.createElement('option')
            MonthOption.setAttribute('value', i)
            MonthOption.innerText = i
            this.appendChild(MonthOption);
        }
    }
})


// Day 셀렉트 박스
const birthDayEl = document.querySelector('#day')

let isDayOptionExisted = false;
birthDayEl.addEventListener('focus', function () {
    if(!isDayOptionExisted){
        isDayOptionExisted = true;
        for(let i = 1; i <= 31; i++){
            const DayOption = document.createElement('option')
            DayOption.setAttribute('value', i)
            DayOption.innerText = i
            this.appendChild(DayOption);
        }
    }
})
