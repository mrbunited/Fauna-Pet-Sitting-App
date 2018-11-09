import React from 'react';





class BookAppointment extends React.Component {

    state = {

    }
    componentWillMount(){
       const custId =  this.props.match.params.customerId
       const sitterId = this.props.match.params.sitterId

       console.log(custId);
       console.log(sitterId);
    }

    render() {
        return(
            <div>
                <h1>BookAppointment page</h1>
                <div>  
                    

                </div>
            
            </div>
        )
    }
}

export default BookAppointment;

// Utilize DatePicker 
//Grab pets in customer object and populate a multiple selection dropdown
//Grab all customer contact information and populate it into the appointmemt
// Have a text box for customer to type in special care instructions
