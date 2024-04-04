import React from "react";
import { BoxContainer } from "../../common/BoxContainer";

export const ReservationDetails = () => {
  const tableData = [
    {
      manager: "홍길동",
      time: "14:00 - 15:00",
      date: "2022-04-01",
    },
    // {
    //   manager: "김철수",
    //   time: "15:00 - 16:00",
    //   date: "2022-04-01",
    // },
    // {
    //   manager: "김철수",
    //   time: "15:00 - 16:00",
    //   date: "2022-04-01",
    // },
    // {
    //   manager: "김철수",
    //   time: "15:00 - 16:00",
    //   date: "2022-04-01",
    // },
    // {
    //   manager: "김철수",
    //   time: "15:00 - 16:00",
    //   date: "2022-04-01",
    // },
    // {
    //   manager: "김철수",
    //   time: "15:00 - 16:00",
    //   date: "2022-04-01",
    // },
    // {
    //   manager: "김철수",
    //   time: "15:00 - 16:00",
    //   date: "2022-04-01",
    // },
    // 추가 데이터...
  ];
  return (
    <BoxContainer
      title="4. 예약 목록 확인 및 등록"
      content={
        <>
          <table
            style={{
              maxWidth: "100%",
              height: "200px",
              border: "1px solid black",
              overflow: "hidden",
              borderRadius: "4px",
            }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid black", display: "block" }}>
                <th style={{ width: "30px" }}>#</th>
                <th style={{ width: "90px" }}>관리사</th>
                <th style={{ width: "120px" }}>시간</th>
                <th style={{ width: "110px" }}>날짜</th>
                <th style={{ width: "60px" }}>삭제</th>
              </tr>
            </thead>
            <tbody
              style={{
                display: "block",
                height: "160px",
                overflowY: "auto",
                textAlign: "center",
              }}
            >
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  style={{
                    height: "40px",
                    display: "table",
                    tableLayout: "fixed",
                    width: "100%",
                    fontSize: "14px",
                  }}
                >
                  <td style={{ width: "30px", padding: "0" }}>
                    {index + 1 + "."}
                  </td>
                  <td style={{ width: "90px", padding: "0" }}>{row.manager}</td>
                  <td style={{ width: "120px", padding: "0" }}>{row.time}</td>
                  <td style={{ width: "110px", padding: "0" }}>{row.date}</td>
                  <td style={{ width: "60px", padding: "0" }}>
                    <button>취소</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            style={{
              width: "300px",
              height: "50px",
              borderRadius: "5px",
              marginTop: "40px",
              backgroundColor: "#666666",
              color: "white",
              fontFamily: "Noto Sans KR",
              fontSize: "16px",
              fontWeight: "700",
            }}
            // onClick={onClickLogin}
          >
            예약 등록
          </button>
        </>
      }
    />
  );
};
