"use server";

import { revalidatePath } from "next/cache";

export async function sendMessage(formData: FormData) {
  const name = formData.get("name");
  const message = formData.get("message");

  if (
    typeof name !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !message.trim()
  ) {
    throw new Error("Name and message are required.");
  }

  await new Promise((resolve) => setTimeout(resolve, 800));

  console.log("Contact form submitted:", {
    name: name.trim(),
    message: message.trim(),
  });

  revalidatePath("/contact");
}
