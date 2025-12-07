"use server";

export async function createAccount(formData: FormData) {
  // Mock function to handle account creation
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const password = formData.get("password");

  console.log("Creating account for:", { firstName, lastName, email, phone });

  // Simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true, message: "Account created successfully!" };
}
