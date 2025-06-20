import React from 'react'

const ChildProtection = () => {
  return (
    <div className='px-4 sm:px-6 py-8 sm:py-12 max-w-6xl mx-auto'>
      <header className='mb-8 sm:mb-10 border-b border-gray-200 pb-6'>
        <h1 className="font-bold text-3xl sm:text-4xl text-red-700 mb-2">CraveCore Child Safety and Protection Standards</h1>
        <p className='text-gray-600 text-sm sm:text-base'>Effective Date: April 5, 2025</p>
      </header>

      <div className='space-y-8 sm:space-y-10'>
        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">Our Commitment to Child Safety</h2>
          <div className='space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base'>
            <p>CraveCore is a platform designed exclusively for adults (18 years and older) seeking to build connections and relationships. Protecting children is a fundamental priority for us. These Standards outline our unwavering commitment and the measures we implement to prevent minors from accessing our platform and to protect children from harm, including exploitation and abuse online.</p>
            <div className='bg-red-50 p-4 rounded-lg border-l-4 border-red-700'>
              <p className='font-medium text-red-800'>We maintain a zero-tolerance policy towards any activity on our platform that exploits, endangers, or involves minors.</p>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">Strict Age Requirement: Adults Only (18+)</h2>
          <div className='space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base'>
            <p>CraveCore is strictly prohibited for use by individuals under the age of 18 (or the age of legal majority in their jurisdiction, if higher).</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li><span className="font-medium">No Minors Allowed:</span> We explicitly forbid anyone under 18 from creating an account or using our services.</li>
              <li><span className="font-medium">Age Affirmation:</span> All users must affirm they are 18 or older during the registration process. We employ age-gating mechanisms as a first line of defense.</li>
              <li><span className="font-medium">Representation:</span> Creating an account signifies a binding representation by the user that they meet the minimum age requirement. Misrepresentation of age is a violation of our Terms of Service.</li>
            </ul>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">Preventing Access by Minors</h2>
          <div className='space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base'>
            <p>While no system is infallible, we take proactive steps to prevent underage individuals from joining CraveCore:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li><span className="font-medium">Age Gate:</span> We implement an age gate during registration requiring users to confirm they are 18 or older.</li>
              <li><span className="font-medium">Monitoring & Detection:</span> We utilize a combination of automated tools and human review (where applicable, particularly in response to reports) to identify potential signs of underage users based on profile information, user-generated content, and user reports.</li>
              <li><span className="font-medium">Verification (Potential):</span> In cases where age is questioned or reported, we reserve the right to request age verification information before allowing continued access, where legally permissible.</li>
            </ul>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">Immediate Action Upon Discovery of Underage Users</h2>
          <div className='space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base'>
            <p>If we identify or receive credible reports suggesting a user is under the age of 18:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li><span className="font-medium">Swift Investigation:</span> We will promptly investigate the report or suspicion.</li>
              <li><span className="font-medium">Immediate Account Termination:</span> Upon confirmation or reasonable suspicion that a user is underage, their account will be immediately and permanently terminated.</li>
              <li><span className="font-medium">Data Deletion:</span> We will take prompt steps to delete all personal data associated with the terminated underage account from our active systems, in accordance with our data retention policies and applicable laws.</li>
              <li><span className="font-medium">Reporting Obligations:</span> If we encounter evidence of child endangerment, exploitation, or illegal activity involving minors, we reserve the right and may be obligated to report such findings to relevant law enforcement authorities and/or organizations like the National Center for Missing and Exploited Children (NCMEC) or relevant Nigerian/international child protection agencies.</li>
            </ul>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">Prohibiting Harmful Content & Conduct</h2>
          <div className='space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base'>
            <p>We strictly prohibit content and conduct that harms or endangers children:</p>
            <div className='bg-red-50 p-4 rounded-lg'>
              <ul className='list-disc pl-6 space-y-2'>
                <li><span className="font-medium">Zero Tolerance for CSAM:</span> We have a zero-tolerance policy for Child Sexual Abuse Material (CSAM). Any such content identified will be removed immediately, the associated account terminated, and reported to law enforcement and relevant child protection bodies.</li>
                <li><span className="font-medium">Prohibition of Grooming & Solicitation:</span> Any attempts to groom, solicit, or engage in inappropriate communication with individuals believed to be minors are strictly forbidden and will result in immediate account termination and potential reporting to authorities.</li>
                <li><span className="font-medium">Content Moderation:</span> We employ content moderation practices (which may include automated filters and human review) to detect and remove content that violates our policies, including content indicative of underage use or child endangerment.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">User Reporting Mechanisms</h2>
          <div className='space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base'>
            <p>We empower our community to help maintain a safe environment appropriate only for adults:</p>
            <ul className='list-disc pl-6 space-y-2'>
              <li><span className="font-medium">In-App Reporting:</span> We provide clear and accessible tools within the App for users to report profiles, content, or behavior they suspect involves an underage user, child exploitation, grooming, or other policy violations.</li>
              <li><span className="font-medium">Direct Reporting:</span> Users can also report concerns directly to our safety team via the designated contact email.</li>
              <li><span className="font-medium">Prioritization:</span> Reports related to child safety and potential underage users are treated with the highest priority.</li>
            </ul>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">Cooperation with Law Enforcement</h2>
          <div className='space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base'>
            <p>CraveCore is committed to cooperating fully with law enforcement agencies in investigations related to child exploitation, abuse, or other illegal activities involving minors allegedly occurring on our platform, subject to applicable laws and legal processes.</p>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">Designated Point of Contact for Child Safety</h2>
          <div className='space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base'>
            <p>For any questions, concerns, or reports specifically related to these Child Safety and Protection Standards, potential underage users, or child safety issues on CraveCore, please contact our designated point of contact:</p>
            <div className='bg-white p-4 rounded border border-gray-200 mt-3'>
              <p className='font-medium'>Email: <span className='text-red-600'>cravecoreapp@gmail.com</span></p>
              <p className='mt-3 text-sm text-gray-600'>This contact is monitored for safety-related inquiries, especially those concerning minors.</p>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">Continuous Review and Improvement</h2>
          <div className='space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base'>
            <p>The online safety landscape is constantly evolving. We are committed to regularly reviewing and updating these Standards, our technologies, and our procedures to enhance child protection measures and adapt to emerging threats.</p>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className="font-bold text-xl sm:text-2xl text-red-800">Shared Responsibility</h2>
          <div className='space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base'>
            <div className='bg-red-50 p-4 rounded-lg'>
              <p>While CraveCore implements robust measures, platform safety is a shared responsibility. We encourage users to utilize reporting tools responsibly and practice safe online behavior.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ChildProtection