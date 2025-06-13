import { json, redirect } from "@remix-run/node";
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  // If someone tries to navigate to /quote-request directly,
  // redirect them to the home page
  const url = new URL(request.url);
  if (url.pathname === "/quote-request") {
    return redirect("/");
  }
  return null;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  // Extract form data
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const eventType = formData.get("eventType");
  const eventDate = formData.get("eventDate");
  const budget = formData.get("budget");
  const description = formData.get("description");

  // Basic validation
  if (!name || !email || !eventType || !eventDate || !budget || !description) {
    return json(
      { success: false, error: "Please fill in all required fields" },
      { status: 400 }
    );
  }

  // Here you would typically:
  // 1. Send an email notification
  // 2. Store the quote request in a database
  // 3. Handle any errors that occur

  return json({
    success: true,
    message: "Thank you for your quote request. We'll be in touch soon!",
    data: {
      name,
      email,
      phone,
      eventType,
      eventDate,
      budget,
      description,
    },
  });
};
