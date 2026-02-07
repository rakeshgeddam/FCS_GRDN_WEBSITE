import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-brandRed mb-4">Legal</p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-bold">
            Last updated: February 7, 2026
          </p>
        </div>

        <div className="space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">1. Overview</h2>
            <p className="text-base">
              This Privacy Policy explains how FocusGuardian (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, stores, and protects your information when you use the FocusGuardian iOS application and related services (collectively, the &quot;Service&quot;). By using FocusGuardian, you agree to the practices described in this policy.
            </p>
            <p className="text-base">
              We are committed to protecting your privacy. FocusGuardian is designed with a privacy-first architecture where your personal data stays on your device by default.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">2. Information We Collect</h2>

            <h3 className="text-lg font-bold text-brandBlack dark:text-white">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold">Name</span> &mdash; Provided during onboarding to personalize your experience.</li>
              <li><span className="font-semibold">Email address</span> (optional) &mdash; Provided during onboarding for account identification.</li>
              <li><span className="font-semibold">Profile photo</span> (optional) &mdash; Stored locally on your device.</li>
              <li><span className="font-semibold">Focus session data</span> &mdash; Timer durations, session titles, and completion status you create.</li>
              <li><span className="font-semibold">Calendar events</span> &mdash; Tasks, meetings, occasions, and travel events you manually create within the app.</li>
              <li><span className="font-semibold">Relationship information</span> &mdash; Names, occasions, and notes for people you add to the app.</li>
              <li><span className="font-semibold">Goals and tasks</span> &mdash; Goals and task data you create for productivity tracking.</li>
              <li><span className="font-semibold">Voice/text planning input</span> &mdash; Natural language input you provide for AI task planning.</li>
            </ul>

            <h3 className="text-lg font-bold text-brandBlack dark:text-white">2.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold">iOS Calendar data</span> &mdash; With your permission, we read events from your iOS Calendar to display them in the unified timeline. We do not modify or delete your iOS Calendar events without your explicit action.</li>
              <li><span className="font-semibold">Focus mode status</span> &mdash; We interact with iOS Focus modes via Shortcuts to enable/disable Focus during your sessions.</li>
              <li><span className="font-semibold">Productivity analytics</span> &mdash; Session completion rates, focus streaks, and productivity scores are calculated and stored locally.</li>
              <li><span className="font-semibold">Subscription status</span> &mdash; Your subscription tier and transaction data are managed by Apple through StoreKit and are subject to Apple&apos;s privacy practices.</li>
            </ul>

            <h3 className="text-lg font-bold text-brandBlack dark:text-white">2.3 Information We Do NOT Collect</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>We do not collect or access your passwords, financial information, or payment details. All subscription payments are processed by Apple.</li>
              <li>We do not collect precise location data. Location is only used when you explicitly use the Discover feature to find nearby events.</li>
              <li>We do not use advertising trackers, analytics SDKs, or third-party tracking tools.</li>
              <li>We do not sell, rent, or share your personal data with third parties for advertising purposes.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">3. How We Use Your Information</h2>
            <p className="text-base">We use your information solely to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and personalize the FocusGuardian experience (timers, scheduling, calendar).</li>
              <li>Generate AI-powered task plans and smart scheduling when you request it.</li>
              <li>Display your iOS Calendar events in the unified timeline view.</li>
              <li>Calculate and display productivity analytics and focus buddy statistics.</li>
              <li>Send local notifications for focus sessions, scheduled events, and occasion reminders.</li>
              <li>Generate greeting card suggestions for your relationships.</li>
              <li>Process subscription purchases and manage your subscription status.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">4. How Data Is Stored</h2>
            <p className="text-base">
              FocusGuardian stores your data <span className="font-semibold">locally on your device</span> using Apple&apos;s SwiftData framework. Your personal information, calendar events, focus sessions, relationships, and analytics are kept on your device and are not uploaded to our servers.
            </p>
            <p className="text-base">
              Subscription and transaction data is managed by Apple through StoreKit 2 and is stored according to Apple&apos;s data practices.
            </p>
            <p className="text-base">
              Shared data between the main app and its extensions (widgets, share extension) is stored in a shared App Group container on your device.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">5. Third-Party Services</h2>
            <p className="text-base">FocusGuardian integrates with the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <span className="font-semibold">Google Gemini API</span> &mdash; When you use AI-powered features (smart scheduling, voice planning, event classification), your task descriptions and scheduling context are sent to Google&apos;s Gemini API for processing. No personal identifiers (name, email) are included in these requests. Google&apos;s API data usage is governed by <a href="https://ai.google.dev/gemini-api/terms" className="text-brandRed hover:underline" target="_blank" rel="noopener noreferrer">Google&apos;s API Terms of Service</a>.
              </li>
              <li>
                <span className="font-semibold">Apple StoreKit</span> &mdash; Subscription purchases, renewals, and billing are handled entirely by Apple. We do not process, store, or have access to your payment information. See <a href="https://www.apple.com/legal/privacy/" className="text-brandRed hover:underline" target="_blank" rel="noopener noreferrer">Apple&apos;s Privacy Policy</a>.
              </li>
              <li>
                <span className="font-semibold">Brave Search API</span> &mdash; When you use the Discover feature to find local events, your city name is sent to the Brave Search API. No personal identifiers are included.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">6. Device Permissions</h2>
            <p className="text-base">FocusGuardian may request the following device permissions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold">Calendar Access</span> &mdash; To read and display your iOS Calendar events in the unified timeline.</li>
              <li><span className="font-semibold">Notifications</span> &mdash; To send reminders for focus sessions, events, and occasions.</li>
              <li><span className="font-semibold">Location</span> (when in use) &mdash; For the Discover feature to find nearby events. Only used when you open the Discover tab.</li>
              <li><span className="font-semibold">Contacts</span> &mdash; To link relationship profiles with your contact book for occasion reminders.</li>
            </ul>
            <p className="text-base">
              All permissions are optional and requested only when needed. You can revoke any permission at any time in iOS Settings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">7. Data Retention</h2>
            <p className="text-base">
              Your data is stored on your device for as long as you use FocusGuardian. If you delete the app, all locally stored data is permanently removed from your device.
            </p>
            <p className="text-base">
              Subscription transaction history is maintained by Apple and is subject to Apple&apos;s data retention policies.
            </p>
            <p className="text-base">
              We do not maintain backups of your data on our servers. If you use the Logout feature within the app, your user profile is deleted from the local database.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">8. Data Security</h2>
            <p className="text-base">
              We implement industry-standard security measures to protect your data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All data is stored locally on your device, protected by iOS device-level encryption.</li>
              <li>Network communications with third-party APIs use HTTPS/TLS encryption.</li>
              <li>Subscription verification uses Apple&apos;s cryptographic transaction verification.</li>
              <li>No personal data is stored on external servers or cloud databases.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">9. Children&apos;s Privacy</h2>
            <p className="text-base">
              FocusGuardian is not directed at children under the age of 13 (or the applicable age of consent in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will take steps to remove such information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">10. Your Rights (GDPR &amp; Global Privacy)</h2>
            <p className="text-base">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><span className="font-semibold">Right of Access</span> &mdash; You can view all your data directly within the app at any time.</li>
              <li><span className="font-semibold">Right to Rectification</span> &mdash; You can edit your profile, events, and data directly in the app.</li>
              <li><span className="font-semibold">Right to Erasure</span> &mdash; You can delete your profile via Logout, or delete the app to remove all data.</li>
              <li><span className="font-semibold">Right to Data Portability</span> &mdash; Since data is stored on your device, it is inherently portable with your device.</li>
              <li><span className="font-semibold">Right to Restrict Processing</span> &mdash; You can revoke any device permission in iOS Settings.</li>
              <li><span className="font-semibold">Right to Withdraw Consent</span> &mdash; You can withdraw consent for data processing at any time by revoking permissions or deleting the app.</li>
            </ul>
            <p className="text-base">
              <span className="font-semibold">California Residents (CCPA):</span> We do not sell your personal information. You have the right to know what data we collect and to request deletion. Since all data is local, you have full control.
            </p>
            <p className="text-base">
              To exercise any of these rights, contact us at <span className="font-semibold">rakeshgeddam2025@gmail.com</span>.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">11. International Data Transfers</h2>
            <p className="text-base">
              When you use AI features, task descriptions may be transmitted to Google&apos;s Gemini API servers, which may be located outside your country. These transfers are necessary to provide the AI functionality. No personal identifiers are included in these transmissions.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">12. Changes to This Policy</h2>
            <p className="text-base">
              We may update this Privacy Policy from time to time. We will notify you of material changes by updating the &quot;Last updated&quot; date at the top of this page. Your continued use of FocusGuardian after any changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-black text-brandBlack dark:text-white">13. Contact Us</h2>
            <p className="text-base">
              If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact us at:
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

export default PrivacyPolicy;
