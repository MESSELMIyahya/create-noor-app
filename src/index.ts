#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("here's", __filename);

const templates = [
  {
    dir: "js",
    name: chalk.yellow.bold("JavaScript"),
    value: "noor-js",
  },
  {
    dir: "ts",
    name: chalk.blueBright.bold("TypeScript"),
    value: "noor-ts",
  },
  {
    dir: "tailwind-js",
    name: chalk.yellow.bold("JavaScript & Tailwind"),
    value: "noor-tailwind-js",
  },
  {
    dir: "tailwind-ts",
    name: chalk.blueBright.bold("TypeScript & Tailwind"),
    value: "noor-tailwind-ts",
  },
];

async function main() {
  // welcome message
  console.log(chalk.red("Welcome To Create NoorJs App"));

  //
  const Command_Name = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of your project?",
      default: "new-noor-app",
    },
  ]);

  const Command_Template = await inquirer.prompt([
    {
      type: "list",
      choices: [
        ...templates.map((te) => ({
          name: te.name,
          value: te.value,
        })),
      ],
      default: "noor-tailwind-ts",
      name: "template",
      message: "What is the template that you want?",
    },
  ]);


  // project path & project name
  let projectPath = "";
  let projectName = "";

  // check if the name is '.'
  if (Command_Name.name === ".") {
    projectPath = process.cwd();
    projectName = path.basename(projectPath);
  } else {
    projectName = Command_Name.name;
    projectPath = path.join(process.cwd(), projectName);
  }

  // creating the dir
  if (Command_Name.name !== ".") {
    await fs.ensureDir(projectPath);
  }

  // copy template fils

  // get the selected template dir name
  const selected_template_dir = templates.find(
    (te) => te.value == Command_Template.template
  )!.dir;
  // setting the template path
  const template_path = path.join(
    __dirname,
    "..",
    "_templates",
    selected_template_dir
  );
  // copy the template files to the project dir
  await fs.copy(template_path, projectPath);

  // change the name of the project in the package.json file
  const packageJsonPath = path.join(projectPath, "package.json");
  const packageJsonFile = await fs.readJSON(packageJsonPath);
  // change the name
  packageJsonFile.name = projectName;
  // save the file
  await fs.writeJSON(packageJsonPath, packageJsonFile);


  console.log(chalk.green("Project created successfully!"));
  console.log(chalk.cyan("To get started:"));
  if (Command_Name.name !== ".") {
    console.log(`  cd ${projectName}`);
  }
  console.log("  npm install");
  console.log("  npm start");
}

main().catch((err)=>{
    console.log(chalk.redBright("Something Went Wrong"));
})
