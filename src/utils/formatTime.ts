
export function formatTime(time) {
    const iker = time.split('T')
    return iker[1].split('+')[0]
}

export function formatDate(time) {
    const date = new Date(time)
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
}
