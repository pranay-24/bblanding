import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Blue Best</title>
        <meta name="description" content="Privacy Policy for Blue Best - Learn how we handle your personal information and protect your privacy." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <div className="container mx-auto px-4 py-16 max-w-4xl mt-24">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome to Blue Best</h2>
              <p>
                At Blue Best, your privacy matters to us. This policy explains our approach to handling personal data when you visit our website at https://www.bluebest.com/ and use our services. By using our website, you consent to the data practices described below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We May Collect</h2>
              <p>
                Depending on how you interact with our services, we may collect some or all of the following types of information:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Contact details (such as name, email, or phone number) - only if you provide them</li>
                <li>Service location information - when relevant to service delivery</li>
                <li>Service preferences - if you choose to share them</li>
                <li>Communication records - when you contact us</li>
              </ul>
              <p className="italic">
                Note: We only collect information that is necessary for the specific services you request. Not all data types listed above are collected for every user or interaction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Automatic Data That May Be Collected</h2>
              <p>
                When you visit our website, certain technical information may be automatically collected, which could include:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address and browser type</li>
                <li>Pages visited and duration of visits</li>
                <li>Referring website information</li>
                <li>General geographic location</li>
              </ul>
              <p className="italic">
                The extent of automatic data collection depends on your browser settings, privacy preferences, and how you interact with our site. Some or none of this data may be collected during your visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Usage</h2>
              <p>
                Our website may use cookies - small text files that can be stored on your device. These cookies, if accepted, may help with:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Remembering your preferences</li>
                <li>Understanding site usage patterns</li>
                <li>Improving your browsing experience</li>
              </ul>
              <p>
                You have full control over cookie settings through your browser. You may choose to accept all, some, or no cookies. Please note that refusing cookies might affect certain website features.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
              <p>
                We may work with select third-party providers for purposes such as:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Payment processing (only when you make a purchase)</li>
                <li>Website analytics (if analytics tools are active)</li>
                <li>Communication services (when you contact us)</li>
                <li>Service delivery support (as needed)</li>
              </ul>
              <p>
                These partners would only access information necessary for their specific function and are bound by confidentiality agreements. The use of third-party services varies based on your interactions with our site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection Measures</h2>
              <p>
                For any information we do collect, we employ appropriate security measures which may include encryption, secure servers, and access controls. While we strive to protect any data in our possession, please understand that no internet transmission is completely secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">External Links</h2>
              <p>
                Our website might contain links to other sites. We're not responsible for the privacy practices of external websites. We recommend reviewing their privacy policies before sharing any personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Information</h2>
              <p>
                Blue Best services are designed for adult users. We do not intentionally collect information from individuals under 13 years old. If we become aware of any such data collection, we will take steps to remove it. Parents or guardians with concerns should contact us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Privacy Rights</h2>
              <p>
                For any information we have collected about you, you may have the right to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Request access to your personal information</li>
                <li>Ask for corrections to any data</li>
                <li>Opt out of communications</li>
                <li>Request deletion of your information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Policy Updates</h2>
              <p>
                This privacy policy may be updated periodically to reflect changes in our practices or legal requirements. Updates will be posted on this page with a revised date. We encourage periodic reviews of this policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;