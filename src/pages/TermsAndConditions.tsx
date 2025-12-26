import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';

const TermsAndConditions: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - Blue Best</title>
        <meta name="description" content="Terms and Conditions for Blue Best services - Understanding your rights and responsibilities when using our services." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <div className="container mx-auto px-4 py-16 max-w-4xl mt-24">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-gray-600 mb-6">Effective Date: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
              <p>
                By accessing or using Blue Best services and website at https://www.bluebest.com/, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Description</h2>
              <p>
                Blue Best provides professional home services including but not limited to HVAC, plumbing, water heater, and furnace services. Our services are subject to availability and may vary by location. We reserve the right to refuse service to anyone for any reason at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use of Website</h2>
              <p>
                You may use our website for lawful purposes only. You agree not to use the website:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>In any way that violates any applicable federal, state, local, or international law</li>
                <li>To transmit any advertising or promotional material without our prior written consent</li>
                <li>To impersonate or attempt to impersonate the company or another user</li>
                <li>In any way that infringes upon the rights of others or restricts their use of the website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Terms</h2>
              <p>
                When you request our services:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>You agree to provide accurate and complete information</li>
                <li>You authorize our technicians to perform the requested services</li>
                <li>You understand that service pricing may vary based on specific requirements</li>
                <li>You agree to pay for services rendered according to the agreed terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pricing and Payment</h2>
              <p>
                All prices are subject to change without notice. We reserve the right to modify or discontinue any service without notice. Payment is due upon completion of services unless other arrangements have been made. We accept various forms of payment, and all transactions are processed securely.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cancellation Policy</h2>
              <p>
                Service appointments may be cancelled or rescheduled with reasonable notice. Cancellations made less than 24 hours before the scheduled appointment may be subject to a cancellation fee. Emergency services have different cancellation terms which will be communicated at the time of booking.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Warranties and Disclaimers</h2>
              <p>
                We strive to provide high-quality services. Specific warranty terms vary by service type and will be communicated at the time of service. Our services are provided "as is" and we make no warranties, expressed or implied, regarding the suitability of our services for any particular purpose beyond those explicitly stated.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Blue Best shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services or website. Our total liability shall not exceed the amount paid for the specific service in question.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, images, and software, is the property of Blue Best or its content suppliers and is protected by United States and international copyright laws. You may not reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Blue Best, its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms and Conditions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
              <p>
                These Terms and Conditions are governed by and construed in accordance with the laws of the State of Utah, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts of Utah.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to update or change these Terms and Conditions at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after any modifications indicates your acceptance of the updated terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Severability</h2>
              <p>
                If any provision of these Terms and Conditions is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms and Conditions shall otherwise remain in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Entire Agreement</h2>
              <p>
                These Terms and Conditions constitute the entire agreement between you and Blue Best regarding the use of our website and services, superseding any prior agreements between you and Blue Best relating to the same subject matter.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;