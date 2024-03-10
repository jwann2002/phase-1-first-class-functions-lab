const driversArray = ["Driver1", "Driver2", "Driver3", "Driver4"];

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
  return function(fare) {
    return fare * integer;
  };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

module.exports = {
  selectingDrivers,
  fareDoubler,
  fareTripler
};

function selectDifferentDrivers(drivers, selectingFunction) {
  return selectingFunction(drivers);
}

// Select the first two drivers
const firstTwoDriversSelected = selectDifferentDrivers(driversArray, returnFirstTwoDrivers);
console.log(firstTwoDriversSelected); // Output: ["Driver1", "Driver2"]

// Select the last two drivers
const lastTwoDriversSelected = selectDifferentDrivers(driversArray, returnLastTwoDrivers);
console.log(lastTwoDriversSelected); // Output: ["Driver3", "Driver4"]


