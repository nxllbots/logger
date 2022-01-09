# ✨ @nxll/logger ✨
A simple logger class to make CLI's.

# ✨ Usage ✨

Below you can view how to use the logger in conjuction with figlet and align-text, to make a good looking console output for your tool.
```js
const { CLI } = require("../index.js")
const figlet = require("figlet")
const align = require("align-text")

const App = new CLI();

(async () => {
    figlet("NXLL", {
        font: "Big Money-ne"
    }, (err, data) => {
        if(err) {
            throw err
        }
        else {
            console.log(`${align(data, 26)}\n\n${"-".repeat(100)}\n\n`)
            App.success("Success :\)")
            App.error("Error x\(")
            App.warn("Warning :\(")
            App.info("Info :O")
        }
    })
    
})();
```