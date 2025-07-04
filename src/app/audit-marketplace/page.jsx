import React from 'react'
import HeroSection from '../_components/marketplace/HeroSection'
import FinancialAuditUI from '../_components/marketplace/FinancialAuditUI'
import SecuritySection from '../_components/marketplace/Security'
import AuditComponent from '../_components/marketplace/AuditComponent'
import RetailSection from '../_components/marketplace/RetailSection'
export default function page() {
  return (
    <div className=' overflow-x-hidden'>
    <HeroSection/>
    <FinancialAuditUI/>
      {/* AuditComponent below everything */}
      <div className="relative z-10">
        <AuditComponent />
      </div>
      <RetailSection/>
    </div>
  )
}
