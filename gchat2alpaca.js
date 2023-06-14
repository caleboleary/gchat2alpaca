const fs = require("fs");
const path = require("path");

let trainingData = [];

const processDirectory = (dirPath) => {
  const filesAndDirs = fs.readdirSync(dirPath);
  filesAndDirs.forEach((fileOrDir) => {
    const fullPath = path.join(dirPath, fileOrDir);
    if (fs.lstatSync(fullPath).isDirectory() && fileOrDir.startsWith("DM")) {
      processMessages(fullPath);
    }
  });

  fs.writeFileSync("output.json", JSON.stringify(trainingData, null, 2));
};

const processMessages = (dirPath) => {
  const messagesFile = path.join(dirPath, "messages.json");
  if (fs.existsSync(messagesFile)) {
    const messagesJson = JSON.parse(fs.readFileSync(messagesFile));
    let instruction = "";
    for (let i = 0; i < messagesJson.messages.length; i++) {
      const message = messagesJson.messages[i];
      if (message.creator.email !== process.argv[3]) {
        instruction += message.text + " ";
      } else if (instruction.trim() !== "") {
        trainingData.push({
          instruction: instruction.trim(),
          output: message.text,
        });
        instruction = "";
      }
    }
  }
};

processDirectory(process.argv[2]);
