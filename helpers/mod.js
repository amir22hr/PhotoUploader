const Image = require('../models/Image')
const date = require('date-and-time');


const data = {
    today: 0,
    all: 0,
    user: 0,
    guests: 0,
}

const UserAnalysis = async () => {
    data.user = await Image.count();
    data.all = await Image.count();
    data.guests = await Image.count()

    //today
    let DateToday = date.format(new Date(), 'YYYY/MM/DD');
    data.today = await Image.count({
        where: {
            date: DateToday
        }
    })

}

const routes = {
    home: "/",
    hostImage : `http://localhost:${process.env.PORT}/images/`,
}

const shortSentences = () => {
    let proverb = [
        "A bad workman always blames his tools",
        "A bird in hand is worth two in the bush",
        "Absence makes the heart grow fonder",
        "A cat has nine lives",
        "A chain is only as strong as its weakest link",
        "Actions speak louder than words",
        "A drowning man will clutch at a straw",
        "Adversity and loss make a man wise",
        "A fool and his money are soon parted",
        "A journey of thousand miles begins with a single step",
    ]

    return proverb[Math.floor(Math.random() * 10)]
}


module.exports = { data, routes, shortSentences, UserAnalysis }