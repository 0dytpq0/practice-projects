"use client";
import { PropsWithChildren, createContext, useContext, useState } from "react";

type KakaoContextValue = {
  tid: string;
  next_redirect_pc_url: string;
};

const initialValue: KakaoContextValue = {
  tid: "T684c37629fd342c5f1d",
  next_redirect_pc_url:
    "https://online-pay.kakao.com/mockup/v1/f4a605a9ef042e76a97efdd0ad56686e9a65f2a031c31e77639fe836a0302b4d/info",
};

const KakaoContext = createContext<KakaoContextValue>(initialValue);

export const useKakao = () => useContext(KakaoContext);

export function KakaoProvider({ children }: PropsWithChildren) {
  const [next_redirect_pc_url, setNext_redirect_pc_url] = useState<
    KakaoContextValue["next_redirect_pc_url"]
  >(initialValue.next_redirect_pc_url);
  const [tid, setTid] = useState<KakaoContextValue["tid"]>(initialValue.tid);

  const value = { next_redirect_pc_url, tid };

  return (
    <KakaoContext.Provider value={value}>{children}</KakaoContext.Provider>
  );
}
