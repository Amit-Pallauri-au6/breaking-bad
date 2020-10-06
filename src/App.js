import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { fetchCasts, fuzzySearch } from './redux/actions/castActions'
import ProfilePic from './components/ProfilePic';
import Biodatas from './components/Biodatas'
import InputForm from './components/InputForm';


class App extends Component {

  constructor(){
    super()
    this.state = {
      inputValue : ""
    }
  }

  handleChange = e => {
    this.setState({inputValue: e.target.value});
  }

  componentDidMount (){
    this.props.fetchCasts()
  }

  // componentDidUpdate(prevProps){
  //   console.log(prevProps)
  //   this.props.fuzzySearch(this.state.inputValue)
  // }
  
  render(){
      if(!this.props.datas) {
        return (
          <div className="container">
              <div className="box"></div>
          </div>
        )
      }else{
        return (
        <div className="App">
          <div className="input-form">
            <InputForm
              onChange ={this.handleChange}
            />
          </div>
          <div className="content">
            {this.props.datas.map( data =>
              <div key={data.char_id} className="flip-card">
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                        <ProfilePic
                          image = {data.img}
                        />
                  </div>
                  <div className='flip-card-back'>
                      <Biodatas
                        data = {data}
                      />
                  </div>
                </div>
              </div>
            )}          
          </div>
        </div>
        )
      }
    }
}

const mapStateToProps = storeState => {
  return {
    datas : storeState.datas
  }
}

export default connect (mapStateToProps, { fetchCasts, fuzzySearch }) (App);
