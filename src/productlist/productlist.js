import React from 'react';
import './productlist.css';




class Productlist extends React.Component {

    state={
        clicked: false
    }

    changeclick = ()=>{
        this.setState((prev)=>{
            return{
            clicked : !prev.clicked
        }})
    }

    render(){
        return(
            <div className= "container">
                <div className="card">
                     <div className="card-body">
                         
                         <h2 >{this.props.id}  {this.props.title}</h2>
                         <button  onClick={this.changeclick}> select + </button> 
                         </div>
                         {
                             this.state.clicked  ?
                             this.props.products.cleanser.map((item)=>{
                                 return(
                                    <div className="card-body" key={item.id} style={{display:"block"}}>
                                        <div>{item.id} {item. description} {item.price} </div>
                                        <img src={item.img} alt={item.id}></img> 
                                    </div> 
                                    )
                             })
                            
                             : null
                         }

                
                </div>   
            </div>
        )
    }
  
}

export default Productlist;