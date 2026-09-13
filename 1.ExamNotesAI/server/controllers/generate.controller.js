import Notes from "../models/notes.model.js";
import UserModel from "../models/user.model.js";
import { generateGeminiResponse } from "../services/gemini.services.js";

export const generateNotes = async (req, res) => {
  try {
    const {
      topic,
      classLevel,
      examType,
      revisionMode = false,
      includeDiagram = false,
      includeChart = false,
    } = req.body;

    if (!topic) {
      return res.status(400).json({ message: "Topic is required" });
    }

    const userId = req.userId || req.user?._id || req.user;
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.credits < 10) {
      user.isCreditAvailable = false;
      await user.save();
      return res.status(403).json({
        message: "Insufficient credits",
      });
    }

    // ✅ Make sure prompt is a STRING, not an object
    const promptString = `
Generate comprehensive exam notes in structured JSON format based on these specifications:
- Topic: ${topic}
- Class/Level: ${classLevel || "N/A"}
- Exam Type: ${examType || "General"}
- Revision Mode: ${revisionMode ? "Yes" : "No"}
- Include Diagrams: ${includeDiagram ? "Yes" : "No"}
- Include Charts: ${includeChart ? "Yes" : "No"}

Return ONLY raw valid JSON containing the notes content.
`;

    // ✅ Pass promptString into the service function
    const aiResponse = await generateGeminiResponse(promptString);

    const createdNote = await Notes.create({
      user: user._id,
      topic,
      classLevel,
      examType,
      revisionMode,
      includeDiagram,
      includeChart,
      content: aiResponse,
    });

    user.credits -= 10;
    if (user.credits <= 0) user.isCreditAvailable = false;

    if (!Array.isArray(user.notes)) {
      user.notes = [];
    }
    user.notes.push(createdNote._id);

    await user.save();

    return res.status(200).json({
      data: aiResponse,
      noteId: createdNote._id,
      creditLeft: user.credits,
    });
  } catch (error) {
    console.error("Backend Controller Error:", error);
    res.status(500).json({
      error: "AI generation failed",
      message: error.message,
    });
  }
};