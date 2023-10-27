export function centsToReal(cents: number) {
  const dollars = (cents / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return dollars;
}
