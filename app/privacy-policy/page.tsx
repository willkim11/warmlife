import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "따뜻한 일상 블로그의 개인정보처리방침입니다.",
};

export default function PrivacyPolicyPage() {
  const siteName = "따뜻한 일상";
  const siteUrl = "https://warmlife.vercel.app"; // 도메인 확정 후 교체
  const email = "kmh1902@gmail.com"; // 실제 이메일로 교체
  const today = "2026년 4월 5일";

  return (
    <div className="prose" style={{ maxWidth: "100%" }}>
      <h1>개인정보처리방침</h1>
      <p>
        <strong>{siteName}</strong>({siteUrl})은 이용자의 개인정보를 중요시하며,
        「개인정보 보호법」을 준수하고 있습니다.
      </p>
      <p>본 방침은 {today}부터 적용됩니다.</p>

      <h2>1. 수집하는 개인정보</h2>
      <p>
        본 블로그는 별도의 회원가입 없이 이용할 수 있으며, 이용자가 직접 입력하는
        개인정보는 수집하지 않습니다. 다만 아래 정보가 자동으로 수집될 수 있습니다.
      </p>
      <ul>
        <li>서비스 이용 기록, 접속 로그, 접속 IP 정보</li>
        <li>쿠키(Cookie) — 광고 서비스 제공 목적</li>
      </ul>

      <h2>2. 개인정보의 수집 및 이용 목적</h2>
      <ul>
        <li>서비스 이용 통계 분석 (Google Analytics)</li>
        <li>맞춤형 광고 제공 (Google AdSense)</li>
      </ul>

      <h2>3. 쿠키(Cookie) 운영</h2>
      <p>
        본 블로그는 Google Analytics 및 Google AdSense를 사용하며, 이 서비스들은
        쿠키를 사용합니다. 쿠키는 브라우저 설정에서 거부할 수 있으나, 일부 서비스
        이용이 제한될 수 있습니다.
      </p>

      <h2>4. Google AdSense 및 제3자 광고</h2>
      <p>
        본 블로그는 Google AdSense를 통해 광고를 게재합니다. Google은 쿠키를
        사용하여 이용자의 관심사에 맞는 광고를 표시할 수 있습니다. Google의
        광고 및 개인정보 처리 방침은{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google 개인정보처리방침
        </a>
        에서 확인할 수 있습니다.
      </p>
      <p>
        이용자는{" "}
        <a
          href="https://www.google.com/settings/ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google 광고 설정
        </a>
        에서 맞춤형 광고를 거부할 수 있습니다.
      </p>

      <h2>5. 개인정보의 보유 및 이용 기간</h2>
      <p>
        수집된 개인정보는 수집 목적이 달성된 후 지체 없이 파기합니다. 단, 관계
        법령에 따라 보존해야 하는 경우 해당 기간 동안 보관합니다.
      </p>

      <h2>6. 이용자의 권리</h2>
      <p>이용자는 언제든지 아래 이메일로 개인정보 열람, 수정, 삭제를 요청할 수 있습니다.</p>
      <ul>
        <li>이메일: <a href={`mailto:${email}`}>{email}</a></li>
      </ul>

      <h2>7. 개인정보처리방침 변경</h2>
      <p>
        본 방침은 법령 또는 서비스 변경에 따라 수정될 수 있습니다. 변경 시 블로그
        공지를 통해 안내합니다.
      </p>

      <hr />
      <p style={{ fontSize: "0.875rem" }}>
        시행일: {today} | 운영자: {siteName} | 문의: {email}
      </p>
    </div>
  );
}
