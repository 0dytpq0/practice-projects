import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;
const headers = {
  Authorization: `DEV_SECRET_KEY ${SECRET_KEY}`,
  "Content-Type": "application/json",
};

const instantAxios = axios.create({ baseURL: "https://open-api.kakaopay.com" });
export const POST = async (req: NextRequest, res: NextResponse) => {
  const data = await req.json();
  try {
    const response = await instantAxios.post("/online/v1/payment/ready", data, {
      headers,
    });

    console.log("response.data", response);

    return NextResponse.json({ data });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ error });
  }
};
