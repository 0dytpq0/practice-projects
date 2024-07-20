import axios from "axios";

export const postDataToKakaoPay = async () => {
  const data = {
    cid: "TC0ONETIME",
    partner_order_id: "partner_order_id",
    partner_user_id: "partner_user_id",
    item_name: "초코파이",
    quantity: 1,
    total_amount: 2200,
    tax_free_amount: 0,
    approval_url: "http://localhost:3000/approvePage",
    fail_url: "http://localhost:3000",
    cancel_url: "http://localhost:3000",
  };

  try {
    const response = await axios.post("/payment", data);
    console.log("response", response.data);
    return response;
  } catch (error) {
    console.log("error", error);
  }
};

export const postApprove = async (data: any) => {
  try {
    const response = await axios.post("/approval", data);
    console.log("response", response);
    return response;
  } catch (error) {
    console.log("error", error);
  }
};
