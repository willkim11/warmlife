import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "면책 안내",
  description: "따뜻한 일상의 생활 정보, 금융·보험·세금 관련 글에 대한 면책 안내입니다.",
  alternates: {
    canonical: "/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="prose" style={{ maxWidth: "100%" }}>
      <h1>면책 안내</h1>
      <p>
        따뜻한 일상의 모든 글은 생활 정보 제공을 목적으로 작성됩니다. 법률, 세무, 투자, 보험, 의료 자문을 대신하지 않습니다.
      </p>
      <h2>제도성 정보</h2>
      <p>
        정부지원금, 세금, 보험, 대출, 주거 제도는 시행일, 거주지, 소득, 재산, 가입 조건에 따라 적용 결과가 달라질 수 있습니다. 신청 또는 계약 전에는 반드시 공식 기관, 금융회사, 보험회사, 지자체 공지와 약관을 확인해 주세요.
      </p>
      <h2>외부 링크</h2>
      <p>
        본문에는 확인을 돕기 위한 외부 링크가 포함될 수 있습니다. 외부 사이트의 내용, 정책, 서비스 변경에 대해서는 따뜻한 일상이 책임지지 않습니다.
      </p>
      <h2>광고</h2>
      <p>
        이 사이트는 Google AdSense 등 광고 프로그램을 사용할 수 있습니다. 광고 콘텐츠와 광고주 사이트의 상품·서비스는 따뜻한 일상의 편집 의견과 다를 수 있습니다.
      </p>
    </div>
  );
}

