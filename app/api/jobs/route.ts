import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
const PAGE_SIZE = 9;

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1");
  const query = searchParams.get("query") || "";
  let data;
  data = await prisma.job.findMany({
    where: {
      OR: [
        { name: { contains: query.toLowerCase(), mode: "insensitive" } },
        { location: { contains: query.toLowerCase(), mode: "insensitive" } },
        { company: { contains: query.toLowerCase(), mode: "insensitive" } },
      ],
    },
    take: PAGE_SIZE,
    skip: (page - 1) * PAGE_SIZE
  });
  return Response.json(data)
}
