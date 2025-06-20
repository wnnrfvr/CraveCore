// DataDeletionRequest.jsx
import React, { useState } from 'react';

// DataDeletionRequest component handles requests for user data deletion.
// It includes a form for users to submit their request with necessary details.
function DataDeletionRequest() {
  // State variables to manage form inputs, submission status, and the email link.
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mailtoLink, setMailtoLink] = useState(''); // State to store the generated mailto link

  // handleSubmit function handles the form submission.
  // It constructs a mailto link with the user's input and prompts them to send it.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)

    // Define the recipient email address for data deletion requests
    const recipientEmail = "cravecoreapp@gmail.com";
    const subject = encodeURIComponent("Data Deletion Request from CraveCore User");
    const body = encodeURIComponent(
      `User Email: ${email}\n\n` +
      `Reason for Deletion:\n${reason}\n\n` +
      `Please process this data deletion request.`
    );

    // Construct the mailto link
    const link = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    setMailtoLink(link); // Store the generated link

    // Update submission status and message for user feedback
    setIsSubmitted(true);
    setMessage(
      "Your request is ready! Please click the button below to open your email client " +
      "and send the data deletion request to us. We will review it shortly."
    );

    // Optionally clear form fields after preparing the email link
    // setEmail('');
    // setReason('');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-xl border border-gray-200">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
          Request Data Deletion
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 mb-8">
          Please fill out the form below to request the deletion of your personal data from our site.
        </p>

        {isSubmitted && (
          <div className="mb-6 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded-md text-center text-sm">
            <p className="mb-3">{message}</p>
            {/* Button to trigger the mailto link */}
            <a
              href={mailtoLink}
              className="inline-flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out transform hover:scale-105"
              target="_blank" // Opens the mailto link in a new tab (or triggers email client)
              rel="noopener noreferrer" // Security best practice
              onClick={() => {
                // Optionally reset form after user clicks to send email
                setEmail('');
                setReason('');
                setIsSubmitted(false); // Hide the feedback message after click
                setMailtoLink('');
              }}
            >
              Open Email Client to Send Request
            </a>
          </div>
        )}

        {!isSubmitted && ( // Only show the form if it hasn't been submitted yet
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                Reason for Deletion
              </label>
              <textarea
                id="reason"
                name="reason"
                rows="4"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-150 ease-in-out"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="e.g., Privacy concerns, no longer using the service, etc."
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out transform hover:scale-105"
              >
                Prepare My Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default DataDeletionRequest;
