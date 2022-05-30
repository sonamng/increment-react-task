// import React,{Component} from "react";
// class Show extends Component{
//     constructor(){
//         super();
//         this.state={
//             data:0
//         }
//     }
//     render(){
//         return(
//             <div className="box">
//                 <h1>{this.state.data}</h1>
//                 <button className="one" onClick={()=>this.setState({data:this.state.data+1})} >Increment</button>
//                 <button className="two" onClick={()=>this.setState({data:this.state.data-1})} >Decrement</button>
//             </div>
//         )
//     }
// }
// export default Show;





import React,{Component} from "react";
class Show extends Component{
    constructor(){
        super();
        this.state={
            data:0
        }
    }
    updateData=()=>{
        if(this.state.data<=0){
            alert("It's negative number")
        }else{
            this.setState({data:this.state.data-1});
        }
    }
    showData=()=>{
        this.setState({data:this.state.data+1});  
    }
    render(){
        return(
            <div className="box">
                <h1>{this.state.data}</h1>
                <button className="one" onClick={this.showData} >Increment</button>
                <button className="two" onClick={this.updateData} >Decrement</button>
            </div>
        )
    }
}
export default Show;




