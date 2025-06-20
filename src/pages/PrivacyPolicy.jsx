import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className='px-4 sm:px-6 py-8 sm:py-12 max-w-6xl mx-auto font-sans'>
      <header className='mb-8 sm:mb-10 border-b border-gray-200 pb-6'>
        <h1 className="font-bold text-3xl sm:text-4xl text-red-700 mb-2">CraveCore Privacy Policy</h1>
        <p className='text-gray-600 text-sm sm:text-base'>Last Updated: June 20, 2025</p>
      </header>

      <div className='space-y-8 sm:space-y-12'>
        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">Introduction</h2>
          <div className='space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base'>
            <p>CraveCore is a dynamic social gaming and connection application designed to enhance user engagement and provide engaging entertainment. Our app enables users to register and log in exclusively with their Google accounts, play various games, upload and customize profile pictures, interact through a social feed by posting and reading content, and participate in diverse challenges.</p>
            <p>This Privacy Policy explains how CraveCore ("we," "us," or "our") collects, uses, shares, and protects your personal information when you access or use our mobile application. By using CraveCore, you consent to the practices described in this policy. If you do not agree with any part of our Privacy Policy, please do not use CraveCore.</p>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">Scope and Applicability</h2>
          <div className='space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base'>
            <p>This policy applies to all users of CraveCore. It governs our data collection, processing, and storage practices related to all features of the app, including:</p>
            <ul className='list-disc pl-6 space-y-1'>
              <li>User Registration and Authentication exclusively via Google Accounts.</li>
              <li>Profile Management, including uploading and changing profile pictures.</li>
              <li>Gaming Activities and participation.</li>
              <li>Social Feed functionality, allowing users to post and read content.</li>
              <li>Participation in in-app Challenges.</li>
              <li>In-app Purchases and Subscriptions.</li>
              <li>Advertising displayed via Unity Ads.</li>
            </ul>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">Core Features and Their Data Implications</h2>
          <div className='space-y-4'>
            <div className='bg-gray-50 p-4 sm:p-5 rounded-lg'>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">User Registration & Profile Management (Google Account Only)</h3>
              <p className='text-gray-700 text-sm sm:text-base'>When you register and log in to CraveCore, you do so exclusively using your Google account. We collect your Google User ID, email address, and profile picture from Google for authentication purposes and to establish your CraveCore profile. This information helps us secure your account and personalize your app experience. You can also upload or change your profile picture within the app.</p>
            </div>

            <div className='bg-gray-50 p-4 sm:p-5 rounded-lg'>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Social Feed (Posting and Reading)</h3>
              <p className='text-gray-700 text-sm sm:text-base'>Our app features an interactive social feed where users can post updates, thoughts, and images, and read content posted by other users. We collect the content you post (e.g., text, images) to facilitate community interaction. This data may also be used for content moderation and improving the feed experience.</p>
            </div>

            <div className='bg-gray-50 p-4 sm:p-5 rounded-lg'>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Gaming Activities</h3>
              <p className='text-gray-700 text-sm sm:text-base'>CraveCore offers various in-app games for your entertainment. We collect data related to your gameplay, such as scores, progress, and game preferences, to enhance your gaming experience, track achievements, and improve game offerings.</p>
            </div>

            <div className='bg-gray-50 p-4 sm:p-5 rounded-lg'>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Challenges</h3>
              <p className='text-gray-700 text-sm sm:text-base'>You can participate in various in-app challenges designed to engage and entertain. We collect data related to your challenge participation, completion, and performance to track activity, manage rewards, and personalize future challenges.</p>
            </div>
            
            <div className='bg-gray-50 p-4 sm:p-5 rounded-lg'>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">In-App Purchases & Subscriptions</h3>
              <p className='text-gray-700 text-sm sm:text-base'>CraveCore offers in-app purchases and subscriptions for premium content or features. All transactions are processed securely via Google Play. We do not directly collect or store your financial payment information. We receive confirmation of your purchases from Google Play to activate your purchased content or subscription.</p>
            </div>

            <div className='bg-gray-50 p-4 sm:p-5 rounded-lg'>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Unity Ads</h3>
              <p className='text-gray-700 text-sm sm:text-base'>Our app integrates Unity Ads to display advertisements. Unity Ads may collect certain data from your device, such as advertising identifiers, IP addresses, and device information, to deliver relevant ads and measure their performance. This data collection and usage are in line with acceptable Google Play Console conditions. For more information on Unity Ads' data practices, please refer to Unity's Privacy Policy.</p>
            </div>

            {/* Existing sections that are still relevant to a general app */}
            <div className='bg-gray-50 p-4 sm:p-5 rounded-lg'>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Notifications & Reminders</h3>
              <p className='text-gray-700 text-sm sm:text-base'>We send timely alerts and reminders to encourage continued engagement. The delivery of these notifications relies on data such as device information and app usage patterns.</p>
            </div>

            <div className='bg-gray-50 p-4 sm:p-5 rounded-lg'>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Customizable Relationship Goals and Conversation Starters (if applicable, otherwise remove)</h3>
              <p className='text-gray-700 text-sm sm:text-base'>You can set and track relationship goals and access conversation starters and deep questions to improve communication. Data from these features helps us refine our offerings and enhance your experience.</p>
            </div>
            {/* End of existing sections */}
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">Information We Collect</h2>
          <div className='space-y-4'>
            <div className='bg-red-50 p-4 sm:p-5 rounded-lg'>
              <h3 className="font-semibold text-lg text-red-700 mb-2">A. Personal Information</h3>
              <p className='text-gray-700 text-sm sm:text-base mb-3'>When you use CraveCore, we may collect the following personal information:</p>
              <ul className='list-disc pl-6 space-y-1 text-gray-700 text-sm sm:text-base'>
                <li><span className="font-medium">Authentication Data:</span> Google User ID, email address, and profile picture (obtained from your Google account upon login).</li>
                <li><span className="font-medium">Profile Information:</span> Display name, and any other details you voluntarily add to your CraveCore profile.</li>
                <li><span className="font-medium">User-Generated Content:</span> Any text, images, or other media you post on the feed, upload as a profile picture, or submit as part of challenges or game interactions.</li>
              </ul>
            </div>

            <div className='bg-red-50 p-4 sm:p-5 rounded-lg'>
              <h3 className="font-semibold text-lg text-red-700 mb-2">B. Non-Personal Information</h3>
              <p className='text-gray-700 text-sm sm:text-base mb-3'>We also collect non-personally identifiable information, including:</p>
              <ul className='list-disc pl-6 space-y-1 text-gray-700 text-sm sm:text-base'>
                <li><span className="font-medium">Usage Data:</span> Information about how you interact with CraveCore, such as features accessed, games played, time spent in the app, and navigation paths.</li>
                <li><span className="font-medium">Device Information:</span> IP address, device type, operating system, unique device identifiers (e.g., advertising ID), and mobile network information.</li>
                <li><span className="font-medium">Transaction Data:</span> Details of your in-app purchases and subscriptions (e.g., item purchased, purchase date), provided by Google Play, without revealing your financial details.</li>
                <li><span className="font-medium">Advertising Data:</span> Data collected by Unity Ads for ad delivery and measurement, such as ad impressions, clicks, and conversion events.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">How We Use Your Information</h2>
          <div className='space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base'>
            <p>We process your information to:</p>
            <ul className='list-disc pl-6 space-y-1'>
              <li><span className="font-medium">Provide and Improve Our Services:</span> To deliver, maintain, and enhance CraveCore's functionalities, including seamless user authentication via Google, gaming experiences, social feed interactions, and challenge participation.</li>
              <li><span className="font-medium">User Authentication and Account Management:</span> To verify your identity through Google, secure your account, and enable profile customization, including profile picture changes.</li>
              <li><span className="font-medium">Personalization:</span> To customize your in-app experience, offering relevant content, games, and challenges based on your interests and activities.</li>
              <li><span className="font-medium">Analytics and Research:</span> To analyze app usage and engagement trends, understand user behavior, diagnose technical issues, and continuously improve the app's performance, features, and overall user experience.</li>
              <li><span className="font-medium">Monetization:</span> To process in-app purchases and subscriptions, and to display relevant advertisements via Unity Ads, in accordance with applicable platform policies.</li>
              <li><span className="font-medium">Communication:</span> To send essential app-related notifications, updates, and support messages.</li>
              <li><span className="font-medium">Security and Compliance:</span> To detect and prevent fraudulent activities, protect the security of our app and users, and comply with legal obligations and platform requirements (e.g., Google Play Console conditions).</li>
            </ul>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">Disclosure of Your Information</h2>
          <div className='space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base'>
            <p>We are committed to keeping your data within the app ecosystem. **CraveCore does not sell your personal data to third parties.** Your data is collected and used solely within the app to provide and improve its services.</p>
            <p>We may share your information only in the following limited circumstances with essential service providers who adhere to strict confidentiality and data protection standards, and only for the purposes outlined in this policy:</p>
            <ul className='list-disc pl-6 space-y-1'>
              <li><span className="font-medium">Google (for Authentication & Purchases):</span> We share necessary information with Google to facilitate your login via Google Accounts and to process in-app purchases and subscriptions through Google Play.</li>
              <li><span className="font-medium">Unity Ads (for Advertising):</span> We integrate Unity Ads to provide in-app advertisements. Certain non-personal and device-related data (such as advertising identifiers, IP addresses, device information) may be shared with Unity Ads to enable ad delivery and measurement, fully within the acceptable Google Play Console conditions. Please review Unity's Privacy Policy for their data practices.</li>
              <li><span className="font-medium">Legal Obligations:</span> We may disclose your information if required by law, regulation, or legal process, or if necessary to protect the rights, property, or safety of CraveCore, our users, or the public.</li>
              <li><span className="font-medium">Business Transfers:</span> In the event of a merger, acquisition, or sale of all or a portion of our assets, your data may be transferred as part of the transaction. We will notify you if your personal information becomes subject to a different privacy policy.</li>
            </ul>
            <p className='mt-3'>**Important Note:** Any content (e.g., feed posts, comments, profile pictures) that you choose to make public within the CraveCore app's social features can be viewed by other users of the app.</p>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">Data Retention</h2>
          <div className='space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base'>
            <ul className='list-disc pl-6 space-y-1'>
              <li><span className="font-medium">Retention Policy:</span> We retain your personal data only for as long as it is necessary to fulfill the purposes for which it was collected, to provide our services, or as required by law. When data is no longer needed, it is securely deleted or anonymized.</li>
              <li><span className="font-medium">Deletion Requests:</span> You may request the deletion of your personal data by contacting us through the provided "Data Deletion Request" feature within the app. We will verify your identity and respond promptly, subject to any legal obligations we may have.</li>
            </ul>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">Security Measures</h2>
          <div className='space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base'>
            <p>Protecting your data is a top priority. We implement reasonable technical and organizational measures to safeguard the information we collect against unauthorized access, disclosure, alteration, and destruction. These measures include encryption, secure servers, and advanced access controls. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">Your Rights and Choices</h2>
          <div className='space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base'>
            <p>You have the following rights regarding your personal data:</p>
            <ul className='list-disc pl-6 space-y-1'>
              <li><span className="font-medium">Access and Correction:</span> You can access, review, and update your profile information (including profile picture) directly through your app settings. For other data, you may contact us directly.</li>
              <li><span className="font-medium">Data Deletion:</span> You have the right to request the deletion of your personal data. Please use the "Data Deletion Request" feature in the app or contact us directly.</li>
              <li><span className="font-medium">Advertising Preferences:</span> You may be able to reset your device's advertising identifier or opt out of interest-based ads through your device settings.</li>
            </ul>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">International Data Transfers</h2>
          <div className='space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base'>
            <p>CraveCore may transfer and process your personal data on servers located in various countries where our service providers operate. By using our app, you consent to the transfer of information to countries outside of your country of residence, which may have different data protection laws than those in your country. We take appropriate steps to ensure that such transfers comply with applicable data protection laws and that your information remains secure, regardless of where it is processed.</p>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">Children's Privacy</h2>
          <div className='space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base'>
            <p>CraveCore is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13 without verifiable parental consent, we will take steps to remove that information from our servers.</p>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">Policy Changes and Updates</h2>
          <div className='space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base'>
            <ul className='list-disc pl-6 space-y-1'>
              <li><span className="font-medium">Modifications:</span> We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Last Updated" date will be revised accordingly.</li>
              <li><span className="font-medium">User Notification:</span> For significant changes that may affect how your data is used, we will provide notifications through email or in-app alerts.</li>
              <li><span className="font-medium">Continued Use:</span> Your continued use of CraveCore following any modifications constitutes your acceptance of the updated Privacy Policy.</li>
            </ul>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">Contact Information</h2>
          <div className='space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base'>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
            <div className='bg-white p-4 rounded border border-gray-200 mt-3'>
              <p className='font-medium'>Email: <span className='text-red-600'>cravecoreapp@gmail.com</span></p>
              <p className='mt-1'>Postal Address: Abuja, Nigeria</p>
              <p className='mt-3 text-sm text-gray-600'>This contact is monitored for privacy-related inquiries.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
