import { buildPageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";

export const metadata = buildPageMetadata({
  path: "/terms",
  section: "static",
  title: "Terms of Use",
});

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl py-16">
      <Section id="terms" label="Terms of Service" eyebrow="Legal">
        <div className="space-y-6 text-sm text-zinc-200">
          <p className="text-base text-zinc-100">
            Last Updated: February 23, 2026
          </p>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-100">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using devsplsfix.com (the &quot;Website&quot;), you agree to
              be bound by these Terms of Service (&quot;Terms&quot;). If you do not
              agree to these Terms, please do not use our Website. We reserve
              the right to modify these Terms at any time, and your continued
              use of the Website constitutes acceptance of any changes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-100">
              2. Description of Service
            </h2>
            <p>
              devsplsfix.com provides information, guides, tutorials, and links
              to tools designed to help developers troubleshoot and fix common
              development issues. The Website includes written content, code
              examples, video tutorials, and references to third-party tools and
              resources.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-100">
              3. User Responsibilities
            </h2>
            <p>When using our Website, you agree to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Use the information and tools provided responsibly and at your
                own risk
              </li>
              <li>
                Not use the Website for any illegal or unauthorized purpose
              </li>
              <li>
                Not attempt to gain unauthorized access to any part of the
                Website, other users&apos; accounts, or computer systems
              </li>
              <li>
                Not introduce viruses, malware, or other harmful code to the
                Website
              </li>
              <li>
                Test any code, commands, or tools in a safe environment before
                using them in production systems
              </li>
              <li>
                Comply with all applicable laws and regulations in your
                jurisdiction
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-100">
              4. Intellectual Property
            </h2>
            <p>
              All content on devsplsfix.com, including but not limited to text,
              graphics, logos, code examples, videos, and software, is the
              property of devsplsfix.com or its content creators and is
              protected by copyright, trademark, and other intellectual property
              laws. You may view and use the content for personal,
              non-commercial purposes. Any code examples provided may be used in
              your projects unless otherwise specified.
            </p>
            <p>
              You may not reproduce, distribute, modify, create derivative works
              of, publicly display, or publicly perform any content from the
              Website without prior written permission, except as permitted
              under fair use or as explicitly stated.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-100">
              5. Third-Party Content and Links
            </h2>
            <p>
              Our Website contains links to third-party websites, tools, and
              resources that are not owned or controlled by devsplsfix.com. We
              are not responsible for the content, privacy policies, or
              practices of any third-party sites. The inclusion of any link does
              not imply endorsement by devsplsfix.com.
            </p>
            <p>
              Third-party tools referenced on our Website are provided by their
              respective owners and are subject to their own terms of service
              and licenses. You are responsible for reviewing and complying with
              the terms of any third-party services you use.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-100">
              6. Disclaimer of Warranties
            </h2>
            <p>
              THE WEBSITE AND ALL CONTENT, INFORMATION, TOOLS, AND RESOURCES ARE
              PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY
              KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
              IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, OR NON-INFRINGEMENT.
            </p>
            <p>
              We do not warrant that the Website will be uninterrupted, secure,
              or error-free, or that any defects will be corrected. We make no
              guarantees about the accuracy, completeness, or reliability of any
              content, information, or tools provided on the Website.
            </p>
            <p>
              You understand and agree that any code, commands, or tools you
              implement based on information from the Website may affect your
              systems, and you are solely responsible for testing and validating
              any changes in appropriate environments.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-100">
              7. Limitation of Liability
            </h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, DEVSPLSFIX.COM AND ITS
              OPERATORS, CONTRIBUTORS, AND AFFILIATES SHALL NOT BE LIABLE FOR
              ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
              PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS
              OF PROFITS, BUSINESS INTERRUPTION, OR SYSTEM DAMAGE, ARISING OUT
              OF OR IN CONNECTION WITH YOUR USE OF THE WEBSITE OR ANY CONTENT,
              INFORMATION, OR TOOLS PROVIDED.
            </p>
            <p>
              This limitation applies regardless of the legal theory on which
              the claim is based, whether in contract, tort (including
              negligence), strict liability, or otherwise, even if we have been
              advised of the possibility of such damages.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-100">
              8. Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless devsplsfix.com
              and its operators, contributors, and affiliates from and against
              any claims, liabilities, damages, losses, costs, expenses, or fees
              (including reasonable attorneys&apos; fees) arising from your use of
              the Website, your violation of these Terms, or your violation of
              any rights of another party.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-100">
              9. Modifications to Service and Terms
            </h2>
            <p>
              We reserve the right to modify, suspend, or discontinue any part
              of the Website at any time without notice. We also reserve the
              right to update these Terms at any time. Material changes will be
              indicated by updating the &quot;Last Updated&quot; date at the top of this
              page. Your continued use of the Website after any changes
              constitutes acceptance of the new Terms.
            </p>
            <p>
              It is your responsibility to review these Terms periodically for
              changes. If you do not agree to any modifications, you must stop
              using the Website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-100">
              10. Termination
            </h2>
            <p>
              We reserve the right to terminate or suspend your access to the
              Website, without prior notice or liability, for any reason,
              including if you breach these Terms. Upon termination, your right
              to use the Website will immediately cease.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-100">
              11. Governing Law and Dispute Resolution
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the jurisdiction in which devsplsfix.com operates,
              without regard to its conflict of law provisions. Any disputes
              arising from these Terms or your use of the Website shall be
              resolved through binding arbitration or in the courts of the
              appropriate jurisdiction.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-100">
              12. Severability
            </h2>
            <p>
              If any provision of these Terms is found to be invalid or
              unenforceable by a court of competent jurisdiction, the remaining
              provisions shall remain in full force and effect. The invalid or
              unenforceable provision shall be replaced with a valid provision
              that most closely matches the intent of the original provision.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-100">
              13. Entire Agreement
            </h2>
            <p>
              These Terms constitute the entire agreement between you and
              devsplsfix.com regarding your use of the Website and supersede all
              prior agreements and understandings, whether written or oral,
              relating to the subject matter herein.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-100">
              14. Contact Information
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us through the contact form on our Website or via the
              contact information provided in our footer.
            </p>
          </section>

          <div className="mt-8 border-t border-zinc-700 pt-6">
            <p className="text-xs text-zinc-400">
              By using devsplsfix.com, you acknowledge that you have read,
              understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}

