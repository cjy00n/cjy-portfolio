import { ProjectResult } from "@/types/api";
import { Project } from "@/types/model";
import { NextResponse } from "next/server";

const { Client } = require("@notionhq/client");

const NOTION_API_KEY = process.env.NOTION_API_KEY;
const NOTION_DB_ID = process.env.NOTION_TEMP_DB_ID;
const notion = new Client({ auth: NOTION_API_KEY });

export async function GET() {
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DB_ID,
    });

    const data: Project[] = response.results.map((item: ProjectResult) => {
      return {
        title: item.properties.제목.title[0].text.content,
        subTitle: item.properties.부제목.rich_text[0].text.content,
        period_end: item.properties.기간.date.end,
        period_start: item.properties.기간.date.start,
        stacks: item.properties.기술스택.multi_select.map((s) => s.name),
      };
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
  }
}
