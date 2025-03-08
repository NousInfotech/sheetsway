export function getfirstSentence(text: string) {
  const [firstSentence, ...rest] = text.split(/\. (.+)/);
  // const match = text.match(/(.*?\.) (.+)/);
  return { firstSentence, rest };
}
