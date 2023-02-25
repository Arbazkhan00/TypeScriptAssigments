function describe_city(city, country) {
    if (country === void 0) { country = "USA"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi", "Pakistan"); // output: Karachi is in Pakistan.
describe_city("New York City"); // output: New York City is in USA.
describe_city("Sydney", "Australia"); // output: Sydney is in Australia.
