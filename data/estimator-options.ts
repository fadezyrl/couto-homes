export type ChoiceOption = {
  value: string;
  label: string;
  detail?: string;
};

export const landOptions: ChoiceOption[] = [
  {
    value: "Yes, I own land",
    label: "Yes",
    detail: "I already own my homesite",
  },
  {
    value: "No, I need land",
    label: "Not yet",
    detail: "I'm still looking for land",
  },
  {
    value: "Looking for land",
    label: "Exploring",
    detail: "I'm considering my options",
  },
];

export const sizeOptions: ChoiceOption[] = [
  {
    value: "2,000–3,000 sq ft",
    label: "2,000–3,000",
    detail: "Square feet",
  },
  {
    value: "3,000–4,000 sq ft",
    label: "3,000–4,000",
    detail: "Square feet",
  },
  {
    value: "4,000+ sq ft",
    label: "4,000+",
    detail: "Square feet",
  },
];

export const budgetOptions: ChoiceOption[] = [
  { value: "Under $750,000", label: "Under $750,000" },
  { value: "$750,000–$1,000,000", label: "$750,000 – $1,000,000" },
  { value: "$1,000,000–$1,500,000", label: "$1,000,000 – $1,500,000" },
  { value: "$1,500,000+", label: "$1,500,000+" },
  {
    value: "Still exploring",
    label: "Still exploring",
    detail: "I'd like guidance on budget",
  },
];

export const timelineOptions: ChoiceOption[] = [
  { value: "As soon as possible", label: "As soon as possible" },
  { value: "Within 3–6 months", label: "Within 3–6 months" },
  { value: "Within 6–12 months", label: "Within 6–12 months" },
  { value: "12+ months", label: "12+ months" },
  { value: "Just exploring", label: "Just exploring" },
];

export const TOTAL_STEPS = 6;
