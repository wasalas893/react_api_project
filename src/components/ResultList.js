import React,{Component} from 'react';


class ResultList extends Component{

    
    render(){

     if(this.props.resultPlaces.results!==undefined){
         
        var placeList=this.props.resultPlaces.results.map(name=>{
           
            return(
            <li key={name.id}>{name.name}</li>
            )
        })

     }
        return(
        <ul>
            {placeList}
           
         </ul>
        )
    }
}
export default ResultList;