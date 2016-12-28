var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');

var AddTransaction = React.createClass({
    getInitialState: function() {
        return {
            startDate: moment()
        }
    },
    transaction: {
        expense: 0,
        income: 0
    },
    formFields: [],
    setItemDesc: function(e){
        this.transaction.itemDes = e.target.value;
        this.formFields.push(e.target);
    },
    setDate: function(date){
        this.transaction.date =  moment(date).unix();
        var datepicker = document.querySelector('.datepicker');
        datepicker.value = moment(date);
        this.formFields.push(datepicker);
        this.setState({
            startDate: date
        });
    },
    setExpense: function(e){
        this.transaction.expense = parseInt(e.target.value , 10 );
        this.formFields.push(e.target);
    },
    setIncome: function(e){
        this.transaction.income = parseInt(e.target.value , 10 );;
        this.formFields.push(e.target);
    },
    handleSubmit: function(){
       var newTransaction = this.transaction;
        this.formFields.forEach(function(item){
            item.value = '';
        })
        this.props.addTransaction(newTransaction);
    },
    render: function(){
        return (
            <form className="form-inline enter-month">
                <div className="form-group">
                    <input type="text" className="form-control"  onChange={this.setItemDesc} placeholder="Item Desc." />
                </div>
                <div className="form-group">
                    <DatePicker className="form-control datepicker" selected={this.state.startDate} onChange={this.setDate} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control"  onChange={this.setExpense} placeholder="Enter total exp" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control"  onChange={this.setIncome} placeholder="Enter total income" />
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit transaction</button>
            </form>
        )
    }
});

module.exports = AddTransaction;
