import LegalPageLayout, { LegalIcons } from "@/components/LegalPageLayout";

export default function CookieSettings() {
  return (
    <LegalPageLayout title="Cookie Settings" icon={LegalIcons.cookies} lastUpdated="2026-03-20">
      <h2>Cookie 使用说明</h2>
      <p>
        本网站本身不主动写入 Cookie。但页面包含 Google Maps 嵌入内容，Google 可能基于其策略设置 Cookie
        以提供地图功能与改进体验。
      </p>

      <h2>如何管理 Cookie</h2>
      <ul>
        <li>你可以在浏览器设置中清除或阻止 Cookie。</li>
        <li>阻止第三方 Cookie 可能导致地图功能不可用或体验下降。</li>
      </ul>

      <h2>偏好设置</h2>
      <p>
        由于本网站为静态页面，目前不提供站内的 Cookie 偏好开关。你可以使用浏览器层面的隐私控制。
      </p>
    </LegalPageLayout>
  );
}
