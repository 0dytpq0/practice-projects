import { useState } from "react";
import Form from "../components/Form";
import Month from "../components/Month/Month";
import Record from "../components/Record/Record";

function HomePage() {
  const [dataList, setDataList] = useState([]);
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  console.log("month", month);
  return (
    <div>
      <Form setDataList={setDataList} />
      <Month setMonth={setMonth} />
      <Record dataList={dataList} month={month} />
    </div>
  );
}

export default HomePage;
