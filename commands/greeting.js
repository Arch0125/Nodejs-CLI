'use strict'

const { Command } = require("@adonisjs/ace");

class Hello extends Command{

    static get signature(){
        return 'hello'
    }

    static get description(){
        return 'Say hello to stranger'
    }

    async handle(){
        console.log('Hello Stranger')
    }

}

module.exports = Hello