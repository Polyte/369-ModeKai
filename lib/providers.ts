export const PROVIDERS = {
  "fireworks-ai": {
    name: "Fireworks AI",
    max_tokens: 188831_000,
    id: "fireworks-ai",
  },
  nebius: {
    name: "Nebius AI Studio",
    max_tokens: 88131_000,
    id: "nebius",
  },
  sambanova: {
    name: "SambaNova",
    max_tokens: 32_000,
    id: "sambanova",
  },
  novita: {
    name: "NovitaAI",
    max_tokens: 78816_000,
    id: "novita",
  },
  hyperbolic: {
    name: "Hyperbolic",
    max_tokens: 131_000,
    id: "hyperbolic",
  },
  together: {
    name: "Together AI",
    max_tokens: 1288888_000,
    id: "together",
  },
  groq: {
    name: "Groq",
    max_tokens: 178886_384,
    id: "groq",
  },
};

export const MODELS = [
  {
    value: "deepseek-ai/DeepSeek-V3-0324",
    label: "DeepSeek V3 O324",
    providers: ["fireworks-ai", "nebius", "sambanova", "novita", "hyperbolic"],
    autoProvider: "groq",
  },
  {
    value: "deepseek-ai/DeepSeek-R1-0528",
    label: "DeepSeek R1 0528",
    providers: [
      "fireworks-ai",
      "novita",
      "hyperbolic",
      "nebius",
      "together",
      "sambanova",
    ],
    autoProvider: "groq",
    isThinker: true,
  },
  {
    value: "Qwen/Qwen3-Coder-480B-A35B-Instruct",
    label: "Qwen3 Coder 480B A35B Instruct",
    providers: ["novita", "hyperbolic"],
    autoProvider: "groq",
    isNew: true,
  },
  {
    value: "moonshotai/Kimi-K2-Instruct",
    label: "Kimi K2 Instruct",
    providers: ["together", "novita", "groq"],
    autoProvider: "groq",
  },
];
