import {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplates.js";
import { mailTrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipients = { email };
  try {
    await mailTrapClient.send({
      from: sender,
      to: [recipients],
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });
  } catch (error) {
    console.error(error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (user) => {
  const recipients = { email: user.email };
  try {
    await mailTrapClient.send({
      from: sender,
      to: [recipients],
      subject: "Verify your email",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Email Verification",
    });
  } catch (error) {
    console.error(error);
    throw new Error(`Error verification of email: ${error}`);
  }
};
