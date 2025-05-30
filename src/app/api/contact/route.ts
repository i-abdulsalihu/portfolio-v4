import { assertValue } from "@/lib/utils";
import { contactFormSchema } from "@/lib/validators";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import { ZodError } from "zod";

export async function POST(req: NextRequest) {
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

    const result = await transporter.sendMail({
      from: mailtrap,
      to: gmailUser,
      subject: "You've received a new message",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;max-width:600px;margin:0 auto;line-height:1.6;color:#333;background-color:#fff;">
      <div style="background-color:#f8f9fa;padding:20px 16px;border-bottom:2px solid #007bff;">
        <h1 style="margin:0;font-size:24px;font-weight:bold;color:#007bff;">Someone just reached out</h1>
        <p style="margin:1px 0 0 0;font-size:14px;color:#666;">
          Received on ${new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
      <div style="padding:16px;">
        <table style="width:100%;border-collapse:collapse;margin-bottom:30px;">
          <tbody>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #eee;width:90px;vertical-align:top;">
                <strong style="font-size:14px;color:#555;">Name:</strong>
              </td>
              <td style="padding:12px 0 12px 5px;border-bottom:1px solid #eee;font-size:14px;color:#333;">${name}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #eee;width:90px;vertical-align:top;">
                <strong style="font-size:14px;color:#555;">Company:</strong>
              </td>
              <td style="padding:12px 0 12px 5px;border-bottom:1px solid #eee;font-size:14px;color:#333;">${company || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #eee;width:90px;vertical-align:top;">
                <strong style="font-size:14px;color:#555;">Email:</strong>
              </td>
              <td style="padding:12px 0 12px 5px;border-bottom:1px solid #eee;font-size:14px;color:#007bff;">${email}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <h3 style="margin:0 0 15px 0;font-size:14px;color:#555;border-bottom:2px solid #007bff;padding-bottom:8px;">Message:</h3>
          <div style="background-color:#f8f9fa;padding:16px;border-radius:4px;border:1px solid #e9ecef;font-size:14px;line-height:1.7;color:#333;">
            ${message.replace(/\n/g, "<br><br>")}
          </div>
        </div>
      </div>
      <div style="background-color:#f8f9fa;padding:20px;border-top:1px solid #eee;text-align:center;">
        <p style="margin:0;font-size:12px;color:#999;">
          This message was sent via your website contact form.<br />
          Please do not reply directly to this email.
        </p>
      </div>
    </div>
      `,
    });

    const { rejected } = result;

    if (rejected && rejected.length) {
      throw new Error(
        `Email not fully delivered. Rejected: ${rejected.join(", ") || "None"}.`,
      );
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: unknown) {
    let message = "An unexpected error occurred";
    let status = 500;

    if (err instanceof SyntaxError) {
      message = "Invalid JSON payload";
      status = 400;
    } else if (err instanceof ZodError) {
      message = "Validation failed";
      status = 422;
    } else if (err instanceof Error) {
      message = err.message;
    }

    return new Response(
      JSON.stringify({
        success: false,
        message,
        details: err instanceof Error ? err.stack : null,
      }),
      { status },
    );
  }
}
