import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
//   ! Single Insert Data
    try {
      const prisma = new PrismaClient();
      let reqBody = await req.json();
      let result = await prisma.category.create({ data: reqBody });

      return NextResponse.json({ status: "Success", result: result });
    } catch (err) {
      return NextResponse.json({ status: "Fail", result: err.toString() });
    }


  //!  Read Single Data
  //   try {
  //     const prisma = new PrismaClient();

  //     let result = await prisma.category.findMany({
  //       skip: 2,
  //       take: 3,
  //       select: {
  //         id: true,
  //         parentId: true,
  //         slug: true,
  //         content: true,
  //       },
  //     });
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  

  //!  Delete Single Data by contains
  //   try {
  //     const prisma = new PrismaClient();
  //     let reqBody = await req.json();
  //     let result = await prisma.category.delete({
  //       where: reqBody,
  //     });
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }

  //!  Update Single Data by contains
  //   try {
  //     const prisma = new PrismaClient();
  //     let reqBody = await req.json();
  //     let result = await prisma.category.update({
  //       where: reqBody,
  //       data: {
  //         title: "FFFFFF",
  //         sub_title: "SSSSSSSSSSSSSSSSSSSS",
  //         price: "100",
  //         discount: "10",
  //         image: "img",
  //       },
  //     });
  //     return NextResponse.json({ status: "Success", result: result });
  //   } catch (err) {
  //     return NextResponse.json({ status: "Fail", result: err.toString() });
  //   }
}
