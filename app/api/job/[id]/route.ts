import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const res = await prisma.job.findFirst({
        where: {
            id: params.id
        }
    })

    return NextResponse.json(res);
  } catch (error) {
    console.error("Error querying database:", error);
    return NextResponse.error();
  }
}
