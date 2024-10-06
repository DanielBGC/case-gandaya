export function numberToCurrencyFormat(value: number): string {
  return Number(value).toFixed(2).replace('.', ',');
}
