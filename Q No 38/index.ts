function describe_city(city: string, country: string = "USA") {
    console.log(`${city} is in ${country}.`);
  }
  describe_city("Karachi", "Pakistan"); // output: Karachi is in Pakistan.
describe_city("New York City"); // output: New York City is in USA.
describe_city("Sydney", "Australia"); // output: Sydney is in Australia.
