function determine_Age(age){
    return ( age < 18 ) ? 'Minor' : (age <= 65) ?
    'Adult Not Retired Yet' : 'Elderly Person Retired'
}
//does not require ' >= 18' because the first if ststement took care of it for us
console.log(determine_Age(31))