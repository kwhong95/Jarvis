export const formatXAxis = (data: number) =>
  `${new Date(data * 1000).getHours()}시`;
