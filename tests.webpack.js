var context = require.context('./app/tests', true, /\.test\.jsx?$/);
context.keys().forEach(context);