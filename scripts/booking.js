/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var dailyCost = 35,
    nbrOfDays = 0,
    mon = document.getElementById("monday"),
    tue = document.getElementById("tuesday"),
    wed = document.getElementById("wednesday"),
    thu = document.getElementById("thursday"),
    fri = document.getElementById("friday"),
    full = document.getElementById("full"),
    half = document.getElementById("half"),
    clearDays = document.getElementById("clear-button");
    




/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function selector() {
    if (this.classList.contains("clicked") == false) {
        this.classList.add("clicked");
        nbrOfDays++;
        costCalculator();
    }
}



mon.addEventListener("click", selector);
tue.addEventListener("click", selector);
wed.addEventListener("click", selector);
thu.addEventListener("click", selector);
fri.addEventListener("click", selector);








function costCalculator() { 
    finalcost(dailyCost * nbrOfDays);
}




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearDays.addEventListener("click", daysreset);
function daysreset() {
    mon.classList.remove("clicked");
    tue.classList.remove("clicked");
    wed.classList.remove("clicked");
    thu.classList.remove("clicked");
    fri.classList.remove("clicked");
    nbrOfDays = 0;
    costCalculator();
    }




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
half.addEventListener("click", halfrate);
function halfrate() { 
    dailyCost = 20;
    half.classList.add("clicked");
    full.classList.remove("clicked");
    costCalculator();
}



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
full.addEventListener("click", fullrate);
function fullrate() { 
    dailyCost = 35;
    full.classList.add("clicked");
    half.classList.remove("clicked");
    costCalculator();

}




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function finalcost(cost) {
    document.getElementById("calculated-cost").innerHTML = cost;
}

