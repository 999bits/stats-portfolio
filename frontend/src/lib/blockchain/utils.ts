export function shortenAddress(
    address: string,
    startLength = 8,
    endLength = 6
) {
    const start = address.slice(0, startLength);
    const end = address.slice(-endLength);
    return `${start}....${end}`;
}