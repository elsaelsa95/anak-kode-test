// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method != "GET") {
    res
      .status(404)
      .json({ code: 404, status: false, message: "Not found", data: null });
    return;
  }

  const fromCity_id = localStorage.getItem("fromCity_id")
    ? localStorage.getItem("fromCity_id")
    : "";
  const toCity_id = localStorage.getItem("fromCity_id")
    ? localStorage.getItem("toCity_id")
    : "";

  try {
    const getCost = await fetch(`https://api.rajaongkir.com/starter/cost`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        key: `${process.env.KEY_RAJA_ONGKIR}`,
      },
      body: JSON.stringify({
        origin: fromCity_id,
        destination: toCity_id,
        weight: "1700",
        courier: "jne",
      }),
    });

    const result = await getCost.json();

    res.status(getCost.status).json({
      code: getCost.status,
      status: true,
      data: result,
    });

    return;
  } catch (error) {
    res.status(500).json({
      code: 500,
      status: false,
      message: "Something went wrong",
      data: null,
    });
  }
}
