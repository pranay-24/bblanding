import React from 'react';
import type { MultiColumnOffer } from '../../config/newsletterOffers';

interface NewsletterMultiColumnProps {
  offer: MultiColumnOffer;
}

export function NewsletterMultiColumn({ offer }: NewsletterMultiColumnProps) {
  const { sectionHeading, description, cards, tableRows, noteHeading, footnotes } = offer;
  const isSingle = cards.length === 1;

  return (
    <section id="offers">
      <div className="lg:container mx-auto px-4 py-16">
        {noteHeading && (
          <h3 className="text-center text-3xl md:text-4xl font-bold text-blue-primary mb-2">
            {noteHeading}
          </h3>
        )}

        {sectionHeading && (
          <h2 className="text-2xl md:text-3xl font-bold text-blue-primary mb-4 text-center">
            {sectionHeading}
          </h2>
        )}

        {description && (
          <div className="max-w-4xl mx-auto mb-8">
            {description.split('\n\n').map((para, i) => (
              <p key={i} className="text-base md:text-lg text-gray-700 text-center leading-relaxed mb-2">
                {para}
              </p>
            ))}
          </div>
        )}

        {/* Earnings table layout */}
        {tableRows && tableRows.length > 0 && (
          <div className="max-w-2xl mx-auto rounded-xl overflow-hidden border border-blue-100 shadow-sm">
            {/* Table header */}
            <div className="grid grid-cols-2 bg-blue-primary px-6 py-4">
              <span className="text-white font-semibold text-base md:text-lg">When Your Neighbor Installs</span>
              <span className="text-white font-semibold text-base md:text-lg text-right">You Earn</span>
            </div>
            {/* Table rows */}
            {tableRows.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-2 items-center px-6 py-5 ${idx % 2 === 0 ? 'bg-blue-50' : 'bg-white'}`}
              >
                <span className="text-blue-primary-dark font-semibold text-sm md:text-base pr-4">{row.install}</span>
                <span className={`text-right text-xl md:text-2xl font-bold ${row.earnHighlight ? 'text-orange-500' : 'text-blue-primary-dark'}`}>
                  {row.earn}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Single-card layout (e.g. HVAC) */}
        {!tableRows && isSingle && (
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
                <p className="text-base md:text-lg text-black mb-2 leading-tight whitespace-pre-line">
                  {cards[0].description}
                </p>
              )}
              {cards[0].expiry && (
                <div className="text-lg md:text-xl font-bold text-orange-500 mt-3 pt-3 border-t border-orange-200">
                  {cards[0].expiry}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Multi-card layout (e.g. Water Heater, Tune-up, Furnace) */}
        {!tableRows && !isSingle && (
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
                    <div className="text-xl md:text-2xl font-bold text-blue-primary-dark uppercase mb-2">
                      {card.heading}
                    </div>
                    <div className="text-lg md:text-lg font-semibold text-black mb-2">
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

        {footnotes && footnotes.length > 0 && (
          <div className="mt-10 max-w-3xl mx-auto space-y-1">
            {footnotes.map((f, idx) => (
              <p key={idx} className="text-xs text-gray-500 text-center">* {f}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
