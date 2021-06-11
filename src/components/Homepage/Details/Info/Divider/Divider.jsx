
const Divider = ({number}) => {

    let acumNumber = ""

    if (number) {
        const divider = String(number).split("")
        const numberLong = String(number).length

        if (numberLong <= 9) {
            divider.splice(-3,0,".")
            divider.splice(-7,0,".")

            acumNumber = divider.join("")            
        }
        else {
            divider.splice(-3,0,".")
            divider.splice(-7,0,".")
            divider.splice(-11,0,".")

            acumNumber = divider.join("")
        }
    }
    
    return acumNumber;
    
} 

export default Divider