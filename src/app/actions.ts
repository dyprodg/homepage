"use server";

export async function sendMail(name: string, email: string, message: string) {
  try {
    const response = await fetch(
      "https://8wj43ld6ne.execute-api.eu-central-1.amazonaws.com/dev/mail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      },
    );

    if (response.ok) {
      return { message: "Email send successfully" };
    } else {
      return { message: "sending failed" };
    }
  } catch (error) {
    return { message: "error" };
  }
}
