var getFact = function () {
  var facts = [
    "URGENT: PLEASE CAN YOU BOOK LOVELACE FOR 16 PEOPLE?!",
    "Hi Ops, we need help booking a room.",
    "All the rooms are booked, please help!",
    "All I see are voids on the calendar - where can I book a room not a void?"
  ];
  return facts[Math.floor(Math.random()*facts.length)];
};

module.exports = getFact;
