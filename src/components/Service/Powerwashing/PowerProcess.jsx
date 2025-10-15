import React, { useState } from "react";

const PowerWashingProcess = () => {
  const [activeStep, setActiveStep] = useState(1); // Initially, the first step is active

  // Array of process steps
  const steps = [
    { id: 1, label: "Surface Assessment", description: "We inspect your property to identify surface types, problem areas, and determine the optimal pressure settings." },
    { id: 2, label: "Equipment Setup", description: "Setting up the right equipment to ensure effective cleaning." },
    { id: 3, label: "High-Pressure Cleaning", description: "Using the best equipment to clean the surfaces thoroughly." },
    { id: 4, label: "Final Inspection", description: "Inspecting the cleaned areas to ensure they meet our high standards." }
  ];

  const handleStepClick = (stepId) => {
    setActiveStep(stepId); // Set the clicked step as active
  };

  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-[#0094D9]">Our Power Washing Process</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">A systematic approach to delivering spotless results</p>
        </div>

        {/* Process Steps Buttons */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap  justify-center gap-4 mb-12">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                className={`justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all flex items-center gap-2 h-9 px-4 py-2 ${activeStep >= step.id
                    ? "bg-[#0094D9] text-primary-foreground  hover:bg-primary/90"
                    : "bg-gray-100 text-muted-foreground border border-gray-200 hover:bg-accent"
                  }`}
              >
                <span className="font-bold">{step.id}</span>
                <span className="hidden sm:inline">{step.label}</span>
              </button>
            ))}
          </div>

          {/* Step Card */}
          <div className="bg-card text-card-foreground border-gray-200 flex flex-col gap-6 rounded-xl border shadow-sm p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-check h-12 w-12 text-primary">
                    <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <path d="m9 14 2 2 4-4"></path>
                  </svg>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="text-sm font-semibold text-primary mb-2">Step {activeStep} of 4</div>
                <h3 className="text-3xl font-bold mb-4">{steps[activeStep - 1].label}</h3>
                <p className="text-lg text-muted-foreground text-pretty">{steps[activeStep - 1].description}</p>
              </div>
            </div>
            <div className="mt-8 flex gap-2">
              {/* Progress Bar */}
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`h-2 flex-1 rounded-full transition-all duration-300 ${activeStep >= step.id ? "bg-[#0094D9]" : "bg-muted"}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerWashingProcess;
