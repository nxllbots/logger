const { CLI } = require("../index.js")
const figlet = require("figlet")
const align = require("align-text")

const App = new CLI();

(async () => {
    figlet("test", {
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