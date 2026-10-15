import React from "react";

function PrivacyPolicy() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1>Privacy Policy</h1>

        <p><strong>Last Updated:</strong> October 15, 2026</p>

        <h2>1. Introduction</h2>
        <p>
          Social Media AI Agent is an AI-powered application designed to
          assist with social media messaging and automated responses.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          Depending on how you use the application, we may process information
          such as Instagram account information, Instagram user IDs, messages
          sent to the connected Instagram account, and information required
          to provide automated AI responses.
        </p>

        <h2>3. How We Use Information</h2>
        <p>
          Information is used to receive and respond to messages, provide
          AI-powered assistance, maintain conversation context, improve the
          functionality of the application, and operate the service.
        </p>

        <h2>4. Instagram Data</h2>
        <p>
          The application uses Meta's Instagram APIs to receive and respond
          to messages from authorized Instagram accounts. Instagram data is
          processed only for the functionality provided by this application.
        </p>

        <h2>5. Data Sharing</h2>
        <p>
          We do not sell personal information. Information may be processed
          by third-party service providers required to operate the application,
          including AI and hosting services.
        </p>

        <h2>6. Data Security</h2>
        <p>
          Reasonable technical measures are used to protect information
          processed by the application. However, no internet-based service
          can guarantee absolute security.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          Information is retained only for as long as reasonably necessary
          to provide and maintain the application's functionality.
        </p>

        <h2>8. Data Deletion</h2>
        <p>
          Users may request deletion of information associated with their use
          of the application by contacting us using the contact information
          provided below.
        </p>

        <h2>9. Contact</h2>
        <p>
          For privacy-related questions or data deletion requests, contact:
        </p>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:rishipriyesh5603@gmail.com">
            rishipriyesh5603@gmail.com
          </a>
        </p>

        <h2>10. Changes to This Privacy Policy</h2>
        <p>
          This Privacy Policy may be updated periodically. Any changes will
          be reflected on this page with an updated revision date.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "60px 20px",
    background: "#0f172a",
    color: "#e2e8f0",
  },
  content: {
    maxWidth: "900px",
    margin: "0 auto",
    lineHeight: "1.7",
  },
};

export default PrivacyPolicy;