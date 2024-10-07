function formatPhoneNumber(phoneNumber: string) {
  const cleaned = phoneNumber.replace(/\D/g, "");

  const formattedNumber = `+${cleaned.slice(0, 3)} ${cleaned.slice(
    3,
    5
  )} ${cleaned.slice(5, 8)} ${cleaned.slice(8, 10)} ${cleaned.slice(10, 12)}`;

  return formattedNumber;
}

export default formatPhoneNumber;
