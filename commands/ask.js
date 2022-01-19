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
    }

}

module.exports = Ask