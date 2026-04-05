import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개",
  description: "블로그 운영자 소개 페이지입니다.",
};

export default function AboutPage() {
  return (
    <div className="prose" style={{ maxWidth: "100%" }}>
      <h1>소개</h1>
      <p>
        안녕하세요. 이 블로그는 직접 경험한 것들을 솔직하게 기록하는 공간입니다.
      </p>
      <p>
        좋은 정보를 나누고 싶어서 만들었어요. 글을 읽고 도움이 됐다면 그걸로 충분합니다.
      </p>
      <h2>연락처</h2>
      <p>
        피드백이나 문의사항은 아래로 연락해 주세요.
      </p>
      <ul>
        <li>이메일: <a href="mailto:kmh1902@gmail.com">kmh1902@gmail.com</a></li>
      </ul>
    </div>
  );
}
