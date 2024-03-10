import { notion } from "@/app/_libs/notionClient";
import { getYearAndMonth } from "@/app/_util/getYearAndMonth";
import { StudyType } from "@/app/_types/model";
import { NextResponse } from "next/server";

const NOTION_DB_ID = process.env.NOTION_STUDY_DB_ID;

export async function GET() {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DB_ID!,
    });

    const data: StudyType[] = response.results.map((item: any) => {
      return {
        title: item.properties.제목.title[0].plain_text,
        etc: item.properties.비고.select.name,
        period_start: getYearAndMonth(item.properties.기간.date.start),
        period_end: getYearAndMonth(item.properties.기간.date.end),
        description: item.properties.상세설명.rich_text[0].plain_text,
      };
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
  }
}
