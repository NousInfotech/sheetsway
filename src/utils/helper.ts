import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function getfirstSentence(text: string) {
  const [firstSentence, ...rest] = text.split(/\. (.+)/);
  // const match = text.match(/(.*?\.) (.+)/);
  return { firstSentence, rest };
}


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
