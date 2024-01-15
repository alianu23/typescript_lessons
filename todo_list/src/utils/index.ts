interface IStatus {
  [key: string]: string;
}
export const status: IStatus = {
  high: "error",
  medium: "warning",
  low: "success",
};
