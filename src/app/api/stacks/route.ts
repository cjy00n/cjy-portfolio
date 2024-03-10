import { notion } from "@/app/_libs/notionClient";
import { StacksType } from "@/app/_types/model";
import { NextResponse } from "next/server";

const NOTION_DB_ID = process.env.NOTION_STACKS_DB_ID;

export async function GET() {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DB_ID!,
    });

    const data: StacksType[] = response.results.map((item: any) => {
      return {
        title: item.properties.제목.title[0].plain_text,
        description: item.properties.상세설명.rich_text[0].plain_text,
      };
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
  }
}
