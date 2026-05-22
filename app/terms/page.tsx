import type { Metadata } from "next";
import { SITE_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "이용약관",
  description: "따뜻한 일상 이용약관입니다.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="prose" style={{ maxWidth: "100%" }}>
      <h1>이용약관</h1>
      <p>
        본 약관은 {SITE_NAME} 웹사이트 이용에 관한 기본 사항을 안내합니다.
      </p>
      <h2>콘텐츠 이용</h2>
      <p>
        사이트의 글과 자료는 개인적인 정보 확인 목적으로 이용할 수 있습니다. 무단 복제, 재배포, 상업적 이용은 허용하지 않습니다.
      </p>
      <h2>정보의 정확성</h2>
      <p>
        가능한 한 정확한 정보를 제공하기 위해 노력하지만, 제도와 상품 조건은 수시로 변경될 수 있습니다. 중요한 결정 전에는 공식 출처와 담당 기관을 확인해야 합니다.
      </p>
      <h2>문의</h2>
      <p>
        약관 관련 문의는 <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>로 보내 주세요.
      </p>
    </div>
  );
}
