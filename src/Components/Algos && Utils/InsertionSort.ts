export const insertionSort = async (
  arr: number[],
  wait: (ms: number) => Promise<null>,
  setState: React.Dispatch<React.SetStateAction<number[]>>,
  setIsRunnin: React.Dispatch<React.SetStateAction<boolean>>
): Promise<void> => {
  setIsRunnin(true)
  let i = 1
  while (i < arr.length) {
    while (arr[i] < arr[i - 1]) {
      const temp = arr[i]
      arr[i] = arr[i - 1]
      arr[i - 1] = temp
      i--
      await wait(80)
      setState([...arr])
    }
    i++
  }
  setIsRunnin(false)
}
