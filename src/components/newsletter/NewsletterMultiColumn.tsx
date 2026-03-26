import React from 'react';
import type { MultiColumnOffer } from '../../config/newsletterOffers';

interface NewsletterMultiColumnProps {
  offer: MultiColumnOffer;
}

export function NewsletterMultiColumn({ offer }: NewsletterMultiColumnProps) {
  const { sectionHeading, cards } = offer;
  const isSingle = cards.length === 1;

  return (
    <section id="offers">
      <div className="lg:container mx-auto px-4 py-16">
        {sectionHeading && (
          <h2 className="text-3xl md:text-4xl font-bold text-blue-primary mb-4 text-center">
            {sectionHeading}
          </h2>
        )}

        {/* Single-card layout (e.g. HVAC) */}
        {isSingle && (
          <div className="flex flex-col bg-white p-2 rounded-lg h-42 md:h-full mx-auto border-4 border-[var(--orange-dark)]">
            <div className="text-center">
              {cards[0].label && (
                <div className="text-2xl md:text-2xl font-bold text-orange-500 uppercase mb-2">
                  {cards[0].label}
                </div>
              )}
              <h3 className="text-3xl md:text-4xl font-bold text-blue-primary-dark mb-2">
                {cards[0].heading}
              </h3>
              <div className="text-lg md:text-lg font-semibold text-black uppercase mb-2">
                {cards[0].subheading}
              </div>
              {cards[0].description && (
                <p className="text-base md:text-lg text-black mb-2 leading-tight">
                  {cards[0].description}
                </p>
              )}
              {cards[0].expiry && (
                <div className="text-sm md:text-sm text-black italic">{cards[0].expiry}</div>
              )}
            </div>
          </div>
        )}

        {/* Multi-card layout (e.g. Water Heater, Tune-up, Furnace) */}
        {!isSingle && (
          <div className="flex flex-col md:flex-row bg-white p-2 rounded-lg mx-auto">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="flex-1 w-full p-3 flex justify-center"
              >
                <div className="flex flex-col bg-white p-2 rounded-lg border-4 border-[var(--orange-dark)] w-full">
                  <div className="text-center">
                    {card.label && (
                      <div className="text-xl font-bold text-orange-500 uppercase mb-2">
                        {card.label}
                      </div>
                    )}
                    <div className="text-3xl md:text-4xl font-bold text-blue-primary-dark uppercase mb-2">
                      {card.heading}
                    </div>
                    <div className="text-lg md:text-lg font-semibold text-black uppercase mb-2">
                      {card.subheading}
                    </div>
                    {card.description && (
                      <p className="text-base md:text-base text-black mb-2 leading-tight">
                        {card.description}
                      </p>
                    )}
                    {card.expiry && (
                      <div className="text-sm md:text-sm text-black italic">{card.expiry}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
