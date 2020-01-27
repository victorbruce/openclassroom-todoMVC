exports.getRate = (level) => {
  switch (level) {
    case 1:
      return 3;
    case 2:
      return 2;
    case 3:
      return 1.5;
    case 4:
      return 1.2;
    case 5:
      return 1;
    default:
      return 1;
  }
}

exports.getExperience = (experience) => {
  switch (experience) {
    case 10:
    case 9:
      return 0.2;
    case 8:
      return 0.8;
    case 7:
      return 0.7;
    case 6:
      return 0.6;
    case 5:
    case 4:
    case 3:
      return 0.2;
    case 1:
      return 0.1;

    default:
      return 0;
  }
}

exports.getComplexity = (complexity) => {
  switch (complexity) {
    case 4:
      return 0.3;
    case 2:
      return 0.2
    case 1: 
      return 0.1
    default:
      return 0;
  }
}

exports.getRiskLevel = (risk) => {
  switch (risk) {
    case 3:
      return 0.2;
    case 1:
      return 0.1;
    default:
      return 0;
  }
}

exports.calculateBaseWage = (days, hours, rate) => {
  const baseWage = days * hours * rate;
  return baseWage;
}

exports.baseWageWithExperience = (baseWage, experience) => {
  return baseWage * experience;
}

exports.baseWageWithComplexity = (baseWage, complexity) => {
  return baseWage * complexity;
}

exports.baseWageWithRisk = (baseWage, risk) => {
  return baseWage * risk;
}