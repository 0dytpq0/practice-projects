import { v4 as uuid } from "uuid";

function Month({ setMonth }) {
  const months = Array.from({ length: 12 }, (_, index) => index + 1 + "월");

  const handleClickMonth = (e) => {
    const month = e.target.innerHTML.replace("월", "");
    setMonth(Number(month));
  };

  const monthLists = () =>
    months.map((item) => {
      return (
        <div key={uuid()} onClick={handleClickMonth}>
          {item}
        </div>
      );
    });

  return <div key={uuid()}>{monthLists()}</div>;
}

export default Month;
