var schema = {
  "type": "object",
  "properties": {
    "cars": {
      "type": "array",
      "minItems": 7,
      "maxItems": 11,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
	          "faker": "random.uuid"
          },
          "image": {
            "type": "string",
            "faker": "image.transport"
          },
          "email": {
            "type": "string",
            "faker": "internet.email"
          },
          "name": {
            "type": "string",
            "faker": "name.lastName"
          },
          "make": {
            "type": "string",
            "faker": "company.companyName"
          },
          "model": {
            "type": "string",
            "faker": "company.companyName"
          },
          "year": {
            "type": "string",
            "faker": "date.past"
          },
          "availability": {
            "type": "string",
            "enum": ["In Dealership", "Unavailable", "Out of Stock"]
          }
        },
        "required": ["id", "email", "image", "name", "make", "model", "year", "availability"]
      }
    }
  },
  "required": ["cars"]
};

module.exports = schema;
