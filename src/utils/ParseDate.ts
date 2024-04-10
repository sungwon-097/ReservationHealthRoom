export const parseDate = (date: Date) => {
  const offset = date.getTimezoneOffset() * 60000; // 타임존 오프셋을 밀리초로 계산
  const localDate = new Date(date.getTime() - offset); // 로컬 날짜 조정
  return localDate.toISOString().split("T")[0]; // "YYYY-MM-DD" 형식으로 변환
};
