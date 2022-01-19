'use strict'

const Ora = require(`ora`)
const { Command } = require("@adonisjs/ace");

const { resolve } = require("path");

class Load extends Command{

    static get signature(){
        return `
        loader
        `
    }

    static get description(){
        return 'Loading animations'
    }

    async handle(){

        const spinner=Ora('Starting Tasks')

        spinner.start()

        await this.waitaSecond()
        spinner.color='magenta'
        spinner.text='Task 1'

        await this.waitaSecond()
        spinner.color='cyan'
        spinner.text='Task 2'

        await this.waitaSecond()
        spinner.succeed(`Process Completed`)
    }

    async waitaSecond(){
        return new Promise(resolve=>setTimeout(resolve,2000))
    }

}

module.exports = Load