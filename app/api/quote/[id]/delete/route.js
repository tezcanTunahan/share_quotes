import { connectToDB } from "@/utils/database";
import Quote from "@/models/quote";

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();
    await Quote.findByIdAndRemove({ _id: params.id });
    return new Response(JSON.stringify("Deleted"), { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
