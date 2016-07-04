/*点击事件*/
var TextClickComponent = React.createClass({
    /*点击消失和出现 refs*/
    handleClick:function(event){
        event.stopPropagation();
        event.preventDefault();
        var tipE = ReactDOM.findDOMNode(this.refs.tip);
        if(tipE.style.display==='none'){
            tipE.style.display = 'inline';
        }else{
            tipE.style.display = 'none';
        }
    },
    render:function(){
        return(
            <div>
                <button onClick={this.handleClick}>
                    显示|隐藏
                </button>
                <span ref='tip'>测试点击</span>
            </div>
        )
    }
});
var TestInputComponent = React.createClass({
    getInitialState:function(){
        return{
            inputContent:''
        }
    },
    /*同步内容设置*/
    changeHandler:function(event){
        this.setState({
            inputContent:event.target.value
        });
        event.stopPropagation();
        event.preventDefault();

    },
    render:function(){
        return(
            <div>
                <input onChange={this.changeHandler} type="text"/>
                <span>{this.state.inputContent}</span>
            </div>
        )
    }
});
ReactDOM.render(
    <div>
        <TextClickComponent />
        <TestInputComponent />
    </div>,
    document.getElementById('main')
);