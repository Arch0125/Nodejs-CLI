'use strict'

const { Command } = require("@adonisjs/ace");

class Hello extends Command{

    static get signature(){
        return `hello
        {name?: greet with personal name}
        `
    }

    static get description(){
        return 'Say hello to stranger'
    }

    async handle({name}){
        console.log(`Hello ${name || 'Stranger'}`)
    }

}

module.exports = Hello