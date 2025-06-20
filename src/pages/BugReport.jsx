// BugReport.jsx
import React, { useState } from 'react';

// BugReport component provides a form for users to report bugs or issues with the site.
function BugReport() {
  // State variables to manage form inputs, submission status, and the email link.
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bugDescription, setBugDescription] = useState('');
  const [stepsToReproduce, setStepsToReproduce] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const [mailtoLink, setMailtoLink] = useState(''); // State to store the generated mailto link

  // handleSubmit function handles the form submission.
  // It constructs a mailto link with the user's input and prompts them to send it.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)

    // Define the recipient email address for bug reports
    const recipientEmail = "cravecoreapp@gmail.com";
    const subject = encodeURIComponent("Bug Report from CraveCore User");
    const body = encodeURIComponent(
      `Reporter Name (Optional): ${name || 'N/A'}\n` +
      `Reporter Email (Optional): ${email || 'N/A'}\n\n` +
      `Bug Description:\n${bugDescription}\n\n` +
      `Steps to Reproduce (Optional):\n${stepsToReproduce || 'N/A'}\n\n` +
      `Please investigate this bug report.`
    );

    // Construct the mailto link
    const link = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    setMailtoLink(link); // Store the generated link

    // Update submission status and message for user feedback
    setIsSubmitted(true);
    setMessage(
      "Your bug report is ready! Please click the button below to open your email client " +
      "and send the report to us. We appreciate your help!"
    );

    // Optionally clear form fields after preparing the email link
    // setName('');
    // setEmail('');
    // setBugDescription('');
    // setStepsToReproduce('');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-xl border border-gray-200">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
          Report a Bug
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 mb-8">
          Found a glitch? Please help us improve by reporting any bugs or issues you encounter.
        </p>

        {isSubmitted && (
          <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-md text-center text-sm">
            <p className="mb-3">{message}</p>
            {/* Button to trigger the mailto link */}
            <a
              href={mailtoLink}
              className="inline-flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-200 ease-in-out transform hover:scale-105"
              target="_blank" // Opens the mailto link in a new tab (or triggers email client)
              rel="noopener noreferrer" // Security best practice
              onClick={() => {
                // Optionally reset form after user clicks to send email
                setName('');
                setEmail('');
                setBugDescription('');
                setStepsToReproduce('');
                setIsSubmitted(false); // Hide the feedback message after click
                setMailtoLink('');
              }}
            >
              Open Email Client to Send Report
            </a>
          </div>
        )}

        {!isSubmitted && ( // Only show the form if it hasn't been submitted yet
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name (Optional)
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email (Optional)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="bugDescription" className="block text-sm font-medium text-gray-700">
                Bug Description
              </label>
              <textarea
                id="bugDescription"
                name="bugDescription"
                rows="4"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                value={bugDescription}
                onChange={(e) => setBugDescription(e.target.value)}
                placeholder="Please describe the bug in detail (e.g., what happened, what you expected to happen)."
              ></textarea>
            </div>

            <div>
              <label htmlFor="stepsToReproduce" className="block text-sm font-medium text-gray-700">
                Steps to Reproduce (Optional)
              </label>
              <textarea
                id="stepsToReproduce"
                name="stepsToReproduce"
                rows="3"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                value={stepsToReproduce}
                onChange={(e) => setStepsToReproduce(e.target.value)}
                placeholder="1. Go to... 2. Click on... 3. See error..."
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-200 ease-in-out transform hover:scale-105"
              >
                Prepare Bug Report
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default BugReport;
