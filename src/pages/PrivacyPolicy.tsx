import LegalPageLayout, { LegalIcons } from "@/components/LegalPageLayout";

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Privacy Policy" icon={LegalIcons.privacy} lastUpdated="2026-03-20">
      <h2>概览</h2>
      <p>
        本页面用于说明本网站如何处理信息。本网站为静态景点介绍页，不提供账号注册，不要求登录。
      </p>

      <h2>我们收集哪些信息</h2>
      <ul>
        <li>
          <strong>访问统计（如启用）</strong>：可能由托管平台自动提供的匿名统计（例如页面访问量）。
        </li>
        <li>
          <strong>嵌入内容</strong>：本网站包含 Google Maps 的嵌入 iframe。该嵌入内容可能由第三方根据其政策
          设置 Cookie 或收集使用数据。
        </li>
      </ul>

      <h2>我们如何使用信息</h2>
      <p>信息仅用于改善页面展示与基础运维，不用于广告定向或出售。</p>

      <h2>第三方服务</h2>
      <p>
        Google Maps 由 Google 提供。其数据收集与 Cookie 政策以 Google 的条款与隐私政策为准。
      </p>

      <h2>联系我们</h2>
      <p>
        如对隐私相关问题有疑问，请通过页面页脚提供的技术支持邮箱联系。
      </p>
    </LegalPageLayout>
  );
}
