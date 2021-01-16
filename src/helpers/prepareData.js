/**
 * @description Rearrange the returned response for the
 * table component
 *
 * @param {object} data HTTP response data
 * @returns {object} Data to be displayed
 */
export default function prepareData(data) {
  const { records, status, size } = data

  const profiles = records.profiles.map(profile => {
    const { FirstName, LastName, Gender, ...rest } = profile

    return {
      Name: `${FirstName} ${LastName}`,
      Gender: Gender === 'Prefer to skip' ? 'Unknown' : Gender,
      ...rest
    }
  })

  return { profiles, status, size }
}
