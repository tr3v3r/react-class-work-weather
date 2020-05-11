export function updateStorageData(nextItem) {
    localStorage.setItem('appData', JSON.stringify(nextItem))
}