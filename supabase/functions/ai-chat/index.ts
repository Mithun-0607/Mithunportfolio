import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const generateBotResponse = (userMessage: string): string => {
  const lowerMsg = userMessage.toLowerCase();

  if (lowerMsg.includes("project")) {
    return "Mithun has worked on Temple Flow and HireMe. Temple Flow streamlines temple operations, while HireMe uses AI for recruitment. Would you like to know more?";
  } else if (lowerMsg.includes("skill")) {
    return "Mithun is skilled in Python, JavaScript, React, Flask, IoT, and AI/ML. Always learning new technologies!";
  } else if (lowerMsg.includes("contact") || lowerMsg.includes("hire")) {
    return "You can reach Mithun at mithunb@elevix.design or through the contact form. He is open to exciting opportunities!";
  } else if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
    return "Hello! Great to connect with you. What would you like to know about Mithun's work?";
  } else {
    return "That is an interesting question! Feel free to reach out via the contact section for more details.";
  }
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { message } = await req.json();

    if (!message) {
      return new Response(
        JSON.stringify({ error: "Message is required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const botResponse = generateBotResponse(message);

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY");

    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    await supabase.from("chat_messages").insert([
      {
        user_message: message,
        bot_response: botResponse,
      },
    ]);

    return new Response(
      JSON.stringify({
        success: true,
        response: botResponse,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMsg }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
