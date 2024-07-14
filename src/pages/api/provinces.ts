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
    try {
        const getProvinces = await fetch(
            `http://api.rajaongkir.com/starter/province`,
            {
                headers: {
                    key: `${process.env.KEY_RAJA_ONGKIR}`,
                },
            }
        );

        const result = await getProvinces.json();

        res.status(getProvinces.status).json({
            code: getProvinces.status,
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