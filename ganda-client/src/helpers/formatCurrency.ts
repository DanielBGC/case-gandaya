export function numberToCurrencyFormat(value: number): string {
  return value.toFixed(2).replace('.', ',');
}
