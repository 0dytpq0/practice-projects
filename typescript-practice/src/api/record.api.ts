import { AxiosInstance } from "axios";

class Record {
  #axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.#axios = axios;
  }

  async getRecord() {
    const path = `/records`;

    const response = await this.#axios.get(path);
    const result = response.data;

    // 타입 스크립트에서 날짜 객체를 빼는 연산을 할 때 이를 명확히 숫자로 인식하지 못할 수 있다.
    // 이 문제를 해결하기 위해 getTime()을 써서 명확하게 number에 대해 연산을 한다는 것을 알려줘야한다.
    const sortedRecord = (result: { date: string }[]): { date: string }[] => {
      return [...result].sort(
        (recordA: { date: string }, recordB: { date: string }) =>
          new Date(recordB.date).getTime() - new Date(recordA.date).getTime()
      );
    };
    return sortedRecord(result);
  }

  async postRecord(data: {
    createdBy: string;
    date: string;
    amount: string;
    spendItem: string;
    spendDetail: string;
  }) {
    const path = `/records`;
    // 리턴값에 맞춰서 할당해주면 됨
    const response = await this.#axios.post<{
      id: string;
      createdBy: string;
      date: string;
      amount: string;
      spendItem: string;
      spendDetail: string;
    }>(path, data);
    const result = response.data;

    return result;
  }

  async deleteRecord(id: string) {
    const path = `/records/${id}`;
    console.log("id", id);
    const response = await this.#axios.delete(path);
    const result = response.data;

    return result;
  }

  async updateRecord(id: string, data: string[]) {
    const path = `/records/${id}`;
    const response = await this.#axios.patch(path, data);
    const result = response.data;

    return result;
  }
}

export default Record;
