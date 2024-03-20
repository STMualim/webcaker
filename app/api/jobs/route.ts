import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const page = searchParams.get("page");
  const query = searchParams.get("query");

  try {
    let data;

    if (query) {
      const pageSize = 9;
      const pageNumber = parseInt(page as string, 10) || 1; // Gunakan parseInt untuk mengonversi string ke angka
      const skip = (pageNumber - 1) * pageSize;
      const take = pageSize;

      data = await prisma.job.findMany({
        where: {
          OR: [
            { name: { contains: query.toLowerCase(), mode: "insensitive" } },
            { location: { contains: query.toLowerCase(), mode: "insensitive" } },
            { company: { contains: query.toLowerCase(), mode: "insensitive" } },
          ],
        },
        skip: skip,
        take: take,
      });
    } else {
      const defaultPageSize = 9;
      const defaultSkip = 0;
      const defaultTake = defaultPageSize;

      data = await prisma.job.findMany({
        skip: defaultSkip,
        take: defaultTake,
      });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error querying database:", error);
    return NextResponse.error();
  }
}
