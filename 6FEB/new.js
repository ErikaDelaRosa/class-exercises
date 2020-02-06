function zodiac(name, day, month, year) {
  const userData = {
    userName: name,
    birthday: day,
    birthMonth: month,
    birthyear: year
  };
  const daySign = [19, 18, 20, 19, 20, 20, 22, 22, 22, 22, 21, 21];
  const zodiacName = [
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius"
  ];
  if (daySign[userData.birthMonth] < userData.birthMonth) {
    return zodiacName[userData.birthMonth];
  } else {
    return zodiacName[userData.birthMonth - 1];
  }
}
console.log(zodiac("zakaria", 29, 3, 1983));

function zodiac(name, day, month, year) {
  const daySign = [19, 18, 20, 19, 20, 20, 22, 22, 22, 22, 21, 21];
  const zodiacName = [
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius"
  ];
  const userData = {
    userName: name,
    birthday: day,
    birthMonth: month,
    birthyear: year,
    print: function() {
      if (daySign[userData.birthMonth] < userData.birthMonth) {
        return zodiacName[userData.birthMonth];
      } else {
        return zodiacName[userData.birthMonth - 1];
      }
    }
  };
  return userData.print();
}
console.log(zodiac("zakaria", 29, 3, 1983));