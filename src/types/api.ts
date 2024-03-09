export interface ProjectResult {
  properties: {
    제목: {
      title: {
        text: {
          content: string;
        };
      }[];
    };
    부제목: {
      rich_text: {
        text: {
          content: string;
        };
      }[];
    };
    기간: {
      date: {
        start: string;
        end: string;
      };
    };
    기술스택: {
      multi_select: {
        name: string;
      }[];
    };
  };
}
