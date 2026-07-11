"use server";

import { Resend } from "resend";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const reachingOutAs = String(formData.get("reachingOutAs") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please fill in your name, email, and a short message before sending.",
    };
  }

  if (!emailPattern.test(email)) {
    return {
      status: "error",
      message: "That email address doesn’t look right. Please double-check it.",
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: "Ahamed Web Studio <hello@ahamedwebstudio.com>",
      to: "hello@ahamedwebstudio.com",
      replyTo: email,
      subject: `New project enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        reachingOutAs ? `Reaching out as: ${reachingOutAs}` : null,
        "",
        message,
      ]
        .filter((line): line is string => line !== null)
        .join("\n"),
    });

    if (error) {
      console.error("Resend failed to send contact message", error);
      return {
        status: "error",
        message:
          "That didn’t go through. Please try again, or email us directly at hello@ahamedwebstudio.com.",
      };
    }

    return {
      status: "success",
      message:
        "Thanks for reaching out. Najman reads every message personally and will reply directly.",
    };
  } catch (error) {
    console.error("Failed to send contact message", error);
    return {
      status: "error",
      message:
        "That didn’t go through. Please try again, or email us directly at hello@ahamedwebstudio.com.",
    };
  }
}
