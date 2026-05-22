import type { Metadata } from "next";
import { SITE_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "문의",
  description: "따뜻한 일상 문의, 정정 요청, 제보 안내입니다.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="prose" style={{ maxWidth: "100%" }}>
      <h1>문의</h1>
      <p>
        글 정정 요청, 깨진 링크 제보, 콘텐츠 관련 문의는 이메일로 보내 주세요.
      </p>
      <ul>
        <li>이메일: <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a></li>
      </ul>
      <h2>정정 요청 시 포함하면 좋은 내용</h2>
      <ul>
        <li>문제가 있는 글 제목 또는 주소</li>
        <li>수정이 필요하다고 본 문장이나 링크</li>
        <li>확인 가능한 공식 출처가 있다면 해당 주소</li>
      </ul>
      <p>
        접수된 내용은 확인 후 필요한 경우 본문에 반영합니다. 제도, 지원금, 보험 조건은 시행 기관과 상품 약관에 따라 달라질 수 있습니다.
      </p>
    </div>
  );
}

