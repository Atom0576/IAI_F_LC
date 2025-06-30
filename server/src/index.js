import { AdminContext } from "@empirica/core/admin";
import {
  Classic,
  classicKinds,
  ClassicLoader,
  Lobby,
} from "@empirica/core/admin/classic";
import { info, setLogLevel } from "@empirica/core/console";
import minimist from "minimist";
import process from "process";
import { Empirica } from "./callbacks";

//import fs from 'fs';
//import path from 'path';

const argv = minimist(process.argv.slice(2), { string: ["token"] });

setLogLevel(argv["loglevel"] || "info");

(async () => {
  // Read and parse local.json
  //const localConfigPath = path.join(__dirname, 'local.json');
  //const localConfig = JSON.parse(fs.readFileSync(localConfigPath, 'utf8'));

  // Extract admin credentials
  //const adminCredentials = localConfig.admins && localConfig.admins[0]; // assuming first admin details are to be used

  const ctx = await AdminContext.init(
    argv["url"] || "http://localhost:3000/query",
    argv["sessionTokenPath"],
    "callbacks",
    argv["token"],
    {
      // Apply admin credentials here, modify as per Empirica's requirements
      //adminUsername: adminCredentials.username,
      //adminPassword: adminCredentials.password,
    },
    classicKinds
  );

  ctx.register(ClassicLoader);
  ctx.register(Classic());
  ctx.register(Lobby());
  ctx.register(Empirica);
  ctx.register(function (_) {
    _.on("ready", function () {
      info("server: started");
    });
  });
})();

process.on("unhandledRejection", function (reason, p) {
  process.exitCode = 1;
  console.error("Unhandled Promise Rejection. Reason: ", reason);
});
