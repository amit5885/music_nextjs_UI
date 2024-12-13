"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Our Testimonials
      </h2>
      <div>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

export default TestimonialCards;

const testimonials = [
  {
    quote: "Without music, life would be a mistake.",
    name: "Friedrich Nietzsche",
    title: "Philosophy of Music",
  },
  {
    quote:
      "Music is the divine way to tell beautiful, poetic things to the heart.",
    name: "Pablo Casals",
    title: "The Art of Music",
  },
  {
    quote: "Where words fail, music speaks.",
    name: "Hans Christian Andersen",
    title: "On Music and Expression",
  },
  {
    quote: "Music can change the world because it can change people.",
    name: "Bono",
    title: "The Power of Music",
  },
  {
    quote: "The only truth is music.",
    name: "Jack Kerouac",
    title: "On the Road and Music",
  },
];
