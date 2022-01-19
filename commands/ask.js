'use strict'

const { Command } = require("@adonisjs/ace");

class Ask extends Command{

    static get signature(){
        return `
        ask
        `
    }

    static get description(){
        return 'Enter name'
    }

    async handle(){
        const input = await this.ask(`Whats your name ?`)
        console.log(input)

        const confirm = await this.confirm(`Do you want to ask any more questions ?`, {default:false})
        console.log(confirm)

        if(confirm){
            const choice = this.choice(`Choose your template`,[`Basic`,`Advanced`])
            console.log(choice)
        }
        
    }

}

module.exports = Ask