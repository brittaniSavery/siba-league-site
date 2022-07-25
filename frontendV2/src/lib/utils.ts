export function getFormattedDate(date: string): string {
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dateObj = new Date(date);

  return `${MONTHS[dateObj.getMonth()]}
   ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
}

export function linkify(data: string, original = false): string {
  const formatted = data.replace(/\s/g, "_");
  return original ? formatted : formatted.toLowerCase();
}
