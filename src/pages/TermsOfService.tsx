import LegalPageLayout, { LegalIcons } from "@/components/LegalPageLayout";

export default function TermsOfService() {
  return (
    <LegalPageLayout title="Terms of Service" icon={LegalIcons.terms} lastUpdated="2026-03-20">
      <h2>接受条款</h2>
      <p>访问或使用本网站即表示你同意本条款。</p>

      <h2>内容说明</h2>
      <ul>
        <li>本网站提供 Port of Honfleur（翁弗勒尔港）景点导览信息与位置参考。</li>
        <li>页面中的评分/评价/照片等素材可能来自第三方公开页面或嵌入内容，归其各自权利人所有。</li>
      </ul>

      <h2>免责条款</h2>
      <p>
        我们会尽力保持信息的可用性与准确性，但不对因信息变更、第三方服务不可用、或你的使用方式导致的
        任何损失承担责任。
      </p>

      <h2>外部链接</h2>
      <p>本网站可能包含指向第三方网站的链接。第三方内容与政策由其自行负责。</p>

      <h2>联系我们</h2>
      <p>如需技术支持，请通过页脚邮箱联系。</p>
    </LegalPageLayout>
  );
}
