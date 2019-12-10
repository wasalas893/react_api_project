import React, {Component} from 'react';

import axios from 'axios';


class Search extends Component{

    getKey(e){
      
        e.preventDefault();
        const keyType=this.refs.inputword.value;

        const update=this.props;

      //console.log(keyType);
       


        
        axios.post('http://localhost:3001/getLocations', {
           city: keyType, 
           
          })
          .then(function (response) {
            //data tika penwaiii
              console.log(response)
              update.callUpdate(response.data.data)
            
          })
          .catch(function (error) {
            console.log(error);
          });

        //AIzaSyAtap7U1f06PFFJF2axi0XtoawYAl_Lxo8
    }

    render(){
       
        return(


            <form className="form-horizontal">
            <fieldset>
              <legend>Search Place</legend>
              <div className="col-md -10">
 
                <div className="form-group">
                  <label htmlFor="inputEmail" className="col-lg-2 control-label">Please</label>
                  <div className="col-lg-10">
                    <input type="text" className="form-control" id="inputEmail" placeholder="Serach Hre" ref="inputword"/>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary" onClick={this.getKey.bind(this)}>Seach</button>
              </div>
            </fieldset>
          </form>
        )
    }
}
export default Search;