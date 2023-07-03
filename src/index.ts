/* eslint-disable no-console */
import { debounce } from 'perfect-debounce'
import timeSpan from 'time-span'

const end = timeSpan()

let count = 0

async function testsync(i: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('async start...', count, i)
      resolve(true)
    }, 500)
  })
}

const debounced = debounce((i: number) => {
  count++
  testsync(i)
}, 25, { diff: true })

for (const i of [1, 2, 3, 1, 2, 3, 4, 1, 4, 5, 6, 1, 3])
  debounced(i)
