import React, {Component} from 'react';


class Search extends Component{
    render(){
        return(


            <form className="form-horizontal">
            <fieldset>
              <legend>Search Place</legend>
              <div className="col-md -10">
 
                <div className="form-group">
                  <label htmlFor="inputEmail" className="col-lg-2 control-label">Please</label>
                  <div className="col-lg-10">
                    <input type="text" className="form-control" id="inputEmail" placeholder="Serach Hre"/>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary">Seach</button>
              </div>
            </fieldset>
          </form>
        )
    }
}
export default Search;