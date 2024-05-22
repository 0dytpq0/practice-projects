import { v4 as uuid } from "uuid";

function Record({ dataList = [], month }) {
  console.log(dataList);

  // 추후 Records 컴포넌트로 따로 분리
  const paintRecords = () => {
    return dataList.map((item) => {
      const itemMonth = Number(item.date.slice(5, 7));

      if (itemMonth === month) {
        return (
          <li key={uuid()}>
            <div>{item.date}</div>
            <div>{item.spendItem}</div>
            <div>{item.amount}</div>
            <div>{item.spendDetail}</div>
          </li>
        );
      }
    });
  };

  return <div>{paintRecords()}</div>;
}

export default Record;
