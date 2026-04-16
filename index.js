const kleur = require("kleur"); 
console.log(kleur.bold(`
▗▄▄▄▖   ▐▌
  █     ▐▌ ▄▄▄  ▄▄▄▄         Identity Object Network (Local Server)
  █  ▗▞▀▜▌█   █ █   █        (c) 2025 solarcosmic
▗▄█▄▖▝▚▄▟▌▀▄▄▄▀ █   █                                             
`));
console.log(kleur.grey("[") + kleur.green("INFO") + kleur.grey("] Server is now starting."));
const express = require("express");
const path = require("path");
const app = express()
app.use(express.static("public"));
const port = 3000
app.get("/", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const data = {
    
  };
  res.json(data);
})

app.listen(port, () => {
    console.log(kleur.grey("[") + kleur.green("INFO") + kleur.grey("] Now listening on port " + port + "."));
});