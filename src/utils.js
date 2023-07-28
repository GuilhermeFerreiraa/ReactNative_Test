class Utilities {
  isValidCPF(document) {
    const cleanedCPF = document.replace(/\D/g, "");

    if (cleanedCPF.length !== 11 || /^(\d)\1+$/.test(cleanedCPF)) {
      return false;
    }

    const getRemainder = (sum) => (sum * 10) % 11;

    let sum = 0;
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cleanedCPF.substring(i - 1, i)) * (11 - i);
    }

    let remainder = getRemainder(sum);

    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cleanedCPF.substring(9, 10))) {
      return false;
    }

    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cleanedCPF.substring(i - 1, i)) * (12 - i);
    }

    remainder = getRemainder(sum);

    if (remainder === 10 || remainder === 11) {
      remainder = 0;
    }

    if (remainder !== parseInt(cleanedCPF.substring(10, 11))) {
      return false;
    }

    return true;
  }

  formatCPF(document) {
    const cleanedCPF = document.replace(/\D/g, "");

    const formattedCPF = cleanedCPF.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");

    return formattedCPF;
  }

  validateEmail(email) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    return emailRegex.test(email);
  }

  formatDateToDayMonthYear = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  isUnder18YearsOld = (age) => {
    const currentDate = new Date();
    const birthDate = new Date(age);
    const ageDifferenceInMilliseconds = currentDate - birthDate;
    const ageDifferenceInYears = ageDifferenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    return ageDifferenceInYears < 18;
  };
}

export default new Utilities();
