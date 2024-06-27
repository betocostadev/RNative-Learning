export default function generatePassword(passLength: number = 8) {
  const characters: string =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'

  const password = Array.from({ length: passLength }, () =>
    characters.charAt(Math.floor(Math.random() * characters.length))
  ).join('')

  return password
}
