import {useState} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ServerTimeComponent from "./ServerTimeComponent";
import moment from 'moment';
import 'moment/locale/ko';
import {parseDate} from "./utils/ParseDate";
import {healthManagerInfo} from "./utils/HealthManagerInfo";
import {SelectBox} from "./components/SelectBox";
import {timeInfo} from "./utils/TimeInfo";
import styled from "styled-components";
import {Const} from "./utils/Const";
import {AddSelected} from "./components/AddSelected";
import {fieldNames} from "./utils/FieldNames";
import {CreateEventByClock} from "./components/CreateEventByClock";

function App() {

    /**
     * @brief 단건 예약 상태 관리
     */
    const [params, setParams] = useState({
        helMngerCd: null,
        useDate: null,
        useStTime: null,
        useEdTime: null,
        userDiv: 1,
        reqEmpNo: null
    })

    /**
     * @brief 전체 예약 내역 상태 관리(url)
     */
    const [reservationList, setReservationList] = useState([])

    /**
     * @brief 사번 입력 상태 관리
     */
    const handleChange = (e) => {
        const {name, value} = e.target;
        setParams(prevState => ({
            ...prevState,
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
        const missingFields = Object.keys(params).filter(field => params[field] === null)

        if (missingFields.length > 0) {
            const missingFieldNames = missingFields.map(field => fieldNames[field]).join(', ');
            return window.alert(`${missingFieldNames}을(를) 입력해 주세요`);
        }

        const url = `${Const.reservationUrl}helMngerCd=${params.helMngerCd}&useDate=${params.useDate}&useStTime=${params.useStTime}&useEdTime=${params.useEdTime}&userDiv=0001&reqEmpNo=${params.reqEmpNo}`
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
        return date.format('YYYY년 MM월 DD일 dddd ') + infos[2].substring(10) + "~" + infos[3].substring(10)
    }

    return (
        <>
            <LogoImage src={"logo.jpg"}/>
            <Container>
                <Title>1. 사전 작업</Title>
                <p>TALK 로그인 필요(10분 전 권장) <A href={Const.timsUrl}>TALK</A></p>
                <p>해당 페이지 팝업 허용</p>
            </Container>

            <Container>
                <Title>2. 예약 리스트 생성</Title>
                <Field>
                    <Text>사번</Text>
                    <input
                        name={"reqEmpNo"}
                        onChange={handleChange}
                        type="text"
                        placeholder="7자리 사번 입력"/>
                </Field>
                <Field>
                    <Text>관리사</Text>
                    <SelectBox
                        options={healthManagerInfo}
                        name="helMngerCd"
                        onChange={handleChange}/>
                </Field>
                <Field>
                    <Text>시간</Text>
                    <SelectBox
                        options={timeInfo}
                        name="useStTime"
                        onChange={handleChangeTime}
                    />
                </Field>
                <Field>
                    <Text>날짜</Text>
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="yyyyMMdd"
                        placeholderText="날짜를 선택하세요"/>
                </Field>
                <AddSelected
                    selectedDate={selectedDate}
                    params={params}
                    handleClick={handleAdd}
                />
            </Container>

            <Container>
                <Title>3. 예약 대기 리스트</Title>
                <List>
                    {reservationList && reservationList.map((ele, i) => {
                        return <p key={i}>{getParseList(ele)}</p>
                    })}
                </List>
                <Button onClick={summit}>건강 관리실 신청</Button>
            </Container>

            <Container>
                <Title>4. 현재 시간</Title>
                <ServerTimeComponent/>
                <CreateEventByClock event={summit}/>
            </Container>

            <Container>
                <Title>5. 예약 내역 보기</Title>
                <p>건강 관리실 예약 현황 확인 <A href={Const.historyUrl}>TALK</A></p>
            </Container>
        </>
    );
}

export default App;

export const Title = styled.h3`
`
export const Container = styled.div`
  display: flex;
  background: darkslategray;
  color: white;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 20px;
  margin-bottom: 0.5rem;
  padding: 1rem;
`
export const LogoImage = styled.img`
  width: 8rem;
  margin-bottom: 1rem;
`
export const Field = styled.div`
`
export const Text = styled.span`
  margin-right: 1rem;
  display: inline-block;
  width: 3rem;
`
export const Button = styled.button`
  height: 2rem;
  background-color: dodgerblue;
  border-style: none;
  color: white;
  border-radius: 10px 10px;
`
export const List = styled.div`
  margin: auto;
  padding: 1rem;
  justify-content: center;
`
export const A = styled.a`
  color: crimson;
`