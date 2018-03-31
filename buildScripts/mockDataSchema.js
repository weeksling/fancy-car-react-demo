var schema = {
  "type": "object",
  "properties": {
    "cars": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
	    "faker": "random.uuid",
            "minimum": 1
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
          }
        },
        "required": ["id", "name", "make", "model", "year"]
      }
    }
  },
  "required": ["cars"]
};

module.exports = schema;
