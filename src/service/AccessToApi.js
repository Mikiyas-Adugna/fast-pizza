const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);

  if (!res.ok) throw Error("Failed getting menu");

  const { data } = await res.json();

  return data;
}

export function getFormattedDateTime(totalMinutesToAdd = 0) {
  const date = new Date();

  const hoursToAdd = Math.floor(totalMinutesToAdd / 60);
  const minutesToAdd = totalMinutesToAdd % 60;

  date.setHours(date.getHours() + hoursToAdd);
  date.setMinutes(date.getMinutes() + minutesToAdd);

  const options = {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const formattedDate = formatter.format(date);

  return formattedDate;
}

export function getMinutes(minute) {
  if (minute >= 60) {
    return [Math.floor(minute / 60), "Hour"];
  }
  return [minute, "Minutes"];
}
