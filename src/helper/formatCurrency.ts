export const formatter = (number: number) => new Intl.NumberFormat('id-ID', {
    style: "currency",
    currency: "IDR"
}).format(number)