# CI / CD Pipeline

The ability to turn on and off at any stage to be able to control what gets promoted to the next stage.



## 1. Source

- Require X reviewers.

## 2. Build

- Compile source and dependencies
- Run unit tests
- Check and enforce code coverage (>90%)


## 3. Testing environment
- Run integration test
  - Test the create order for the API and checn the correct answer ins returned.
  - Call the get order just after to check if the right items got created
  - Check for restrictions created by business rules (Unable to create and order with value hicher than X)
- Check end to end workflow. Even external dependencies, check if they return what's expected.


## 4. Prod Environment (1 box)

Depending on the size of the business / enterprise more previous stages for production testing might be necessary, like Staging and 
