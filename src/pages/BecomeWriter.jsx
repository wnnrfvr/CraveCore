// BecomeWriter.jsx
import React, { useState } from 'react';

// BecomeWriter component provides information and a form for users interested in becoming writers for the site.
function BecomeWriter() {
  // State variables to manage form inputs, submission status, and the email link.
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [portfolioLink, setPortfolioLink] = useState('');
  const [writingSample, setWritingSample] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const [mailtoLink, setMailtoLink] = useState(''); // State to store the generated mailto link

  // handleSubmit function handles the form submission.
  // It constructs a mailto link with the user's input and prompts them to send it.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)

    // Define the recipient email address for writer applications
    const recipientEmail = "cravecoreapp@gmail.com";
    const subject = encodeURIComponent("Writer Application for CraveCore");
    const body = encodeURIComponent(
      `Applicant Name: ${name}\n` +
      `Applicant Email: ${email}\n` +
      `Portfolio/LinkedIn Link (Optional): ${portfolioLink || 'N/A'}\n\n` +
      `Writing Experience/Sample:\n${writingSample}\n\n` +
      `Please review this writer application.`
    );

    // Construct the mailto link
    const link = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    setMailtoLink(link); // Store the generated link

    // Update submission status and message for user feedback
    setIsSubmitted(true);
    setMessage(
      "Your application is ready! Please click the button below to open your email client " +
      "and send your writer application to us. We will review it soon!"
    );

    // Optionally clear form fields after preparing the email link
    // setName('');
    // setEmail('');
    // setPortfolioLink('');
    // setWritingSample('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-2xl border border-gray-200">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-6">
          Become a Writer & Earn Money
        </h2>
        <p className="mt-2 text-center text-lg text-gray-700 mb-8">
          Do you have a passion for writing? Join our team and share your expertise while earning money!
        </p>

        <div className="mb-8 text-center text-gray-600">
          <p className="mb-2 text-md">
            We are looking for talented writers to create engaging content for our platform.
            If you love to research, write, and communicate effectively, this opportunity is for you!
          </p>
          <p className="font-semibold text-md">Benefits include:</p>
          <ul className="list-disc list-inside text-left mx-auto max-w-sm mt-2 text-sm text-gray-600">
            <li>Competitive per-article rates</li>
            <li>Flexible working hours</li>
            <li>Exposure to a wide audience</li>
            <li>Supportive editorial team</li>
          </ul>
        </div>

        {isSubmitted && (
          <div className="mb-6 p-4 bg-purple-100 border border-purple-400 text-purple-700 rounded-md text-center text-sm">
            <p className="mb-3">{message}</p>
            {/* Button to trigger the mailto link */}
            <a
              href={mailtoLink}
              className="inline-flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-200 ease-in-out transform hover:scale-105"
              target="_blank" // Opens the mailto link in a new tab (or triggers email client)
              rel="noopener noreferrer" // Security best practice
              onClick={() => {
                // Optionally reset form after user clicks to send email
                setName('');
                setEmail('');
                setPortfolioLink('');
                setWritingSample('');
                setIsSubmitted(false); // Hide the feedback message after click
                setMailtoLink('');
              }}
            >
              Open Email Client to Send Application
            </a>
          </div>
        )}

        {!isSubmitted && ( // Only show the form if it hasn't been submitted yet
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="portfolioLink" className="block text-sm font-medium text-gray-700">
                Link to Your Portfolio/LinkedIn (Optional)
              </label>
              <input
                id="portfolioLink"
                name="portfolioLink"
                type="url"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out"
                value={portfolioLink}
                onChange={(e) => setPortfolioLink(e.target.value)}
                placeholder="https://yourportfolio.com"
              />
            </div>

            <div>
              <label htmlFor="writingSample" className="block text-sm font-medium text-gray-700">
                Tell us about your writing experience and why you want to write for us. (Or provide a writing sample link)
              </label>
              <textarea
                id="writingSample"
                name="writingSample"
                rows="5"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm transition duration-150 ease-in-out"
                value={writingSample}
                onChange={(e) => setWritingSample(e.target.value)}
                placeholder="Describe your experience or paste a link to your best writing sample here."
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-200 ease-in-out transform hover:scale-105"
              >
                Prepare Application
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default BecomeWriter;
