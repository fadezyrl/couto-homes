export const dictionary = {
  en: {
    brandName: "COUTO HOMES",
    brandAlt: "Couto Homes crest",
    topNote: "Luxury Design · Family Appeal",
    heroEyebrow: "A more personal way to begin",
    heroTitleBefore: "Plan Your",
    heroTitleEm: "Custom Home",
    heroBody:
      "Every great home begins with a conversation. Tell us a little about the home you envision, and take the first step toward making it yours.",
    heroCta: "Start Your Estimate",
    heroMeta: "A GUIDED INTRODUCTION · ABOUT 2 MINUTES",
    heroPhotoLabel: "Luxury custom home architecture",
    estimatorEyebrow: "The Couto experience begins here",
    estimatorTitle: "Let's plan what's next.",
    estimatorBody: "A few details will help our team understand your vision.",
    stepOf: "Step {current} of 06",
    percentComplete: "{percent}% complete",
    continue: "Continue →",
    submit: "Submit my details →",
    back: "← Back",
    landKicker: "01 / Your property",
    landTitle: "Do you already own land?",
    landHint:
      "Where you plan to build helps us understand how to guide your next steps.",
    sizeKicker: "02 / Your vision",
    sizeTitle: "How much space are you envisioning?",
    sizeHint:
      "Share your approximate desired living area. This is for planning context, not a construction quote.",
    sizeLabel: "Desired home size",
    sizePlaceholder: "e.g. 3,500",
    budgetKicker: "03 / Investment range",
    budgetTitle: "What budget range are you considering?",
    budgetHint:
      "This helps our team understand the scope of your plans. These are buyer-provided ranges, not Couto Homes pricing or an estimate.",
    timelineKicker: "04 / Timing",
    timelineTitle: "When would you like to begin building?",
    timelineHint:
      "Your ideal timing helps us understand how soon you're hoping to move forward.",
    locationKicker: "05 / Location",
    locationTitle: "Where are you planning to build?",
    locationHint:
      "Couto Homes serves Fort Worth and the greater DFW area. Share the city or ZIP code for your property.",
    locationLabel: "Property city or ZIP code",
    locationPlaceholder: "e.g. Aledo, TX or 76008",
    locationFine:
      "Build locations are reviewed individually. If you're still searching for land, enter the area you're considering.",
    detailsKicker: "06 / Your details",
    detailsTitle: "Who should our team connect with?",
    detailsHint:
      "Leave your details and take the next step toward a conversation with Couto Homes.",
    nameLabel: "Full name",
    namePlaceholder: "Your name",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    phoneLabel: "Phone number",
    phonePlaceholder: "(817) 555-0123",
    detailsFine:
      "By submitting, you're asking Couto Homes to contact you about your project. Your information should be handled under Couto Homes' privacy policy.",
    errLand: "Please select your land status.",
    errSizeRange: "Please enter a home size between 500 and 20,000 sq ft.",
    errSizeRequired:
      "Please enter your desired home size or select a range.",
    errBudget: "Please select a budget range.",
    errTimeline: "Please select your preferred timeline.",
    errLocation: "Please enter a city or ZIP code.",
    errName: "Please enter your name.",
    errEmail: "Please enter a valid email address.",
    errPhone: "Please enter a valid phone number.",
    successKicker: "Your next chapter starts here",
    successTitle: "Thank you, {name}.",
    successBody:
      "Your project details are ready for a conversation with the Couto Homes team. This demo does not transmit or store submissions; a live deployment would connect this step to the team's lead inbox or CRM.",
    summaryLand: "Land status",
    summarySize: "Desired size",
    summaryBudget: "Budget range",
    summaryTimeline: "Timeline",
    summaryLocation: "Property location",
    summaryContact: "Contact",
    successCta: "Explore a consultation with Couto Homes ↗",
    footer:
      "COUTO HOMES · FORT WORTH & GREATER DFW ·",
    footerLink: "COUTOHOMES.COM",
  },
} as const;

export type Locale = keyof typeof dictionary;
export type Dictionary = (typeof dictionary)[Locale];
