export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "How much does it cost?",
    answer: "Nothing!",
  },
  {
    question: "About Hack Club",
    answer:
      "Hack Club is a US-based 501(c)(3) nonprofit (EIN: 81-2908499) that helps high school students learn to code and build projects. We're the largest teen-led coding community (made for teens, by teens), with over 60,000 students building projects with their friends in Hack Club each year.",
  },
  {
    question: "Am I eligible? How do I qualify?",
    answer:
      "To attend Horizons Polaris, you must be age 13–18 (inclusive) at the time of the event and qualify by spending 35 hours total working on software/hardware projects to ship to the Horizons Platform, which will guarantee your spot.",
  },
  {
    question: "Travel",
    answer:
      "We will be coordinating pickups/dropoffs from Toronto Pearson International Airport (YYZ). All local transport will be paid for. Travel stipends are available for purchase in the Horizons shop, at a rate of $8.5 for every approved hour working on your projects. You may spend travel stipends on flights, visas, or passports to attend Polaris.",
  },
  {
    question: "Event Details",
    answer:
      "Horizons Polaris is from Friday, August 7th to Sunday, August 9th, 2026, in Toronto, Canada. More details regarding venue, travel, and schedule will be announced as the event gets closer.",
  },
  {
    question: "For parents",
    answer:
      "We understand that many parents are hesitant about sending their children away to a new place for a weekend. Your child's safety and well-being are our utmost priority, and we will have adult staff present at the events. In the coming weeks, we will send out a parents guide, and you can also book a parent call with the organizers if you have any questions. For any additional questions please reach out to polaris@horizons.hackclub.com",
  },
  {
    question: "Any other questions?",
    answer:
      "Please reach out to polaris@horizons.hackclub.com or send a message in #horizons-polaris in the Hack Club Slack!",
  },
];
