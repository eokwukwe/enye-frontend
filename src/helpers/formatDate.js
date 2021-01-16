/**
 * @description Format the date and time to Nigerian locale
 * E.g: Sun, 18 Feb 2018 3:14:07 am
 * @param {string} dateValue Datetime value
 * @returns {string} The formatted datetime
 */
export default function formatDate(dateValue) {
  const parsedDate = new Date(dateValue)

  const dateOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }

  const date = parsedDate.toLocaleDateString('en-NG', dateOptions)
  const time = parsedDate.toLocaleTimeString('en-NG', { hour12: true })

  return `${date} ${time}`
}
