export const getFileDate = (date: Date) => {
  const filedate = new Date(date);
  const year = filedate.getFullYear();
  const month = String(filedate.getMonth() + 1).padStart(2, "0");
  const day = String(filedate.getDate()).padStart(2, "0");
  const hours = String(filedate.getHours()).padStart(2, "0");
  const minutes = String(filedate.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};
