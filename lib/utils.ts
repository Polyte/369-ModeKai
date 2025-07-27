import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const COLORS = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "pink",
  "gray",
];

export const getPTag = (repoId: string) => {
  return `<p style="border-radius: 8px; text-align: center; font-size: 12px; color: #fff; margin-top: 16px;position: fixed; left: 8px; bottom: 8px; z-index: 10; background: rgba(0, 0, 0, 0.8); padding: 4px 8px;">Made with 369-ModeKAI<a href="https://enzostvs-369modekai.hf.space" style="color: #fff;text-decoration: underline;" target="_blank" >369ModekAi</a> - 🧬 <a href="https://enzostvs-369modekai.hf.space?remix=${repoId}" style="color: #fff;text-decoration: underline;" target="_blank" >Remix</a></p>`;
};
