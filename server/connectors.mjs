// Capability intents, never claims of completed account connections.
export const connectors=[
 ['deepseek','DeepSeek','Language model API','https://api-docs.deepseek.com/'],
 ['claude','Claude','Anthropic API / MCP client','https://docs.anthropic.com/'],
 ['gemini','Gemini','Google model API','https://ai.google.dev/'],
 ['openai','ChatGPT / OpenAI','OpenAI API / approved app integration','https://platform.openai.com/docs/'],
 ['grok','Grok','xAI model API','https://docs.x.ai/'],
 ['meta','Meta / Llama','Approved hosted model or self-hosted runtime','https://www.llama.com/'],
 ['youtube','YouTube','OAuth Data API; publish requires separate authority','https://developers.google.com/youtube/v3'],
 ['adobe','Adobe','Creative tools and supported APIs','https://developer.adobe.com/'],
 ['figma','Figma','Design API / approved MCP','https://www.figma.com/developers/api'],
 ['canva','Canva','Connect API / approved app','https://www.canva.dev/'],
 ['runway','Runway','Media API','https://docs.dev.runwayml.com/'],
 ['higgsfield','Higgsfield','Supported integration subject to account terms','https://higgsfield.ai/'],
 ['manus','Manus','Connector availability review','https://manus.im/'],
 ['vercel','Vercel','Website deployment API','https://vercel.com/docs'],
 ['replit','Replit','Supported app integration','https://docs.replit.com/'],
 ['lovable','Lovable','Supported platform integration','https://docs.lovable.dev/'],
 ['base44','Base44','Supported SDK integration','https://docs.base44.com/'],
 ['fab','Fab','Asset licensing / import review','https://www.fab.com/eula'],
 ['blender','Blender','File and worker pipeline','https://www.blender.org/'],
 ['amazon','Amazon','Direct product reference; affiliate setup separate','https://affiliate-program.amazon.com/']
].map(([id,name,capability,docs])=>({id,name,capability,docs,status:'Planned',verified:false}));
