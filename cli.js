'use strict'

const ace = require('@adonisjs/ace')

ace.addCommand(require('./commands/greeting'))

ace.wireUpWithCommander()
ace.invoke()