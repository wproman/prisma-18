import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
//   ! Single Insert Data
    // try {
    //   const prisma = new PrismaClient();
    //   let reqBody = await req.json();
    //   let result = await prisma.tag.create({ data: reqBody });

    //   return NextResponse.json({ status: "Success", result: result });
    // } catch (err) {
    //   return NextResponse.json({ status: "Fail", result: err.toString() });
    // }




  //!  Read Single Data
  //   try {
  //     const prisma = new PrismaClient();

  //     let result = await prisma.tag.findMany({
  //       skip: 2,
  //       take: 3,
  //       select: {
  //         id: true,
  //         title: true,
  //         sub_title: true,
  //         price: true,
  //       },
  //     });
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

 



  //!  Update Single Data by contains
    // try {
    //   const prisma = new PrismaClient();
    //   let reqBody = await req.json();
    //   let result = await prisma.tag.update({ data: reqBody })
       
    //   return NextResponse.json({ status: "Success", result: result });
    // } catch (err) {
    //   return NextResponse.json({ status: "Fail", result: err.toString() });
    // }
}
