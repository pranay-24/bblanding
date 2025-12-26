import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';

const AccessibilityStatement: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Accessibility Statement - Blue Best</title>
        <meta name="description" content="Accessibility Statement for Blue Best - Our commitment to making our services accessible to everyone." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <div className="container mx-auto px-4 py-16 max-w-4xl mt-24">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Accessibility Statement</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment to Accessibility</h2>
              <p>
                Blue Best is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to make our website as accessible as possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Measures to Support Accessibility</h2>
              <p>
                Blue Best takes the following measures to ensure accessibility of our website:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Include accessibility as part of our mission statement</li>
                <li>Integrate accessibility into our procurement practices</li>
                <li>Provide continual accessibility training for our staff</li>
                <li>Assign clear accessibility goals and responsibilities</li>
                <li>Employ formal accessibility quality assurance methods</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Conformance Status</h2>
              <p>
                We aim to conform to Web Content Accessibility Guidelines (WCAG) 2.1 level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
              </p>
              <p className="mt-4">
                The current conformance status of our website is partially conformant, meaning some parts of the content do not fully conform to the accessibility standard. We are actively working to achieve full conformance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technical Specifications</h2>
              <p>
                Accessibility of Blue Best website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>WAI-ARIA</li>
              </ul>
              <p>
                These technologies are relied upon for conformance with the accessibility standards used.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Accessibility Features</h2>
              <p>
                Our website includes the following accessibility features:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Alternative text for images</li>
                <li>Properly structured headings</li>
                <li>Consistent navigation throughout the site</li>
                <li>Color contrast that meets WCAG standards</li>
                <li>Keyboard navigation support</li>
                <li>Clear and simple language</li>
                <li>Responsive design for various devices and screen sizes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Known Limitations</h2>
              <p>
                Despite our best efforts to ensure accessibility of Blue Best website, there may be some limitations. Below is a description of known limitations:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Some older PDF documents may not be fully accessible</li>
                <li>Third-party content or tools may have varying levels of accessibility</li>
                <li>Some interactive features may require additional optimization for screen readers</li>
              </ul>
              <p className="mt-4">
                We are actively working to address these issues and improve accessibility across all areas of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Browser Compatibility</h2>
              <p>
                Our website is designed to be compatible with the following browsers:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Chrome (latest version)</li>
                <li>Firefox (latest version)</li>
                <li>Safari (latest version)</li>
                <li>Edge (latest version)</li>
              </ul>
              <p>
                For the best accessibility experience, we recommend using the latest version of your preferred browser.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Feedback and Contact</h2>
              <p>
                We welcome your feedback on the accessibility of Blue Best website. Please let us know if you encounter accessibility barriers:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Phone: (385) 200-2604</li>
                <li>Email: accessibility@bluebest.com</li>
                <li>Address: Blue Best, Utah</li>
              </ul>
              <p className="mt-4">
                We try to respond to accessibility feedback within 5 business days.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Alternative Formats</h2>
              <p>
                If you need information from our website in an alternative format, please contact us and we will make every effort to provide the information in a format that meets your needs.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Content</h2>
              <p>
                Our website may include content from third-party sources. While we choose third-party providers carefully, we cannot guarantee the accessibility of third-party content. If you experience issues with third-party content, please contact us and we will work to find an accessible alternative.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Continuous Improvement</h2>
              <p>
                We are committed to continuous improvement of our website's accessibility. We regularly review our site and make updates to improve accessibility. This statement will be updated periodically to reflect our progress and any changes in our accessibility measures.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessibilityStatement;