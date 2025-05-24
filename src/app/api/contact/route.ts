import { assertValue } from "@/lib/utils";
import { contactFormSchema } from "@/lib/validators";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

const gmailHost = assertValue(
  process.env.GMAIL_HOST,
  "Missing env: GMAIL_HOST",
);
const gmailUser = assertValue(
  process.env.GMAIL_USER,
  "Missing env: GMAIL_USER",
);
const gmailPass = assertValue(
  process.env.GMAIL_PASS,
  "Missing env: GMAIL_PASS",
);
const mailtrap = assertValue(
  process.env.DEMO_MAILTRAP,
  "Missing env: GMAIL_PASS",
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      company,
      request: message,
      email,
    } = contactFormSchema.parse(body);

    const transporter = nodemailer.createTransport({
      host: gmailHost,
      port: 587,
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    await transporter.sendMail({
      from: mailtrap,
      to: gmailUser,
      subject: "New Contact Request",
      html: `
      <div style="font-family: sans-serif; line-height: 1.5; font-size: 14px;">
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "-"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="border-left: 3px solid #ccc; margin: 0; padding-left: 1em;">
          ${message.replace(/\n/g, "<br>")}
        </blockquote>
      </div>
    `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: err,
        message: "Failed to send email",
      }),
      {
        status: 500,
      },
    );
  }
}
