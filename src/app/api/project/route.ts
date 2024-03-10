import { notion } from "@/app/_libs/notionClient";
import { getYearAndMonth } from "@/app/_util/getYearAndMonth";
import { ProjectType } from "@/app/_types/model";
import { NextResponse } from "next/server";

const NOTION_DB_ID = process.env.NOTION_PROJECT_DB_ID;

export async function GET() {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DB_ID!,
    });

    const data: ProjectType[] = response.results.map((item: any) => {
      return {
        title: item.properties.제목.title[0].text.content,
        subTitle: item.properties.부제목.rich_text[0].plain_text,
        period_end: getYearAndMonth(item.properties.기간.date.end),
        period_start: getYearAndMonth(item.properties.기간.date.start),
        stacks: item.properties.기술스택.multi_select.map((s: any) => s.name),
        role: item.properties.역할.rich_text[0].plain_text,
        gitHub_url: item.properties.깃허브.url,
        page_url: item.properties.주소.url ?? "",
        description: item.properties.상세설명.rich_text[0].plain_text,
        notion_url: item.url,
        photo: item.properties.사진.files.map((f: any) => f.file.url),
      };
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
  }
}
