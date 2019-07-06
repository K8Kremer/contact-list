import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
//routing for ContactList (index), Contact and Contact Form will be handled here so import those
import Home from './Home'
import ContactList from './ContactList'
import Contact_Form from './Contact_Form';
import Contact from './Contact';

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      contacts: [
      {"id": 70219577,
      "name": "Albert Einstein",
      "image_url": "https://ichef.bbci.co.uk/news/660/media/images/82399000/jpg/_82399978_75952740.jpg",
      "email": "aeinstein@example.com",
      "phone_number": "15555555555"},

      {"id": 70219578,
      "name": "Kate Kremer",
      "image_url": '',
      "email": "kkremer@example.com",
      "phone_number": "15555555556"},

      ]
  }
}

  //addContact function will be how state is passed from Contact Form

//routing
  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/contacts' render={() => (
            <ContactList contacts={this.state.contacts}/>
            )}/>
          <Route path='/contacts/:id' render={(props) =>(
              <Contact props={props} contacts={this.state.contacts}/>
            )}/>

        </Switch>
      </div>
    )
  }
}

export default App
