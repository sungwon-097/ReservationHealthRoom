export const onSubmit = (reservationList: string[]) => {
  //   event.preventDefault();
  for (const arg of reservationList) {
    window.open(arg, "_blank");
  }
};

// export const onSubmit = async (reservationList: string[]) => {
//   for (const url of reservationList) {
//     try {
//       const response = await fetch(url, {
//         method: "POST", // 또는 'POST', 'PUT' 등 서버의 API 스펙에 맞춰 메서드를 선택
//         // 필요한 경우 headers, body 등을 설정
//         mode: "no-cors",
//         headers: {
//           "Content-Type": "application/json",
//           // 필요한 경우 추가 헤더를 여기에 포함
//         },
//       });

//       if (!response.ok) {
//         console.log(response);
//         throw new Error(`Request failed with status ${response}`);
//       }

//       const data = await response.json(); // JSON 응답을 기대하는 경우
//       console.log(data); // 응답 데이터 처리
//     } catch (error) {
//       console.error("Request failed:", error);
//     }
//   }
// };
