'use strict'

const ace = require('@adonisjs/ace')

ace.addCommand(require('./commands/greeting'))
ace.addCommand(require('./commands/package'))
ace.addCommand(require(`./commands/ask`))

ace.wireUpWithCommander()
ace.invoke()