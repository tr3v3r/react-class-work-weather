export function getInitialDataFromStorage(nextItem) {
   let data = localStorage.getItem('appData')  
   return data ? JSON.parse(data) : {}
}