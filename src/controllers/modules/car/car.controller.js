let _carServices = null;

module.exports = class CarController {
  constructor(CarServices) {    
    _carServices = CarServices;
  }

  async list(req, res, next) {
    const { pageSize, pageNum } = req.query;
    try {
      const el = await _carServices.getAll(
        parseInt(pageSize),
        parseInt(pageNum)
      );
      return res.status(200).json(el);
    } catch (error) {
      next(error);
    }
  }

  async get(req, res, next) {
    const {
      params: { carId },
    } = req;
    try {
      const [car] = await _carServices.get(carId);
      return res.status(200).json(car);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    const { body } = req;    

    try {
      const [createdCar] = await _carServices.create(body);
      return res
        .status(201)
        .json({ msg: 'Car created succesfully', data: createdCar });
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    const {
      body,
      params: { carId },
    } = req;
    try {
      const [updatedCar] = await _carServices.update(carId, body);
      return res
        .status(200)
        .json({ msg: 'Car updated succesfully', data: updatedCar });
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    const {
      params: { carId },
    } = req;
    try {
      await _carServices.delete(carId);
      return res.status(200).json({ msg: 'Car deleted succesfully' });
    } catch (error) {
      next(error);
    }
  }

  async search(req, res, next) {
    const {
      params: { value },
    } = req;
    try {
      const cars = await _carServices.searchByValues(value);
      return res.status(200).json({ data: cars });
    } catch (error) {
      next(error);
    }
  }
};
