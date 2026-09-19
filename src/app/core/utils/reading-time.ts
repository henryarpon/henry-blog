export function readingTimeMinutes(markdown = ''): number {
  // Rough words per minute
  const WPM = 200;
  const text = markdown.replace(/[#`>\-\*\[\]\(\)\r\n]+/g, ' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WPM));
}
