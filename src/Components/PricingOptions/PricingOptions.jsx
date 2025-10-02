import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DasgiPricing from '../DasgiPricing/DasgiPricing';

const PricingOptions = ({pricingPromise}) => {
    const pricingData = use(pricingPromise)
    
    return (
        <div>
            <h2 className='text-5xl'>Get our MemberShip</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* {
                    pricingData.map(pricing => <PricingCard pricing={pricing}
                    key={pricing.id}></PricingCard>)
                } */}
                {
                    pricingData.map(pricing => <DasgiPricing 
                    key={pricing.id}    
                    pricing={pricing}
                     ></DasgiPricing>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;