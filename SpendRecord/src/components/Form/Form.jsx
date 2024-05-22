import { useInput } from "../../hooks";

function Form({ setDataList }) {
  const [date, handleDateChange] = useInput("");
  const [amount, handleAmountChange] = useInput("");
  const [spendItem, handleSpendItemChange] = useInput("");
  const [spendDetail, handleSpendDetailChange] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataObj = { date, spendItem, amount, spendDetail };
    setDataList((prev) => [...prev, dataObj]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="content-date">날짜</label>
      <input
        id="content-date"
        type="text"
        value={date}
        onChange={handleDateChange}
      />
      <label htmlFor="content-item">항목</label>
      <input
        id="content-item"
        type="text"
        placeholder="지출 항목"
        value={spendItem}
        onChange={handleSpendItemChange}
      />
      <label htmlFor="content-amount">금액</label>
      <input
        id="content-amount"
        type="text"
        placeholder="지출 금액"
        value={amount}
        onChange={handleAmountChange}
      />
      <label htmlFor="content-detail">내용</label>
      <input
        id="content-detail"
        type="text"
        placeholder="지출 내용"
        value={spendDetail}
        onChange={handleSpendDetailChange}
      />
      <button type="form">저장</button>
    </form>
  );
}

export default Form;
