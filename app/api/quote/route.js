import { connectToDB } from "@/utils/database";
import Quote from "@/models/quote";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const quotes = await Quote.find({}).populate("creator");
    console.log(quotes);
    return new Response(JSON.stringify(quotes), {
      status: 201,
    });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
