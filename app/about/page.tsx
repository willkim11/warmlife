import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개",
  description: "따뜻한 일상의 운영 목적, 작성 원칙, 출처 사용 기준과 정정 요청 방법입니다.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="prose" style={{ maxWidth: "100%" }}>
      <h1>소개</h1>
      <p>
        따뜻한 일상은 한국에서 생활하는 사람이 자주 마주치는 돈과 제도 문제를 쉽게 확인할 수 있도록 정리하는 생활 정보 블로그입니다.
      </p>
      <p>
        주로 생활비 절약, 정부지원금, 보험, 주거 제도, 세금 일정처럼 실제 의사결정 전에 확인해야 하는 정보를 다룹니다.
      </p>
      <h2>작성 원칙</h2>
      <ul>
        <li>공식 기관, 약관, 보도자료, 공지사항을 우선 확인합니다.</li>
        <li>글 상단이나 본문에 기준일을 표시하고, 제도 변경 가능성을 함께 안내합니다.</li>
        <li>신청 경로, 준비 서류, 비교표처럼 독자가 바로 확인할 수 있는 정보를 우선합니다.</li>
        <li>개인별 판단이 필요한 금융·보험·세금 정보는 최종 확인처를 함께 안내합니다.</li>
      </ul>
      <h2>정정 요청</h2>
      <p>
        오래된 정보, 깨진 링크, 잘못된 설명을 발견하면 글 제목과 함께 아래 이메일로 알려 주세요. 확인 후 필요한 경우 본문을 수정하고 기준일을 갱신합니다.
      </p>
      <ul>
        <li>이메일: <a href="mailto:kmh1902@gmail.com">kmh1902@gmail.com</a></li>
      </ul>
    </div>
  );
}
