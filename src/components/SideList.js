import React,{Component} from 'react';


class SideList extends Component{


   
    

    render(){



        var saveList=this.props.savedPlaces.map(name=>{
           
            return(

                <div className="alert alert-info" key={name}>
                    <br></br>
                    <a href="#" className="btn btn-xs btn-primary pull-right">Click for More info</a>
            <strong>{name}</strong>
                </div>
            
                
            )
        })
         

        console.log("save list name",this.props.savedPlaces)
        return(

            <ul>
                <h2>Save Plces</h2>
                {saveList}
            </ul>
            
        )
    }
}
export default SideList;