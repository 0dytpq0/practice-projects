import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import getToday from "../../utils";

interface RecordState {
  month: number;
  date: string;
  amount: number;
  spendItem: string;
  spendDetail: string;
  selectedItemId?: string;
}

interface RecordAction {
  changeMonth: (month: number) => void;
  changeValue: (type: keyof RecordState, content: number | string) => void;
  initFormData: () => void;
  selectRecord: (record: Partial<RecordState & { id: string }>) => void;
}

const useFormStore = create(
  persist<RecordState & RecordAction>(
    (set) => ({
      month: new Date().getMonth() + 1,
      date: getToday(),
      amount: 0,
      spendItem: "",
      spendDetail: "",
      selectedItemId: undefined,

      changeMonth: (month) => set({ month }),
      changeValue: (type, content) =>
        set((state) => ({ ...state, [type]: content })),
      initFormData: () =>
        set({
          date: getToday(),
          amount: 0,
          spendItem: "",
          spendDetail: "",
        }),
      selectRecord: (record) => {
        set({
          selectedItemId: record.id,
          date: record.date,
          amount: record.amount,
          spendItem: record.spendItem,
          spendDetail: record.spendDetail,
        });
      },
    }),
    {
      name: "record-store",
      getStorage: () => localStorage,
    }
  )
);

export default useFormStore;
