export const getFileSize = (size: number) => {
  const fileSize = size / 1024;

  return fileSize.toFixed(0);
};
