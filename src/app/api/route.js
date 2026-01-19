export const feedback = [
    {
        id: 1,
        message: "This is feedback item 1",
        rating: 10,
    },
    {
        id: 2,
        message: "This is feedback item 2",
        rating: 9,
    },
]

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "API is working fine!",
  });
}
