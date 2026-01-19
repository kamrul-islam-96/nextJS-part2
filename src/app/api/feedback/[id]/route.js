import { feedback } from "../../route";

export async function GET(request, { params }) {
  const { id } = await params;

  const singleFeedback = feedback.find((item) => item.id == id);

  return Response.json({ singleFeedback });
}
