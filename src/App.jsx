import {useState} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ServerTimeComponent from "./ServerTimeComponent";
import moment from 'moment';
import 'moment/locale/ko';

const parseDate = (date) => {
    return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).replace(/\. /g, '').substring(0, 8);
}

function App() {

    /**
     * @brief 단건 예약 상태 관리
     */
    const [params, setParams] = useState({
        helMngerCd: "HEL20230802001",
        useDate: parseDate(new Date()),
        useStTime: 1200,
        useEdTime: 1250,
        userDiv: 1,
        reqEmpNo: null
    })

    /**
     * @brief 전체 예약 내역 상태 관리(url)
     */
    const [reservationList, setReservationList] = useState([])

    /**
     * @brief 사번 입력 상태 관리
     * @param e : number
     */
    const handleChangeInput = (e) => {
        const {name, value} = e.target;
        setParams(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    /**
     * @brief select 태그 상태 관리
     * @param e : EventTarget
     */
    const handleChangeSelect = (e) => {
        const {name, value} = e.target;
        setParams(prevParams => ({
            ...prevParams,
            [name]: value
        }));
    }

    /**
     * @brief select 태그 상태 관리(시간)
     * @param e : EventTarget
     */
    const handleChangeTime = (e) => {
        const {value} = e.target;
        setParams(prevParams => ({
            ...prevParams,
            useStTime: value + "00",
            useEdTime: value + "50"
        }));
    }

    /**
     * @brief DatePicker 선택 날짜 상태 관리
     */
    const [selectedDate, setSelectedDate] = useState(null);

    /**
     * @brief DatePicker 선택 날짜 상태 변경
     * @param date : Date
     */
    const handleDateChange = (date) => {
        setSelectedDate(date);
        setParams(prevParams => ({
            ...prevParams,
            useDate: parseDate(date)
        }));
    };

    /**
     * @brief 예약 리스트 추가
     */
    const handleAdd = () => {
        if (params.reqEmpNo == null)
            return window.alert("사번을 입력해 주세요")
        const tmaxUrl = `https://talk.tmaxsoft.com/front/health/insertHealth.do?`
        const url = `${tmaxUrl}helMngerCd=${params.helMngerCd}&useDate=${params.useDate}&useStTime=${params.useStTime}&useEdTime=${params.useEdTime}&userDiv=0001&reqEmpNo=${params.reqEmpNo}`
        setReservationList(prevState => [...prevState, url])
    }

    /**
     * @brief 예약 -> Tims 예약 창 오픈
     */
    const summit = () => {
        for (const arg of reservationList) {
            window.open(arg, '_blank')
        }
    }

    /**
     * @brief 예약 리스트 url 파싱
     */
    function getParseList(ele) {
        const infos = ele.substring(55).split("&")
        const date = moment(infos[1].substring(8), 'YYYYMMDD')
        return date.format('YYYY년 MM월 DD일 dddd ')+infos[2].substring(10)+" ~ "+infos[3].substring(10)
    }

    return (
        <div>
            <section>
                <h3>1. 사전 작업</h3>
                <p>TALK 로그인 필요 <a href={"https://talk.tmaxsoft.com/front/main/main.do"}>TALK</a></p>
                <p>해당 페이지 팝업 허용</p>
            </section>

            <section>
                <h3>2. 예약 리스트 생성</h3>
                <div>사번
                    <input style={{width:"14.6rem", marginLeft:"1rem", marginRight:"1rem"}}
                           name={"reqEmpNo"}
                           onChange={handleChangeInput}
                           type="text"
                           placeholder="7자리 사번 입력"/>
                관리사
                    <select style={{width:"9.8rem"}} name="helMngerCd" onChange={handleChangeSelect} defaultValue={"HEL20230802001"}>
                        <option value="HEL20230802001">1. 김도영(여/미금)</option>
                        <option value="HEL20140101130">2. 이승우(남/미금)</option>
                        <option value="HEL20140101130">3. 정영민(남/미금)</option>
                        <option value="HEL20230921001">4. 문효선(여/미금)</option>
                        <option value="HEL20211216001">5. 이정숙(여/오리)</option>
                        <option value="HEL20230823001">6. 이정경(여/오리)</option>
                    </select>
                </div>

                <div>시간
                    <select style={{width:"15rem", marginLeft:"1rem", marginRight:"1rem"}} name="useStTime" onChange={handleChangeTime} defaultValue={"12"}>
                        <option value="12"> 12:00 ~ 12:50</option>
                        <option value="13"> 13:00 ~ 13:50</option>
                        <option value="14"> 14:00 ~ 14:50</option>
                        <option value="15"> 15:00 ~ 15:50</option>
                        <option value="16"> 16:00 ~ 16:50</option>
                        <option value="17"> 17:00 ~ 17:50</option>
                        <option value="19"> 19:00 ~ 19:50</option>
                        <option value="20"> 20:00 ~ 20:50</option>
                        <option value="21"> 21:00 ~ 21:50</option>
                    </select>
                    날 짜
                    <DatePicker selected={selectedDate} onChange={handleDateChange} dateFormat="yyyyMMdd" placeholderText="날짜를 선택하세요"/>
                    {selectedDate &&
                        <div>
                            <div>{selectedDate.toLocaleDateString('ko-KR', {weekday: 'long',year: 'numeric',month: 'long',day: 'numeric'})} {params.useStTime} ~ {params.useEdTime}시</div>
                            <button onClick={handleAdd}>예약 리스트 추가</button>
                        </div>
                    }
                </div>

            </section>

            <section>
                <h3>3. 예약 대기 리스트</h3>
                <div>
                    {reservationList && reservationList.map((ele, i) => {
                        return <p key={i}>{getParseList(ele)}</p>
                    })}
                </div>
                <button onClick={summit}>건강 관리실 신청</button>
            </section>

            <section>
                <h3>4. 현재 시간</h3>
                <ServerTimeComponent/>
            </section>

            <section>
                <h3>5. 예약 내역 보기</h3>
                <a href={"https://talk.tmaxsoft.com/front/health/findHealthResvtList.do?srchMenuNo=TM0041&toggleMenuNo=TM0093"}>건강 관리실 예약 현황</a>
            </section>
        </div>
    );
}

export default App;
