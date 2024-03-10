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
        plain_text: string;
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
    상세설명: {
      rich_text: {
        plain_text: string;
      }[];
    };
    역할: {
      rich_text: {
        plain_text: string;
      }[];
    };
    깃허브: {
      url: string;
    };
    주소: {
      url: string;
    };
  };
}
