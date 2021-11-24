const model = {
  'name': 'dellirom',
  'type': 'text'
};

Object.observe(model, function(changes){

    // Эта асинхронная возвращаемая функция запускается,
    changes.forEach(function(change) {

        // Давая нам понять, что изменилось
        console.log(change.type, change.name, change.oldValue);
    });

});

model.name = 'Deller';