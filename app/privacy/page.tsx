import { buildPageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";

export const metadata = buildPageMetadata({
  path: "/privacy",
  section: "static",
  title: "Privacy Policy",
});

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl py-16 px-4">
      <Section id="privacy" label="Privacy Policy" eyebrow="Last Updated: February 23, 2026">
        <div className="prose prose-invert prose-zinc max-w-none space-y-8">
          
          {/* Introduction */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-100">1. Introduction</h2>
            <p className="text-zinc-300 leading-relaxed">
              DevSplsFix (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy and personal data. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              devsplsfix.com (the &quot;Site&quot;), in accordance with the General Data Protection Regulation (GDPR) and other applicable 
              data protection laws.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Please read this Privacy Policy carefully to understand our practices regarding your personal data. Where we require 
              your consent for specific processing activities, we will seek your explicit, informed consent separately.
            </p>
          </div>

          {/* Data Controller */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-100">2. Data Controller</h2>
            <p className="text-zinc-300 leading-relaxed">
              The data controller responsible for your personal data is:
            </p>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-zinc-300">
              <p>DevSplsFix</p>
              <p>Email: privacy@devsplsfix.com</p>
              <p>Contact: contact@devsplsfix.com</p>
            </div>
          </div>

          {/* Information We Collect */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-100">3. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-zinc-200">3.1 Information You Provide</h3>
            <p className="text-zinc-300 leading-relaxed">
              We may collect personal information that you voluntarily provide when you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
              <li>Submit contact forms or inquiries</li>
              <li>Subscribe to our newsletter or updates</li>
              <li>Participate in interactive features</li>
              <li>Report issues or provide feedback</li>
            </ul>
            <p className="text-zinc-300 leading-relaxed">
              This may include: name, email address, message content, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold text-zinc-200">3.2 Automatically Collected Information</h3>
            <p className="text-zinc-300 leading-relaxed">
              When you visit our Site, we automatically collect certain information about your device and browsing activities, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Device information and operating system</li>
              <li>Pages visited, time spent, and navigation paths</li>
              <li>Referral source and exit pages</li>
              <li>Date and time stamps</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-200">3.3 Cookies and Tracking Technologies</h3>
            <p className="text-zinc-300 leading-relaxed">
              We use cookies, web beacons, and similar tracking technologies to enhance your experience. 
              See Section 9 for detailed information about our cookie usage.
            </p>
          </div>

          {/* Legal Basis for Processing */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-100">4. Legal Basis for Processing</h2>
            <p className="text-zinc-300 leading-relaxed">
              Under GDPR, we process your personal data based on the following legal grounds:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
              <li><strong>Consent:</strong> You have given explicit consent for processing your data for specific purposes</li>
              <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests, such as improving our services, analytics, and security</li>
              <li><strong>Legal Obligation:</strong> Processing is necessary to comply with legal requirements</li>
              <li><strong>Contract:</strong> Processing is necessary to fulfill our contractual obligations to you</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-100">5. How We Use Your Information</h2>
            <p className="text-zinc-300 leading-relaxed">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
              <li>To provide, operate, and maintain our Site</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send you updates, newsletters, and marketing communications (with your consent)</li>
              <li>To improve and personalize your experience</li>
              <li>To analyze usage patterns and optimize Site performance</li>
              <li>To detect, prevent, and address technical issues and security threats</li>
              <li>To comply with legal obligations and enforce our terms</li>
              <li>To develop new features and services</li>
            </ul>
          </div>

          {/* Data Retention */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-100">6. Data Retention</h2>
            <p className="text-zinc-300 leading-relaxed">
              We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
              unless a longer retention period is required or permitted by law. When data is no longer needed, we will securely 
              delete or anonymize it.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Typical retention periods:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
              <li>Contact form submissions: 2 years from last contact</li>
              <li>Analytics data: 26 months (anonymized)</li>
              <li>Newsletter subscriptions: Until you unsubscribe</li>
              <li>Legal obligations: As required by applicable law</li>
            </ul>
          </div>

          {/* Data Sharing and Disclosure */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-100">7. Data Sharing and Disclosure</h2>
            <p className="text-zinc-300 leading-relaxed">
              We do not sell your personal data. We may share your information with:
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-200">7.1 Service Providers</h3>
            <p className="text-zinc-300 leading-relaxed">
              Third-party vendors who perform services on our behalf, such as:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
              <li>Hosting and infrastructure providers</li>
              <li>Analytics services (e.g., Google Analytics)</li>
              <li>Email service providers</li>
              <li>Content delivery networks</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-200">7.2 Legal Requirements</h3>
            <p className="text-zinc-300 leading-relaxed">
              We may disclose your information if required to do so by law or in response to valid requests by public authorities, 
              or to protect our rights, privacy, safety, or property.
            </p>

            <h3 className="text-xl font-semibold text-zinc-200">7.3 Business Transfers</h3>
            <p className="text-zinc-300 leading-relaxed">
              In the event of a merger, acquisition, or sale of assets, your personal data may be transferred to the acquiring entity.
            </p>
          </div>

          {/* Your Rights Under GDPR */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-100">8. Your Rights Under GDPR</h2>
            <p className="text-zinc-300 leading-relaxed">
              If you are located in the European Economic Area (EEA), you have the following data protection rights:
            </p>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-zinc-200">Right to Access</h4>
                <p className="text-zinc-300 text-sm">Request copies of your personal data</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-zinc-200">Right to Rectification</h4>
                <p className="text-zinc-300 text-sm">Request correction of inaccurate or incomplete data</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-zinc-200">Right to Erasure (&quot;Right to be Forgotten&quot;)</h4>
                <p className="text-zinc-300 text-sm">Request deletion of your personal data under certain conditions</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-zinc-200">Right to Restrict Processing</h4>
                <p className="text-zinc-300 text-sm">Request restriction of processing your personal data</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-zinc-200">Right to Data Portability</h4>
                <p className="text-zinc-300 text-sm">Request transfer of your data to another organization or directly to you</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-zinc-200">Right to Object</h4>
                <p className="text-zinc-300 text-sm">Object to processing of your personal data</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-zinc-200">Right to Withdraw Consent</h4>
                <p className="text-zinc-300 text-sm">Withdraw consent at any time where we rely on consent to process your data</p>
              </div>
            </div>

            <p className="text-zinc-300 leading-relaxed mt-4">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:privacy@devsplsfix.com" className="text-blue-400 hover:text-blue-300 underline">
                privacy@devsplsfix.com
              </a>
              . We will respond to your request within one month of receipt. This period may be extended by two further months 
              where necessary, taking into account the complexity and number of requests. We will inform you of any such extension.
            </p>
          </div>

          {/* Cookies and Tracking */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-100">9. Cookies and Tracking Technologies</h2>
            
            <h3 className="text-xl font-semibold text-zinc-200">9.1 What Are Cookies</h3>
            <p className="text-zinc-300 leading-relaxed">
              Cookies are small text files placed on your device to collect standard internet log information and visitor behavior. 
              We use cookies to improve your experience, analyze Site usage, and deliver personalized content.
            </p>

            <h3 className="text-xl font-semibold text-zinc-200">9.2 Types of Cookies We Use</h3>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
              <li><strong>Essential Cookies:</strong> Required for the Site to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our Site</li>
              <li><strong>Functional Cookies:</strong> Enable enhanced functionality and personalization</li>
              <li><strong>Marketing Cookies:</strong> Track visitors across websites to display relevant ads</li>
            </ul>

            <h3 className="text-xl font-semibold text-zinc-200">9.3 Managing Cookies</h3>
            <p className="text-zinc-300 leading-relaxed">
              You can control and manage cookies through your browser settings. Note that disabling cookies may affect Site functionality. 
              You can also opt out of Google Analytics by installing the{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
          </div>

          {/* International Data Transfers */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-100">10. International Data Transfers</h2>
            <p className="text-zinc-300 leading-relaxed">
              Your information may be transferred to and maintained on servers located outside of your country, where data protection 
              laws may differ. We ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the 
              European Commission, to protect your personal data in compliance with GDPR.
            </p>
          </div>

          {/* Data Security */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-100">11. Data Security</h2>
            <p className="text-zinc-300 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, 
              alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-zinc-300 ml-4">
              <li>SSL/TLS encryption for data in transit</li>
              <li>Secure data storage with access controls</li>
              <li>Regular security assessments and updates</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="text-zinc-300 leading-relaxed">
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Automated Decision-Making */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-100">12. Automated Decision-Making and Profiling</h2>
            <p className="text-zinc-300 leading-relaxed">
              We do not use automated decision-making or profiling that produces legal effects or similarly significantly affects you. 
              Any analytics conducted on our Site are used solely for aggregate statistical purposes and do not result in automated 
              decisions about individuals.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-100">13. Children&apos;s Privacy</h2>
            <p className="text-zinc-300 leading-relaxed">
              Our Site is not intended for children under 16 years of age. We do not knowingly collect personal data from children. 
              If you believe we have collected information from a child, please contact us immediately, and we will take steps to 
              delete such information.
            </p>
          </div>

          {/* Data Breach Notification */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-100">14. Data Breach Notification</h2>
            <p className="text-zinc-300 leading-relaxed">
              In the event of a data breach that is likely to result in a risk to your rights and freedoms, we will notify the 
              relevant supervisory authority within 72 hours of becoming aware of the breach. If the breach is likely to result in 
              a high risk to your rights and freedoms, we will also notify you without undue delay and provide information about 
              the nature of the breach and the measures taken to address it.
            </p>
          </div>

          {/* Third-Party Links */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-100">15. Third-Party Links</h2>
            <p className="text-zinc-300 leading-relaxed">
              Our Site may contain links to third-party websites. We are not responsible for the privacy practices of these external 
              sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </div>

          {/* Changes to This Privacy Policy */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-100">16. Changes to This Privacy Policy</h2>
            <p className="text-zinc-300 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
              The &quot;Last Updated&quot; date at the top indicates when the policy was last revised. We encourage you to review 
              this policy periodically. Continued use of the Site after changes constitutes acceptance of the updated policy.
            </p>
          </div>

          {/* Your Right to Lodge a Complaint */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-100">17. Right to Lodge a Complaint</h2>
            <p className="text-zinc-300 leading-relaxed">
              If you are located in the EEA and believe we have not handled your personal data in accordance with GDPR, you have 
              the right to lodge a complaint with your local supervisory authority. A list of supervisory authorities is available at{" "}
              <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                edpb.europa.eu
              </a>.
            </p>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-100">18. Contact Us</h2>
            <p className="text-zinc-300 leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-zinc-300">
              <p><strong>DevSplsFix Data Protection Officer</strong></p>
              <p>Email: <a href="mailto:privacy@devsplsfix.com" className="text-blue-400 hover:text-blue-300 underline">privacy@devsplsfix.com</a></p>
              <p>General Contact: <a href="mailto:contact@devsplsfix.com" className="text-blue-400 hover:text-blue-300 underline">contact@devsplsfix.com</a></p>
            </div>
            <p className="text-zinc-300 leading-relaxed">
              We will respond to all legitimate requests within one month. This period may be extended by two further months in 
              complex cases. You will be informed of any such extension.
            </p>
          </div>

        </div>
      </Section>
    </main>
  );
}

