import WhatWeDoSection from "@/components/what-we-do-section";

// Main page component
export default function Page() {
return (
  <div>
    {/* Header section */}
    <header>
      <h1>Welcome to Our Company</h1>
    </header>

    {/* What We Do Section */}
    <WhatWeDoSection />

    {/* Footer section */}
    <footer>
      <p>Contact us for more information</p>
    </footer>
  </div>
);
}
