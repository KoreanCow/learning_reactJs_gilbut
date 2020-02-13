// import React, { Component } from 'react';

// class EventPractice extends Component {
//     state = {
//         number : 0,
//         message: '',
//     }
//     render() {
//         const { number }  = this.state;
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>
//                 <input
//                 type = 'text'
//                 name = 'message'
//                 placeholder = '아무거나 입력해 보세요'
//                 value={this.state.message}
//                 onChange={
//                     (e) => {
//                         this.setState({
//                             number: number + 1,
//                             message: e.target.value,
//                         })
//                     }
//                 }
//                 />

//                 <button onClick={
//                     () => {
//                         alert(this.state.message +' ' + this.state.number);
//                         this.setState({
//                             message: '',
//                             number: 0
//                         })
//                     }
//                 }
//                 >확인</button>
//             </div>
//         );
//     }
// }
// export default EventPractice;


// import React, { Component } from 'react'; 기본 방식
// class EventPractice extends Component {
//     state ={
//         message: '',
//     }

//     constructor(props){
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleChange(e){
//         this.setState({
//                 message: e.target.value,
//         })
//     }

//     handleClick(){
//         alert(this.state.message);
//         this.setState({
//             message: '',
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>이벤트 연습</h1>     
//                 <input
//                 type='text'
//                 name='message'
//                 placeholder='아무거나 입력해 보세요'
//                 value={this.state.message}
//                 onChange={this.handleChange}
//                 />
//                 <button onClick={this.handleClick}>확인</button>
//             </div>
//         );
//     }
// }

// export default EventPractice;

import React, { Component } from 'react'; // Property Initializer Syntax

class EventPractice extends Component {

    state = {
        username: '',
        message: '',
    }

    handleChange = (e) => {
        this.setState({
            // message: e.target.value
            [e.target.name]: e.target.value,
        })
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message: '',
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>     
                <input
                type='text'
                name='username'
                placeholder='사용자명'
                value={this.state.username}
                onChange={this.handleChange}
                />
                <input
                type='text'
                name='message'
                placeholder='아무거나 입력해 보세요'
                value={this.state.message}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;