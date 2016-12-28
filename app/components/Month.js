var React = require('react');
var Projections = require('./Projections');
var AddTransaction = require('./AddTransaction');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Month = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function(){
        return {
            transactions: []
        }
    },
    componentDidMount: function(){
        this.ref = new Firebase('https://react-firebase-1a584.firebaseio.com/');
        this.init(this.props.params.name);
    },
    componentWillReceiveProps: function(nextProps){
        this.unbind('transactions');
        this.init(nextProps.params.name);
    },
    componentWillUnmount: function(){
        this.unbind('notes');
    },
    init: function(name){
        var childRef = this.ref.child(name);
        this.bindAsArray(childRef, 'transactions');
    },
    handleAddTransaction: function(newTransaction){
        this.ref.child(this.props.params.name).child(this.state.transactions.length).set(newTransaction)
    },
    render: function(){
        return (
            <div className="col-sm-12">
                <h2>Month: {this.props.params.name}</h2>
                <hr />
                <p>Enter new transaction:</p>
                <AddTransaction name={this.props.params.name} addTransaction={this.handleAddTransaction}/>
                <hr />
                <Projections transactions={this.state.transactions}/>
            </div>
        )
    }
});

module.exports = Month;
