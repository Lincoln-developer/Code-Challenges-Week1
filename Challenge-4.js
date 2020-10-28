//Creating a function and passing of a parameter into the function:
function drinkingCriteria(age) {
    //Detects the age of a person to return a specific meassage:
    if (age >=18) {
        return "Excessive Consumption Of Alcohol is Harmful To Your Health, Please Drink Responsibly!"
    }
    else{
        return "Alcohol Is Not For Sale To Persons Below The Age Of 18! "
    };
    
};
console.log(drinkingCriteria(12));//Outputs a message basing on age detected: