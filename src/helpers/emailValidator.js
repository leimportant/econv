export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Email tidak boleh kosong."
  if (!re.test(email)) return 'Ooops! alamat email salah, Perbaiki lagi.'
  return ''
}
