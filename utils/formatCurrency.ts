export function formattedCurrency(amount: number | string){
    const fixed = Math.round(Number(amount))
    return fixed.toLocaleString('id-ID')
}