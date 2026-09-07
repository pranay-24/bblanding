import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import type { PlanFormValue } from '../config/membershipPlans';
import { DEFAULT_PLAN_FORM_VALUE } from '../config/membershipPlans';
import MembershipNav from '../components/membership/MembershipNav';
import MembershipHero from '../components/membership/MembershipHero';
import MembershipForm from '../components/membership/MembershipForm';
import MembershipTrustBar from '../components/membership/MembershipTrustBar';
import MembershipWhy from '../components/membership/MembershipWhy';
import MembershipPlanCards from '../components/membership/MembershipPlanCards';
import MembershipValueMath from '../components/membership/MembershipValueMath';
import MembershipWarranty from '../components/membership/MembershipWarranty';
import MembershipCompare from '../components/membership/MembershipCompare';
import MembershipVisit from '../components/membership/MembershipVisit';
import MembershipTeamTrust from '../components/membership/MembershipTeamTrust';
import MembershipReviews from '../components/membership/MembershipReviews';
import MembershipSteps from '../components/membership/MembershipSteps';
import MembershipFinalCTA from '../components/membership/MembershipFinalCTA';
import MembershipFooter from '../components/membership/MembershipFooter';
import MembershipStickyCTA from '../components/membership/MembershipStickyCTA';

const MembershipPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanFormValue>(DEFAULT_PLAN_FORM_VALUE);

  return (
    <>
      <Helmet>
        <title>Blue Best Membership Plans | Two Visits a Year, No Bad Surprises</title>
        <meta
          name="description"
          content="Blue Best membership plans from $17 a month. Two HVAC tune-ups a year, priority repair scheduling, an annual plumbing inspection, and a labor warranty that holds as long as you stay on the plan. Serving the entire Wasatch Front."
        />
      </Helmet>

      {/* No overflow-x-hidden here: it would make this div a scroll container and break the sticky nav. */}
      <div className="bg-white max-[759px]:pb-[66px]">
        <MembershipNav />
        <MembershipHero
          form={<MembershipForm selectedPlan={selectedPlan} onSelectPlan={setSelectedPlan} />}
        />
        <MembershipTrustBar />
        <MembershipWhy />
        <MembershipPlanCards onChoosePlan={setSelectedPlan} />
        <MembershipValueMath />
        <MembershipWarranty />
        <MembershipCompare />
        <MembershipVisit />
        <MembershipTeamTrust />
        <MembershipReviews />
        <MembershipSteps />
        <MembershipFinalCTA />
        <MembershipFooter />
        <MembershipStickyCTA />
      </div>
    </>
  );
};

export default MembershipPage;
