import { connectToDB } from "@/utils/database";
import Quote from "@/models/quote";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const quotes = await Quote.find({
      creator: params.id,
    }).populate("creator");
    return new Response(JSON.stringify(quotes), {
      status: 201,
    });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
