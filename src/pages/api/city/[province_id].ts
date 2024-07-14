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

    const { province_id } = req.query as { province_id: string };
    try {
        const getCity = await fetch(
            `https://api.rajaongkir.com/starter/city?province=${province_id}`,
            {
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                    key: `${process.env.KEY_RAJA_ONGKIR}`,
                },
            }
        );

        const result = await getCity.json();

        res.status(getCity.status).json({
            code: getCity.status,
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