function mapperToClientSide(entity, includeFormat = true) {
  const mappedData = entity.map((data) => ({
    id: data._id,
    brand: data.brand,
    model: data.model,
    year: data.year,
    patent: data.patent,
    color: data.color    
  }));
  return mappedData;
}

module.exports = { mapperToClientSide };
