import React from 'react';

interface ConversionSectionData {
  heading: string;
  content_html: string;
}

interface PageData {
  city: string;
  conversion_sections: ConversionSectionData[];
}

interface ConversionSectionProps {
  pageData: PageData;
  contactFormEmbed: string;
}

const ConversionSectionOne: React.FC<ConversionSectionProps> = ({ pageData, contactFormEmbed }) => {
  // Get the first conversion section
  const firstSection = pageData.conversion_sections[0];
  
  if (!firstSection) {
    return null;
  }

  return (
    <section className="py-4 md:py-10 bg-transparent" id="conversion_section">
      <div className="lg:container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-baseline gap-6">
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-primary mb-4">
              {firstSection.heading}
            </h2>
            
            <div 
              className="text-gray-600 mb-6 prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: firstSection.content_html }}
            />

            <p className="text-gray-600 mb-6">
              With <span className="text-blue-primary-dark">BlueBest</span>, you're guaranteed expert installation, certified technicians, and honest pricing in {pageData.city}.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            {/* Contact form */}
            <div 
              className="transition-opacity duration-300"
              dangerouslySetInnerHTML={{ __html: contactFormEmbed }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionSectionOne;