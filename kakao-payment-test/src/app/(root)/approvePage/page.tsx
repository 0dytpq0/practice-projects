"use client";

import { useKakao } from "@/contexts/useKakao.context";
import { postApprove } from "@/services/kakaopay.service";
import { useQuery } from "@tanstack/react-query";

function ApprovePage() {
  const { tid, next_redirect_pc_url } = useKakao();

  const approveData = {
    cid: "TC0ONETIME",
    tid: "T684c389257c75a5ee2f",
    partner_order_id: "partner_order_id",
    partner_user_id: "partner_user_id",
    pg_token: "3cad47b8c2340f7a4995",
  };
  const { data } = useQuery({
    queryKey: ["approval"],
    queryFn: () => postApprove(approveData),
  });
  console.log("pagedata", data);
  return <div>page</div>;
}

export default ApprovePage;
