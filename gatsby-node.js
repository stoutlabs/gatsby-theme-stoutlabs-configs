// creates the directories needed in this theme, if not there
const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");

exports.onPreBootstrap = ({ store, reporter }, options) => {
  const { program } = store.getState();
  const dirs = [
    path.join(program.directory, `src/styles`),
    path.join(program.directory, "src/images"),
    path.join(program.directory, "src/pages"),
  ];
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`);
      mkdirp.sync(dir);
    }
  });
};
