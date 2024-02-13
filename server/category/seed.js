const category = require('./category')
const data = [
    'Прогнозы',
    'Веб-разработка',
    'Мобильная разработка',
    'Фриланс',
    'Алгоритмы',
    'Тестирование IT систем',
    'Разработка игр',
    'Дизайн и юзабилити',
    'Искуственный интелект',
    'Машинное обучение'
]

async function writeDataCategory(){
    const length = await category.count();
    if(length == 0){
        data.map((item, index) => {
            new category({
                name: item,
                key: index
            }).save()
        })
    }
}
module.exports = writeDataCategory