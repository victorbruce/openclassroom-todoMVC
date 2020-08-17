const functions = require("firebase-functions");

const express = require("express");
const app = express();

// helper methods

const {
  getRate,
  getExperience,
  getComplexity,
  getRiskLevel,
  calculateBaseWage,
  baseWageWithExperience,
  baseWageWithComplexity,
  baseWageWithRisk
} = require("./utils/helper");

app.get("/test", (req, res) => {
  res.send("testing");
});

app.post("/base-wage", (req, res) => {
  const { body } = req;
  const days = 30;
  const hours = 12;

  let newWage = {
    level: body.level,
    riskLevel: body.riskLevel,
    complexity: body.complexity,
    experience: body.experience
  };

  // Get the right percentages
  let rate = getRate(newWage.level);
  const experience = getExperience(newWage.experience);
  const complexity = getComplexity(newWage.complexity);
  const riskLevel = getRiskLevel(newWage.riskLevel);

  // Calculate each salary based on defined parameters
  const baseWage = calculateBaseWage(days, hours, rate);
  const expSalary = baseWageWithExperience(baseWage, experience);
  const complexitySalary = baseWageWithComplexity(baseWage, complexity);
  const riskLevelSalary = baseWageWithRisk(baseWage, riskLevel);

  // Total salary
  const totalSalary = baseWage + expSalary + complexitySalary + riskLevelSalary;
  return res.json({ totalSalary });
});

exports.api = functions.https.onRequest(app);
