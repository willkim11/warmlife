import type { Metadata } from "next";
import { SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "따뜻한 일상 블로그의 개인정보처리방침입니다.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const effectiveDate = "2026년 5월 22일";

  return (
    <div className="prose" style={{ maxWidth: "100%" }}>
      <h1>개인정보처리방침</h1>
      <p>
        <strong>{SITE_NAME}</strong>({SITE_URL})은 이용자의 개인정보를 중요하게 생각하며, 관련 법령을 준수하기 위해 아래와 같이 개인정보처리방침을 안내합니다.
      </p>
      <p>본 방침은 {effectiveDate}부터 적용됩니다.</p>

      <h2>1. 수집하는 개인정보</h2>
      <p>
        이 사이트는 별도의 회원가입 기능을 운영하지 않으며, 이용자가 직접 입력하는 개인정보를 상시 수집하지 않습니다. 다만 서비스 제공과 보안, 통계 분석 과정에서 아래 정보가 자동으로 처리될 수 있습니다.
      </p>
      <ul>
        <li>접속 IP, 브라우저 정보, 방문 기록 등 로그 정보</li>
        <li>쿠키를 통한 광고 및 분석 관련 정보</li>
      </ul>

      <h2>2. 이용 목적</h2>
      <ul>
        <li>사이트 이용 통계 분석과 콘텐츠 개선</li>
        <li>부정 이용 방지와 서비스 안정성 유지</li>
        <li>Google AdSense 등 광고 서비스 제공</li>
      </ul>

      <h2>3. 쿠키와 광고</h2>
      <p>
        이 사이트는 Google AdSense를 사용할 수 있습니다. Google과 제휴사는 쿠키를 사용해 이용자의 이전 방문 기록 또는 관심사에 기반한 광고를 표시할 수 있습니다.
      </p>
      <p>
        이용자는 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google 광고 설정</a>에서 맞춤 광고를 관리할 수 있으며, Google의 개인정보 처리 방식은 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google 개인정보처리방침</a>에서 확인할 수 있습니다.
      </p>

      <h2>4. 보유 및 파기</h2>
      <p>
        자동으로 수집되는 정보는 수집 목적 달성 후 지체 없이 파기되며, 관계 법령에 따라 보관이 필요한 경우 해당 기간 동안 보관될 수 있습니다.
      </p>

      <h2>5. 이용자의 권리</h2>
      <p>
        개인정보 관련 문의, 열람, 정정, 삭제 요청은 아래 이메일로 보낼 수 있습니다.
      </p>
      <ul>
        <li>이메일: <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a></li>
      </ul>

      <h2>6. 방침 변경</h2>
      <p>
        법령 또는 서비스 변경에 따라 본 방침이 수정될 수 있으며, 중요한 변경 사항은 사이트 내 공지 또는 본 페이지 갱신으로 안내합니다.
      </p>
    </div>
  );
}
