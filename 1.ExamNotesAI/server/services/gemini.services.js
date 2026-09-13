// gemini.services.js
const Gemini_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent";

export const generateGeminiResponse = async (prompt) => {
  try {
    // Force prompt to string if an object was accidentally passed
    const promptText = typeof prompt === "string" ? prompt : JSON.stringify(prompt);

    const response = await fetch(
      `${Gemini_URL}?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: promptText,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const err = await response.text();
      console.log("Gemini Fetch Error Raw:", err);
      throw new Error(err);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      throw new Error("No text returned from Gemini");
    }

    const cleanText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanText);
  } catch (error) {
    console.log("Gemini Fetch Error:", error.message);
    throw new Error("Gemini API fetch failed");
  }
};