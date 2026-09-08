const Gemini_URL = "https://generativelanguage.googleapis.com/v1beta/interactions"

const response = await fetch(`{Gemini_URL}?${process.env.GEMINI_API_KEY}` ,{
  method: "POST",

  headers: {
    "Content-Type": "application/json",
    
  },

  body: JSON.stringify({
     contents:[
        {
            parts:[
                {
                    text:prompt
                }
            ]
        }
     ]
  })
});