/**
 * @description Differentiate payment methods with background colors
 *
 * @param {string} value
 * @returns {string} Custom styles
 */
export default function customBg(value) {
  switch (value) {
    case 'cc':
      return 'bg-yellow-100 text-yellow-800'
    case 'check':
      return 'bg-pink-100 text-pink-800'
    case 'paypal':
      return 'bg-blue-100 text-blue-800'
    default:
      return 'bg-green-100 text-green-800'
  }
}
