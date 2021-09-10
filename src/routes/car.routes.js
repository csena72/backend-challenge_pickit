module.exports = (router, CarController) => {
    router
      .get('/all', CarController.list)
      .get('/search/:value', CarController.search)
      .get('/:carId', CarController.get)
      .post('/', CarController.create)
      .patch('/:carId', CarController.update)
      .delete('/:carId', CarController.delete)
    return router;
  };
  