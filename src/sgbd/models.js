const Sequelize = require("sequelize");
const myDB = require("./src/config");
const User = myDB.define("user", {
name: {
type: Sequelize.STRING ,
allowNull: false,
},
email: {
type: Sequelize.STRING ,
allowNull: false,
unique: true,
validate: {
    isEmail: true,
},
},
});
const Task = myDB.define("task", {
action: {
    type: Sequelize.STRING ,
    allowNull: false,
},
solved: {
type : Sequelize.BOOLEAN,
allowNull: false,
}
});