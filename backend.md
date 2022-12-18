<!-- QUESTION -->

Task -1 ( User BMI Calculation system )
As a user i need to login to the account and able to calculate the BMI value with the given
height and weight.
FLOW

1. Need to have register api . So, that user can register his details and login from next time.
   ( registration values name, email, password)
2. Need to have login api . Inputs email and password.
3. Need to have getProfile api to get his own details
4. Need to have calculateBMI api . Inputs height (feet) and weigh(kgs) . Output BMI value
   formula: weight (kg) / [height (m)]2
5. Need to have getCalculation Hestory to get previous calculated BMI data
6. Need to have logout api to get out of the operations
   You can use the .json files or .txt for storing the data or you can use any database to store
   the user data and hestory data
   BONUS
7. If you use the any database - MongoDB
8. If you use token and middleware for authontication process - Yes
9. If you can document the steps to run the code

API's

1. /register or /signup - name, email, password
2. /login - email, password
3. /getProfile - name, email from the DB -
4. /calculateBMI - height(in feet), weight(kgs) -> O/P -> BMI value -> weight/(height^2) [height in m]
5. /getCalculation - send History -> send all previous BMI data of that particular user
6. logout -> clear token on the frontend

http://localhost:8000/login
http://localhost:8000/signup
http://localhost:8000/getProfile - GET
http://localhost:8000/calculateBMI - POST
http://localhost:8000/getCalculation - GET
