export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { text, mode } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const prompt = `
You are an AI clarity assistant.

Analyze the following text and return valid JSON only in this format:
{
  "summary": "...",
  "keyPoints": ["...", "...", "..."],
  "actions": ["...", "...", "..."],
  "tone": "...",
  "risks": ["...", "...", "..."],
  "quickShare": "..."
}

Rules:
- Use very simple English
- Be concise
- Do not use jargon
- Identify deadlines, payment issues, penalties, warnings, or missing details where relevant

Mode: ${mode || "student"}

Text:
${text}
`;

    const response = await fetch("YOUR_LLM_API_ENDPOINT_HERE", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.LLM_API_KEY}`
      },
      body: JSON.stringify({
        model: "YOUR_MODEL_NAME",
        messages: [
          { role: "system", content: "You are a helpful clarity assistant." },
          { role: "user", content: prompt }
        ],
        temperature: 0.2
      })
    });

    const data = await response.json();

    const content =
      data.choices?.[0]?.message?.content || data.output_text || "";

    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch {
      return res.status(500).json({
        error: "Model did not return valid JSON",
        raw: content
      });
    }

    return res.status(200).json(parsed);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
