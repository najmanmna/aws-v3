"use client";

import { useActionState } from "react";
import { motion } from "framer-motion";
import { sendContactMessage, type ContactFormState } from "@/app/contact/actions";

const ease = [0.16, 1, 0.3, 1] as const;
const reachingOutOptions = ["Agency", "Founder or business", "Designer", "Other"];

const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
};

const inputClasses =
  "w-full rounded-none border-b border-foreground/20 bg-transparent py-4 text-lg text-foreground placeholder:text-foreground/30 transition-colors focus:border-foreground focus:outline-none sm:text-xl";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    initialContactFormState,
  );

  if (state.status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="flex max-w-xl flex-col gap-4 py-8"
      >
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.1] tracking-tight text-foreground">
          Message received.
        </h2>
        <p className="text-lg leading-relaxed text-foreground/60">
          {state.message} We will be in touch shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-12 lg:pr-8">
      
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
            Name
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClasses} placeholder="Jane Doe" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} placeholder="jane@example.com" />
        </div>
      </div>

      <fieldset className="flex flex-col gap-6">
        <legend className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
          Reaching out as (optional)
        </legend>
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {reachingOutOptions.map((option) => (
            <label
              key={option}
              className="group flex cursor-pointer items-center gap-3 text-base text-foreground/60 transition-colors has-[:checked]:text-foreground sm:text-lg"
            >
              <input type="radio" name="reachingOutAs" value={option} className="peer sr-only" />
              {/* Custom Radio Button */}
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-foreground/30 transition-all peer-checked:border-accent">
                <span className="h-2 w-2 scale-0 rounded-full bg-accent transition-transform peer-checked:scale-100" />
              </span>
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="What are you looking to build?"
          className={`${inputClasses} resize-none`}
        />
      </div>

      {state.status === "error" && (
        <p role="alert" className="text-sm font-medium text-accent">
          {state.message}
        </p>
      )}

      <div className="mt-4 flex items-center">
        <button
          type="submit"
          disabled={pending}
          className="group flex items-center gap-3 text-xl font-medium tracking-tight text-foreground transition-colors hover:text-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-8 focus-visible:ring-offset-background disabled:opacity-50 sm:text-2xl"
        >
          {pending ? "Sending..." : "Send message"}
          <span className="text-accent transition-transform duration-300 ease-out group-hover:translate-x-1.5">
            &rarr;
          </span>
        </button>
      </div>
    </form>
  );
}