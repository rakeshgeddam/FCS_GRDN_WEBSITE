import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-brandRed mb-4">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">Terms of Service</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-bold">
            Last updated: February 7, 2026
          </p>
        </div>

        <div className="space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">1. Acceptance of Terms</h2>
            <p className="text-base">
              By downloading, installing, or using FocusGuardian (&quot;the App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.
            </p>
            <p className="text-base">
              These Terms constitute a legal agreement between you and FocusGuardian (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We may update these Terms from time to time; continued use after changes constitutes acceptance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">2. Description of the Service</h2>
            <p className="text-base">
              FocusGuardian is an iOS productivity application that helps you manage time, focus sessions, relationships, and goals with AI-powered insights. The Service includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Focus timer with iOS Focus mode integration</li>
              <li>Unified calendar with event creation and iOS Calendar sync</li>
              <li>AI-powered smart scheduling and task planning (Premium)</li>
              <li>Relationship and occasion management (Premium)</li>
              <li>Productivity analytics and focus buddy statistics</li>
              <li>Greeting card generation for occasions (Premium)</li>
              <li>Local event discovery</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">3. Eligibility</h2>
            <p className="text-base">
              You must be at least 13 years old (or the minimum age required in your jurisdiction) to use FocusGuardian. By using the App, you represent that you meet this age requirement. If you are under 18, you represent that your parent or legal guardian has reviewed and agreed to these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">4. Account and Profile</h2>
            <p className="text-base">
              FocusGuardian creates a local user profile on your device during onboarding. No server-side account is created. You are responsible for maintaining the security of your device and the data stored within the App.
            </p>
            <p className="text-base">
              You can delete your profile at any time using the Logout feature in Profile settings, or by deleting the App from your device.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">5. Subscription Terms</h2>
            <p className="text-base">
              FocusGuardian offers a freemium model with optional Premium subscription plans.
            </p>

            <h3 className="text-lg font-bold text-brandBlack dark:text-white">5.1 Free Plan</h3>
            <p className="text-base">The Free plan includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Focus Buddy basic insights and daily stats</li>
              <li>Calendar read and write access</li>
              <li>Manual event creation</li>
              <li>Account profile with name/photo customization</li>
              <li>Later List & Share Extension</li>
            </ul>

            <h3 className="text-lg font-bold text-brandBlack dark:text-white">5.2 Premium Plan</h3>
            <p className="text-base">The Premium plan includes all Free features plus:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Unlimited focus sessions</li>
              <li>Guardian Smart Scheduler (AI-powered)</li>
              <li>AI task planning and scheduling</li>
              <li>AI Greeting card generation for occasions</li>
              <li>Focus Buddy Advanced Analytics (Weekly & Monthly)</li>
              <li>Full relationship management</li>
              <li>Smart occasion reminders</li>
            </ul>

            <h3 className="text-lg font-bold text-brandBlack dark:text-white">5.3 Free Trial</h3>
            <p className="text-base">
              New users receive a 7-day free trial with full access to all Premium features. When the trial ends, you will be downgraded to the Free plan unless you subscribe. No payment is charged during the trial period.
            </p>

            <h3 className="text-lg font-bold text-brandBlack dark:text-white">5.4 Pricing and Payment</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Current subscription prices are displayed in the App and on the App Store. Prices may vary by region.</li>
              <li>Payment will be charged to your Apple ID account at the confirmation of purchase.</li>
              <li>Subscriptions are billed in advance on a recurring basis (monthly or yearly, depending on your selected plan).</li>
            </ul>

            <h3 className="text-lg font-bold text-brandBlack dark:text-white">5.5 Auto-Renewal</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current billing period.</li>
              <li>Your account will be charged for renewal within 24 hours prior to the end of the current period at the same rate.</li>
              <li>Any unused portion of a free trial period will be forfeited when you purchase a subscription.</li>
            </ul>

            <h3 className="text-lg font-bold text-brandBlack dark:text-white">5.6 Managing and Canceling Subscriptions</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>You can manage or cancel your subscription at any time through your Apple ID account settings (Settings &gt; Apple ID &gt; Subscriptions) or through the App&apos;s Subscription Management screen.</li>
              <li>Cancellation takes effect at the end of the current billing period. You will retain access to Premium features until the period ends.</li>
              <li>No refunds are provided for partial billing periods. Refund requests are handled through Apple&apos;s standard refund process at <a href="https://reportaproblem.apple.com" className="text-brandRed hover:underline" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>.</li>
            </ul>

            <h3 className="text-lg font-bold text-brandBlack dark:text-white">5.7 Price Changes</h3>
            <p className="text-base">
              We reserve the right to change subscription prices. If we change the price, we will notify you in advance and give you the opportunity to cancel before the new price takes effect. Price changes will not affect the current billing period.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">6. User Content and Data</h2>
            <p className="text-base">
              You retain ownership of all content you create within FocusGuardian, including events, tasks, goals, relationships, and notes. We do not claim any intellectual property rights over your content.
            </p>
            <p className="text-base">
              When you use AI-powered features, your task descriptions and scheduling context may be sent to third-party AI services (Google Gemini) for processing. By using these features, you grant us permission to transmit this data for the purpose of providing the Service. No personal identifiers are included in these transmissions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">7. Acceptable Use</h2>
            <p className="text-base">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Misuse the Service, attempt to disrupt its operations, or access systems without authorization.</li>
              <li>Use the Service to violate any applicable laws, regulations, or third-party rights.</li>
              <li>Reverse engineer, decompile, disassemble, or attempt to extract the source code of the App.</li>
              <li>Use the AI features to generate harmful, abusive, or illegal content.</li>
              <li>Circumvent or attempt to circumvent subscription restrictions or feature gates.</li>
              <li>Redistribute, sublicense, or resell the App or any part of the Service.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">8. Intellectual Property</h2>
            <p className="text-base">
              The FocusGuardian app, including its design, code, graphics, logos, and all associated intellectual property, is owned by us and protected by copyright, trademark, and other intellectual property laws. You are granted a limited, non-exclusive, non-transferable, revocable license to use the App for personal, non-commercial purposes in accordance with these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">9. Third-Party Services</h2>
            <p className="text-base">
              FocusGuardian integrates with third-party services including Google Gemini API, Apple StoreKit, and Brave Search API. Your use of these services is subject to their respective terms of service and privacy policies. We are not responsible for the practices or content of third-party services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">10. Disclaimer of Warranties</h2>
            <p className="text-base">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-base">
              We do not warrant that the Service will be uninterrupted, error-free, or completely secure. AI-generated schedules, task plans, and suggestions are provided as recommendations only and should not be relied upon as professional advice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">11. Limitation of Liability</h2>
            <p className="text-base">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL FOCUSGUARDIAN, ITS DEVELOPERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF DATA, PROFITS, REVENUES, BUSINESS OPPORTUNITIES, OR GOODWILL, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY.
            </p>
            <p className="text-base">
              OUR TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE SERVICE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">12. Indemnification</h2>
            <p className="text-base">
              You agree to indemnify, defend, and hold harmless FocusGuardian and its developers from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or related to your use of the Service, violation of these Terms, or violation of any rights of a third party.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">13. Termination</h2>
            <p className="text-base">
              We reserve the right to suspend or terminate your access to the Service at any time, with or without cause, and with or without notice. You may terminate your use of the Service at any time by deleting the App from your device and canceling any active subscriptions.
            </p>
            <p className="text-base">
              Upon termination, your right to use the Service ceases immediately. Sections regarding intellectual property, limitation of liability, indemnification, and governing law survive termination.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">14. Apple-Specific Terms</h2>
            <p className="text-base">
              The following additional terms apply to your use of the App obtained through the Apple App Store:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>These Terms are between you and FocusGuardian, not Apple. Apple is not responsible for the App or its content.</li>
              <li>Apple has no obligation to provide maintenance or support services for the App.</li>
              <li>In the event of any failure of the App, you may notify Apple, and Apple will refund the purchase price (if applicable). Apple has no other warranty obligation.</li>
              <li>Apple is not responsible for addressing any claims relating to the App, including product liability, legal compliance, or intellectual property infringement.</li>
              <li>Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">15. Changes to These Terms</h2>
            <p className="text-base">
              We may modify these Terms at any time. We will notify you of material changes by updating the &quot;Last updated&quot; date at the top of this page and, where possible, through an in-app notification. Your continued use of the Service after changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">16. Governing Law and Dispute Resolution</h2>
            <p className="text-base">
              These Terms are governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of laws principles.
            </p>
            <p className="text-base">
              Any dispute arising from these Terms or your use of the Service shall first be attempted to be resolved through informal negotiation. If unresolved after 30 days, the dispute shall be settled through binding arbitration in accordance with the rules of the American Arbitration Association.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">17. Severability</h2>
            <p className="text-base">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be modified to the minimum extent necessary to make it valid and enforceable.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">18. Entire Agreement</h2>
            <p className="text-base">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and FocusGuardian regarding your use of the Service and supersede all prior agreements and understandings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">19. Contact Us</h2>
            <p className="text-base">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-base font-semibold">
              Email: rakeshgeddam2025@gmail.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsOfService;
